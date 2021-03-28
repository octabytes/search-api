// user_query = "surah baqara last 5 ayahs"
// user_query = "surah baqara first 5 ayahs"

const NLP = require("./src/QU/nlp");

const result = NLP("quran surah 2 last ayah");

console.log(result);
