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
    let consumedWords = 0;
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
      consumedWords += result.consume_words;

      if (result.fulfil) {
        patternResults.push({
          type: patternPart.type,
          value: result.value,
        });
      }
    }

    const avgScore = score / maxScore;
    const tokenScore = consumedWords / tokens.length;
    const confidence = (avgScore + tokenScore) / 2;

    results.push({
      confidence: confidence,
      score: avgScore,
      patternResults: patternResults,
    });

    if (confidence === 1) {
      break;
    }
  }

  const maxPattern = results.reduce((prev, current) =>
    prev.confidence > current.confidence ? prev : current
  );

  const patternResults = maxPattern.patternResults;

  const transform = {
    score: maxPattern.score,
    confidence: maxPattern.confidence,
  };

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

    if (result.type === "range") {
      transform.range = result.value;
    }

    if (result.type === "limit") {
      transform.limit = result.value;
    }
  }

  // Check if there is two filters and the same field value
  // then this is not right processing return 0 confidence
  if (transform.filters && transform.filters.length > 1) {
    const field1 = transform.filters[0].field;
    const field2 = transform.filters[1].field;
    if (
      (field1 === "surah" && field2 === "surah") ||
      (field1 === "ayah" && field2 === "ayah")
    ) {
      return { score: 0, confidence: 0 };
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

  // If collection is Quran and there is more then 2 filters
  // then this is not right processing return 0 confidence
  if (transform.collection === "quran") {
    if (transform.filters && transform.filters.length > 2) {
      return { score: 0, confidence: 0 };
    }
  }

  return transform;
};

module.exports = NLP;
