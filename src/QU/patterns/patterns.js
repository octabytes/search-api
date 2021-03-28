const Collection = require("./schema/collection");
const Filter = require("./schema/filter");
const QuranSpecialFormat = require("./schema/quran_special_format");
const QuranSurahs = require("./schema/quran_surahs");

const patterns = [
  // Quran
  [Collection],

  // Quran surah 2 ayah 1
  [Collection, Filter, Filter],

  // Quran Surahs
  [Collection, QuranSurahs],

  // Surahs
  [QuranSurahs],

  // Surah 2 ayah 1
  [Filter, Filter],

  // Quran Special Case: Quran 2:1
  [Collection, QuranSpecialFormat],

  // Quran Special Case: 2:1
  [QuranSpecialFormat],
];

module.exports = patterns;

// user_query = "Quran surah 2 ayah 1"
// user_query = "surah 2 ayah 1"
// user_query = "surah 2 ayat 1"
// user_query = "surat 2 ayat 1"
// user_query = "quran ayat 1 surah 2"
// user_query = "quran surah#2 ayat#1"
// user_query = "quran surah #2 ayat #1"
// user_query = "quran surah# 2 ayat# 1"
// user_query = "surah #2 ayat#1"
// user_query = "quran 2:1"
// user_query = "2:1"
// user_query = "2-1"
// user_query = "1 ayah of 2 surah from quran"
// user_query = "first ayah of second surah from quran"
// user_query = "surah number 2 ayat number 1"
// user_query = "surah num 2 ayah 1"
// user_query = "surah no 2 ayah 1"
// user_query = "surah no. 2 ayah no.1"
// user_query = "quran surahs"
// user_query = "quran"
// user_query = "something"
// user_query = "kuran"
// user_query = "kuran surt 2 ayt 1"

// user_query = "surah 2 ayah from 1 to 5"
// user_query = "surah 2 from 1 to 5"
// user_query = "surah 2 start from 1 end 5"
// user_query = "surah 2 start 1 end 5"
// user_query = "surah 2 start from 1 to end 5"
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

// user_query = "surah al-baqarah ayat 1"
// user_query = "surah baqra ayat 1"
// user_query = "surah-al-baqarah ayah 1"
// user_query = "al-baqarah ayah 1"
// user_query = "surat-ul-baqarah ayah 1"
// user_query = "surah al-baqarah ayah from 1 to 5
// user_query = "sahih bukhari hadith 1"
// user_query = "sahih bukhari hadees 1"
// user_query = "sahih bukhari hadees number 1"
// user_query = "sahih bukhari"
// user_query = "sahih bukhari hadith"
// user_query = "hadith number 1
// user_query = "bukhari 123"
// user_query = "bukhari number 123"
// user_query = "bukhari #123"
// user_query = "bukhari number #123"

// "Quran surah 2 ayah 1",
// "surah 2 ayah 1",
// "surah 2 ayat 1",
// "surat 2 ayat 1",
// "quran ayat 1 surah 2",
// "quran surah#2 ayat#1",
// "quran surah #2 ayat #1",
// "quran surah# 2 ayat# 1",
// "surah #2 ayat#1",
// "quran 2:1",
// "2:1",
// "2-1",
// "1 ayah of 2 surah from quran",
// "first ayah of second surah from quran",
// "surah number 2 ayat number 1",
// "surah num 2 ayah 1",
// "surah no 2 ayah 1",
// "surah no. 2 ayah no.1",
// "quran surahs",
// "quran",
// "kuran",
// "kuran surt 2 ayt 1",
// "surah 2 first 5 ayah",
// "surah 2 first 5 ayahs",
// "first 5 ayahs of surah 2",
// "surah 2 last 5 ayahs",
// "last 5 ayahs of surah 2",
// "surah 2 first five ayahs",
// "surah 2 last five ayahs",
// "surah 2 ayah from 1 to 5",
// "surah 2 from 1 to 5",
// "surah 2 start from 1 end 5",
// "surah 2 start 1 end 5",
// "surah 2 start from 1 to end 5",
// "surah al-baqarah ayat 1",
// "surah baqra ayat 1",
// "surah-al-baqarah ayah 1",
// "al-baqarah ayah 1",
// "surat-ul-baqarah ayah 1",
// "surah al-baqarah ayah from 1 to 5"
