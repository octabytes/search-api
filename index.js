const fetch = require("node-fetch");
const NLP = require("./src/QU/nlp");
const transformer = require("./src/QU/transformer/transformer");

// const result = NLP("bukhari number #123");

// console.log(result);

// const response = transformer("quran surah 2 ayah 1");
// console.log(response);

const main = async () => {
  const response = await transformer("quran surah 2 ayah 1");
  console.log(response);
};

main();
