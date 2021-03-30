// user_query = "surah baqara ayah 1"
// user_query = "surah baqara last 5 ayahs"
// user_query = "surah baqara first 5 ayahs"
// user_query = "surah al-baqarah ayat 1"
// user_query = "surah baqra ayat 1"
// user_query = "surah-al-baqarah ayah 1"
// user_query = "al-baqarah ayah 1"
// user_query = "surat-ul-baqarah ayah 1"
// user_query = "surah al-baqarah ayah from 1 to 5"

const NLP = require("./src/QU/nlp");

const result = NLP("surah al-baqarah ayah from 1 to 5");

console.log(result);
