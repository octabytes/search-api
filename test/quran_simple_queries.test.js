const chai = require("chai");
const NLP = require("../src/QU/nlp");

const should = chai.should();

describe("Simple Queries", () => {
  it("should pass `Quran surah 2 ayah 1`", () => {
    const result = NLP("Quran surah 2 ayah 1");

    result.collection.should.equal("quran");
    result.filters.length.should.be.equal(2);
    result.filters[0].field.should.equal("surah");
    result.filters[0].value.should.equal(2);
    result.filters[1].field.should.equal("ayah");
    result.filters[1].value.should.equal(1);
  });

  it("should pass `surah 2 ayah 1`", () => {
    const result = NLP("surah 2 ayah 1");

    result.collection.should.equal("quran");
    result.filters.length.should.be.equal(2);
    result.filters[0].field.should.equal("surah");
    result.filters[0].value.should.equal(2);
    result.filters[1].field.should.equal("ayah");
    result.filters[1].value.should.equal(1);
  });
});
