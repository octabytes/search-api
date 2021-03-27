const patterns = require("../patterns");

const transformer = (query) => {
  query = query.toLowerCase();
  const tokens = query.split(" ");

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

    results.push({
      score: score / maxScore,
      patternResults: patternResults,
    });
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

module.exports = transformer;
