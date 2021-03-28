const sw = require("stopword");
const { arrayDiff, removeSpecialWords } = require("../../utils");
const { removeExtraWhiteSpaces } = require("../../utils/utils");
const patterns = require("../patterns");

const englishStopWords = arrayDiff(sw.en, ["from", "to"]);
const specialWords = ["#", "number", "num", "no.", "no"];

const NLP = (query) => {
  query = query.toLowerCase();
  query = removeSpecialWords(query, specialWords);
  query = removeExtraWhiteSpaces(query);

  let tokens = query.split(" ");
  tokens = sw.removeStopwords(tokens, englishStopWords);

  const results = [];

  for (const pattern of patterns) {
    const maxScore = pattern.length;
    let score = 0;
    let lastIndex = -1;
    const patternResults = [];

    for (patternPart of pattern) {
      let word;

      if (patternPart.require_words > 1) {
        word = tokens.slice(
          lastIndex + 1,
          lastIndex + 1 + patternPart.require_words
        );
      } else {
        word = tokens[lastIndex + patternPart.require_words];
      }

      if (word === undefined || word.length === 0) {
        break;
      }

      const result = patternPart.exec(word);

      lastIndex += result.consume_words;
      score += result.score;

      if (result.fulfil) {
        patternResults.push({
          type: patternPart.type,
          value: result.value,
        });
      }
    }

    const avgScore = score / maxScore;

    results.push({
      score: avgScore,
      patternResults: patternResults,
    });

    if (avgScore === 1) {
      break;
    }
  }

  const maxPattern = results.reduce((prev, current) =>
    prev.score > current.score ? prev : current
  );

  const patternResults = maxPattern.patternResults;

  const transform = { score: maxPattern.score };

  for (const result of patternResults) {
    if (result.type === "collection") {
      transform.collection = result.value;
    }

    if (result.type === "filter") {
      if (!transform.filters) {
        transform.filters = [];
      }
      transform.filters.push(result.value);
    }

    if (result.type === "quran_special_format") {
      transform.filters = result.value;
    }

    if (result.type === "quran_surahs") {
      transform.collection = "quran";
    }
  }

  // Re-arrange the filters surah always must be first
  if (transform.filters && transform.filters.length > 1) {
    if (transform.filters[0].field !== "surah") {
      const tempFilters = transform.filters;
      transform.filters = [tempFilters[1], tempFilters[0]];
    }
  }

  // If there is no collection and filters are surah or ayah
  // then set the "Quran" collection

  if (!transform.collection) {
    if (transform.filters) {
      if (transform.filters.length > 1) {
        if (
          transform.filters[0].field === "surah" ||
          transform.filters[0].field === "ayah"
        ) {
          transform.collection = "quran";
        }
      } else if (transform.filters[0].field === "surah") {
        transform.collection = "quran";
      }
    }
  }

  return transform;
};

module.exports = NLP;
