const { inPossibleWords } = require("../../../utils");

const possibleWords = {
  quran: ["quran", "kuran", "qoran", "surahs"],
};

const exec = (word) => {
  if ((collection = inPossibleWords(word, possibleWords))) {
    return {
      fulfil: true,
      score: collection.score,
      consume_words: 1,
      value: collection.value,
    };
  } else {
    return {
      fulfil: false,
      score: 0,
      consume_words: 0,
    };
  }
};

const Collection = {
  type: "collection",
  require_words: 1,
  exec: exec,
};

module.exports = Collection;
