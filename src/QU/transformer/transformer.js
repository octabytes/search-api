const fetch = require("node-fetch");
const NLP = require("../nlp");

const quranAPI = "https://quran-api-dot-islamicnet.appspot.com/v1";
const hadithAPI = "https://hadith-api-dot-islamicnet.appspot.com/v1";

const transformer = async (query) => {
  const result = NLP(query);

  if (result.confidence < 0.8) {
    return;
  }

  let url, responseType;

  if (result.collection == "quran") {
    if (result.filters) {
      if (result.filters.length > 1) {
        // Create Ayha ID from surah number and ayah number
        const ayahId = result.filters[0].value + "-" + result.filters[1].value;
        url = `${quranAPI}/ayah/${ayahId}`;
        responseType = "single_ayah";
      } else {
        // Get the surah by number
        url = `${quranAPI}/surah/${result.filters[0].value}`;
        responseType = "multi_ayah";
      }
    }

    // If there is any limit
    if (result.limit) {
      url += `?maxResult=${result.limit.value}&direction=${
        (result, limit.direction)
      }`;
      responseType = "multi_ayah";
    }

    // If there is any Range
    if (result.range) {
      let rangeFrom = result.range.from;
      let rangeTo = result.range.to;

      // For example surah 2 ayah from 3 to 7 it should start from
      // 3 and get 4 ayahs
      if (rangeFrom > 1) {
        rangeTo = rangeTo + 1 - rangeFrom;
      }

      url += `?offset=${rangeFrom}?maxResult=${rangeTo}`;
    }

    // Get Quran surahs only when there is no filter, range and limit
    if (!result.filters && !result.limit && !result.range) {
      url = `${quranAPI}/surah/list`;
      responseType = "surah_list";
    }
  } else {
    if (result.filters) {
      url = `${hadithAPI}/${result.collection}/${result.filters[0].value}`;
      responseType = "single_hadith";
    }

    // Get Hadiths books when there is no filter
    if (!result.filters) {
      url = `${hadithAPI}/books/${result.collection}`;
    }
  }

  try {
    const response = await fetch(url);
    const jsonData = await response.json();
    return {
      nlp: result,
      type: responseType,
      url: url,
      data: jsonData,
    };
  } catch (err) {
    return {
      nlp: result,
      type: "error",
      url: url,
      error: err.message,
    };
  }
};

module.exports = transformer;
