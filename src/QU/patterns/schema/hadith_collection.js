const { inPossibleWords, isNumber } = require("../../../utils");

const possibleWords = {
  bukhari: ["bukhari", "bokhari"],
  muslim: ["muslim"],
  tirmidhi: ["tirmidhi", "termidhi", "taremze", "taremzi"],
  abu_dawud: [
    "abu_dawud",
    "abu_daoad",
    "abu_daod",
    "abudawud",
    "abudaoad",
    "abudaod",
    "abodawud",
    "abodaoad",
    "abodaod",
    "dawud",
    "daoad",
    "daod",
  ],
  nasai: ["nasai", "nasae"],
  ibne_maja: ["ibne_maja", "ibnemaja", "ibnamaja", "maja"],
};

const exec = (words) => {
  let collectionName;
  let score = 0;
  let consumeWords = 0;

  // If word length is two then check both words if one of them is in possible words

  // case: second word should not be a number
  // e.g buhkari 123
  // Then use only first word

  //console.log(words, !isNumber(words[1]), isNumber(words[1]));

  if (words.length == 2 && !isNumber(words[1])) {
    consumeWords = 2;

    if ((word = inPossibleWords(words[0], possibleWords))) {
      collectionName = word.value;
      score = word.score;
    } else if ((word = inPossibleWords(words[1], possibleWords))) {
      collectionName = word.value;
      score = word.score;
    }
  } else {
    // Case: only single word the it should be in possible words
    if ((word = inPossibleWords(words[0], possibleWords))) {
      collectionName = word.value;
      score = word.score;
      consumeWords = 1;
    }
  }

  if (collectionName) {
    return {
      fulfil: true,
      score: score,
      consume_words: consumeWords,
      value: collectionName,
    };
  }

  return {
    fulfil: false,
    score: 0,
    consume_words: 0,
  };
};

const HadithCollection = {
  type: "collection",
  require_words: 2,
  exec: exec,
};

module.exports = HadithCollection;
