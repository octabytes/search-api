const { inPossibleWords } = require("../../../utils");
const { isNumber } = require("../../../utils/utils");

const possibleWords = {
  surah: ["surah", "surat", "surahs"],
  ayah: ["ayah", "ayat", "ayahs"],
};

const exec = (word) => {
  if (inPossibleWords(word, possibleWords)) {
    return {
      fulfil: true,
      score: 1,
      consume_words: 1,
      value: "nonce",
    };
  } else {
    return {
      fulfil: false,
      score: 0,
      consume_words: 0,
    };
  }
};

const QuranSurahs = {
  type: "quran_surahs",
  require_words: 1,
  exec: exec,
};

module.exports = QuranSurahs;
