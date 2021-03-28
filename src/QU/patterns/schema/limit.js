const { isNumber } = require("../../../utils");

const exec = (words) => {
  // case: when words length is 3
  // e.g first 5 ayahs
  if (words.length == 3) {
    if (words[0] == "first" || words[0] == "last") {
      if ((num = isNumber(words[1]))) {
        let direction;
        if (words[0] == "first") {
          direction = "start";
        } else if (words[0] == "last") {
          direction = "end";
        }

        return {
          fulfil: true,
          score: 1,
          consume_words: 3,
          value: {
            field: "ayah",
            value: num,
            direction: direction,
          },
        };
      }
    }
  } else if (words.length == 2) {
    // case: last ayah
    if (words[0] == "last") {
      return {
        fulfil: true,
        score: 1,
        consume_words: 2,
        value: {
          field: "ayah",
          value: 1,
          direction: "end",
        },
      };
    }
  }

  return {
    fulfil: false,
    score: 0,
    consume_words: words.length,
  };
};

const Limit = {
  type: "limit",
  require_words: 3,
  exec: exec,
};

module.exports = Limit;
