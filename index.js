// user_query = "surah no. 2 ayah no.1"
// user_query = "quran surahs"
// user_query = "quran"
// user_query = "something"
// user_query = "kuran"
// user_query = "kuran surt 2 ayt 1"

const NLP = require("./src/QU/nlp");

const result = NLP("quran surah 2 ayah 1 surah 2");

console.log(result);
