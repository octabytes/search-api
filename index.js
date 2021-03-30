// user_query = "sahih bukhari hadith 1"
// user_query = "sahih bukhari hadees 1"
// user_query = "sahih bukhari hadees number 1"
// user_query = "sahih bukhari"
// user_query = "sahih bukhari hadith"
// user_query = "bukhari 123"
// user_query = "bukhari number 123"
// user_query = "bukhari #123"
// user_query = "bukhari number #123"

const NLP = require("./src/QU/nlp");

const result = NLP("bukhari number #123");

console.log(result);
