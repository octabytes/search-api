const { inPossibleWords } = require("../../../utils");
const { isNumber } = require("../../../utils/utils");

const possibleWords = {
  surah: ["surah", "surat", "surahs"],
  ayah: ["ayah", "ayat", "ayahs"],
};

const exec = (words) => {
  let filterField, filterValue;

  // Case first: when first word is field name and second is number

  if (!isNumber(words[0])) {
    if ((rootWord = inPossibleWords(words[0], possibleWords))) {
      filterField = rootWord;
    }

    if ((num = isNumber(words[1]))) {
      filterValue = num;
    }
  } else {
    // Case Second: when first word is number and second is field name
    if ((rootWord = inPossibleWords(words[1], possibleWords))) {
      filterField = rootWord;
    }

    if ((num = isNumber(words[0]))) {
      filterValue = num;
    }
  }

  if (filterField && filterValue) {
    const value = { field: filterField, value: filterValue };

    return {
      fulfil: true,
      score: 1,
      consume_words: 2,
      value: value,
    };
  } else {
    return {
      fulfil: false,
      score: 0,
      consume_words: 2,
    };
  }
};

const Filter = {
  type: "filter",
  require_words: 2,
  exec: exec,
};

module.exports = Filter;
