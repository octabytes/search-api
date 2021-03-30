const { isNumber, inPossibleWords } = require("../../../utils");

const possibleWords = {
  hadith: ["hadith", "hadees", "hadeas", "hades", "hadiths"],
};

const exec = (words) => {
  let hadithNumber;
  let score = 0;
  let consumeWords = 0;

  // case: when words length is two
  // First word should be hadith and second word should be a number
  if (words.length == 2) {
    if ((word = inPossibleWords(words[0], possibleWords))) {
      if ((num = isNumber(words[1]))) {
        hadithNumber = num;
        score = word.score;
        consumeWords = 2;
      }
    }
  } else {
    // case: when there is a single word
    // the word should be a number
    if ((num = isNumber(words[0]))) {
      hadithNumber = num;
      score = 1;
      consumeWords = 1;
    }
  }

  if (hadithNumber) {
    return {
      fulfil: true,
      score: score,
      consume_words: consumeWords,
      value: { field: "hadith_number", value: hadithNumber },
    };
  }

  return {
    fulfil: false,
    score: 0,
    consume_words: 0,
  };
};

const HadithNumber = {
  type: "filter",
  require_words: 2,
  exec: exec,
};

module.exports = HadithNumber;
