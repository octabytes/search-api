const { inPossibleWords } = require("../../../utils");
const { isNumber, isSurahName } = require("../../../utils/utils");

const possibleWords = {
  surah: ["surah", "surat", "surahs"],
  ayah: ["ayah", "ayat", "ayahs"],
};

const exec = (words) => {
  let filterField, filterValue;
  let score = 0;
  let consumeWords = 0;

  if (isNumber(words[0]) || isNumber(words[1])) {
    // Case first: when first word is field name and second is number
    if (!isNumber(words[0])) {
      if ((rootWord = inPossibleWords(words[0], possibleWords))) {
        filterField = rootWord.value;
        score = rootWord.score;
        consumeWords = 2;
      }

      if ((num = isNumber(words[1]))) {
        filterValue = num;
      }
    } else {
      // Case Second: when first word is number and second is field name
      if ((rootWord = inPossibleWords(words[1], possibleWords))) {
        filterField = rootWord.value;
        score = rootWord.score;
        consumeWords = 2;
      }

      if ((num = isNumber(words[0]))) {
        filterValue = num;
      }
    }
  } else {
    // Check the first word is "surah"
    if (inPossibleWords(words[0], { surah: possibleWords.surah })) {
      // Then second word can be a surah name
      if ((surah = isSurahName(words[1]))) {
        filterField = "surah";
        filterValue = surah.value;
        score = surah.score;
        consumeWords = 2;
      }
    } else if ((surah = isSurahName(words[0]))) {
      // The first word can be a surah name
      filterField = "surah";
      filterValue = surah.value;
      score = surah.score;
      consumeWords = 1;
    }
  }

  if (filterField && filterValue) {
    const value = { field: filterField, value: filterValue };

    return {
      fulfil: true,
      score: score,
      consume_words: consumeWords,
      value: value,
    };
  } else {
    return {
      fulfil: false,
      score: 0,
      consume_words: 0,
    };
  }
};

const Filter = {
  type: "filter",
  require_words: 2,
  exec: exec,
};

module.exports = Filter;
