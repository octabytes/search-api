const possibleWords = ["surah", "surat", "surahs", "ayah", "ayat", "ayahs"];

const exec = (words) => {
  let filterField, filterValue;

  if (possibleWords.includes(words[0])) {
    filterField = words[0];
  }

  if (!isNaN(words[1])) {
    filterValue = parseInt(words[1]);
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
