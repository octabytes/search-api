const replaceall = require("replaceall");
const levenshtein = require("fast-levenshtein");
const alphaNumeric = require("./alpha_numeric");

const inPossibleWords = (word, possibleWords) => {
  // Make sure word is not undefined
  if (word === undefined) return false;

  let wordsWithDistance = [];

  for (const key of Object.keys(possibleWords)) {
    if (possibleWords[key].includes(word)) {
      return { value: key, score: 1 };
    }

    // If word in not found in possible words then try it
    // with levenshtein distance
    for (const possibleWord of possibleWords[key]) {
      const wordLen = possibleWord.length;
      if (wordLen > 3) {
        const distance = levenshtein.get(word, possibleWord);
        if (wordLen <= 5 && distance === 1) {
          wordsWithDistance.push({
            value: key,
            score: 1 / (distance + 1),
          });
        } else if (wordLen > 5 && distance === 2) {
          wordsWithDistance.push({
            value: key,
            score: 1 / (distance + 0.5),
          });
        }
      }
    }
  }

  // If there is some words with distance
  if (wordsWithDistance.length) {
    const wordWithLowestDistance = wordsWithDistance.reduce((prev, current) =>
      prev.score > current.score ? prev : current
    );

    return {
      value: wordWithLowestDistance.value,
      score: wordWithLowestDistance.score,
    };
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

const removeArrItem = (arr, value) => {
  var index = arr.indexOf(value);
  if (index > -1) {
    arr.splice(index, 1);
  }
  return arr;
};

module.exports = {
  inPossibleWords,
  arrayDiff,
  removeSpecialWords,
  removeExtraWhiteSpaces,
  isNumber,
  removeArrItem,
};
