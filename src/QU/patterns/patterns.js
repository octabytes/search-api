const Collection = require("./schema/quran_collection");
const QuranFilter = require("./schema/quran_filter");
const Limit = require("./schema/limit");
const QuranSpecialFormat = require("./schema/quran_special_format");
const QuranSurahs = require("./schema/quran_surahs");
const Range = require("./schema/range");
const HadithNumber = require("./schema/hadith_number");
const HadithCollection = require("./schema/hadith_collection");

const patterns = [
  // Quran
  [Collection],

  // Quran surah 2 ayah 1
  [Collection, QuranFilter, QuranFilter],

  // Quran Surahs
  [Collection, QuranSurahs],

  // Surahs
  [QuranSurahs],

  // Surah 2 ayah 1
  [QuranFilter, QuranFilter],

  // Quran Special Case: Quran 2:1
  [Collection, QuranSpecialFormat],

  // Quran Special Case: 2:1
  [QuranSpecialFormat],

  // RANGE
  // quran surah 2 ayah from 1 to 5
  [Collection, QuranFilter, Range],

  // LIMIT
  // surah 2 first 5 ayah
  [Collection, QuranFilter, Limit],
  // first 5 ayahs of surah 2
  [Limit, QuranFilter],

  // Hadith
  [HadithCollection],
  [HadithCollection, HadithNumber],
];

module.exports = patterns;
