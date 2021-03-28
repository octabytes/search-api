const { isNumber, removeArrItem } = require("../../../utils");

const exec = (words) => {
  const consume_words = words.length;

  if (words.includes("to") && words.includes("end")) {
    words = removeArrItem(words, "end");
  }

  if (words.length > 4) {
    words = words.slice(words.length - 4);
  }

  if (words.length >= 4) {
    // first word should be "from" or "start"
    if (words[0] == "from" || words[0] == "start") {
      // second word should be number
      if ((fromNum = isNumber(words[1]))) {
        // third word can be a "to" or "end"
        if (words[2] === "to" || words[2] === "end") {
          // fourth word should be number
          if ((toNum = isNumber(words[3]))) {
            return {
              fulfil: true,
              score: 1,
              consume_words: consume_words,
              value: {
                field: "ayah",
                from: fromNum,
                to: toNum,
              },
            };
          }
        }
      }
    }
  } else if (words.length == 3) {
    if ((fromNum = isNumber(words[0]))) {
      if (words[1] == "to" || words[1] == "end") {
        if ((toNum = isNumber(words[2]))) {
          return {
            fulfil: true,
            score: 1,
            consume_words: consume_words,
            value: {
              field: "ayah",
              from: fromNum,
              to: toNum,
            },
          };
        }
      }
    }
  }

  return {
    fulfil: false,
    score: 0,
    consume_words: 0,
  };
};

const Range = {
  type: "range",
  require_words: 6,
  exec: exec,
};

module.exports = Range;
