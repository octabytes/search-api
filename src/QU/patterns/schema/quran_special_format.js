const exec = (word) => {
  if (word.includes(":") || word.includes("-")) {
    let words;
    if (word.includes(":")) {
      words = word.split(":");
    } else {
      words = word.split("-");
    }

    if (!isNaN(words[0]) && !isNaN(words[1])) {
      const value = [
        { field: "surah", value: parseInt(words[0]) },
        { field: "ayah", value: parseInt(words[1]) },
      ];

      return {
        fulfil: true,
        score: 1,
        consume_words: 1,
        value: value,
      };
    }
  }

  return {
    fulfil: false,
    score: 0,
    consume_words: 0,
  };
};

const QuranSpecialFormat = {
  type: "quran_special_format",
  require_words: 1,
  exec: exec,
};

module.exports = QuranSpecialFormat;
