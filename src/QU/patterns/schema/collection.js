const exec = (word) => {
  if (word === "quran") {
    return {
      fulfil: true,
      score: 1,
      consume_words: 1,
      value: "quran",
    };
  } else {
    return {
      fulfil: false,
      score: 0,
      consume_words: 1,
    };
  }
};

const Collection = {
  type: "collection",
  require_words: 1,
  exec: exec,
};

module.exports = Collection;
