// user_query = "surah 2 first 5 ayah"
// user_query = "surah 2 first 5 ayahs"
// user_query = "first 5 ayahs of surah 2"
// user_query = "surah 2 last 5 ayahs"
// user_query = "last 5 ayahs of surah 2"
// user_query = "surah 2 first five ayahs"
// user_query = "surah 2 last five ayahs"
// user_query = "surah baqara last 5 ayahs"
// user_query = "surah baqara first 5 ayahs"
// user_query = "quran surah 2 last ayah"

const NLP = require("./src/QU/nlp");

const result = NLP("surah 2 1 to 5");

console.log(result);
