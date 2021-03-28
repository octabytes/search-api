const replaceall = require("replaceall");
const alphaNumeric = require("./alpha_numeric");

const inPossibleWords = (word, possibleWords) => {
  for (const key of Object.keys(possibleWords)) {
    if (possibleWords[key].includes(word)) {
      return key;
    }
  }

  return false;
};

const arrayDiff = (arr1, arr2) => {
  return arr1.filter((item) => arr2.indexOf(item) < 0);
};

const removeSpecialWords = (query, words) => {
  let str = query;
  for (word of words) {
    str = replaceall(word, " ", str);
  }

  return str;
};

const removeExtraWhiteSpaces = (str) => {
  return str.replace(/\s+/g, " ").trim();
};

const isNumber = (word) => {
  if (!isNaN(word)) {
    return parseInt(word);
  }

  const isAlphaNumeric = alphaNumeric.find((item) => item.alpha === word);

  if (isAlphaNumeric) {
    return isAlphaNumeric.number;
  }

  return false;
};

module.exports.inPossibleWords = inPossibleWords;
module.exports.arrayDiff = arrayDiff;
module.exports.removeSpecialWords = removeSpecialWords;
module.exports.removeExtraWhiteSpaces = removeExtraWhiteSpaces;
module.exports.isNumber = isNumber;
