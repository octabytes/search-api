const chai = require("chai");
const NLP = require("../src/QU/nlp");

const should = chai.should();

describe("Quran Range Queries", () => {
  it("should pass `surah 2 ayah from 1 to 5`", () => {
    const result = NLP("surah 2 ayah from 1 to 5");

    result.confidence.should.be.greaterThan(0.8);
    result.collection.should.equal("quran");
    result.filters.length.should.be.equal(1);
    result.filters[0].field.should.equal("surah");
    result.filters[0].value.should.equal(2);
    result.range.field.should.equal("ayah");
    result.range.from.should.equal(1);
    result.range.to.should.equal(5);
  });

  it("should pass `surah 2 from 1 to 5`", () => {
    const result = NLP("surah 2 from 1 to 5");

    result.confidence.should.be.greaterThan(0.8);
    result.collection.should.equal("quran");
    result.filters.length.should.be.equal(1);
    result.filters[0].field.should.equal("surah");
    result.filters[0].value.should.equal(2);
    result.range.field.should.equal("ayah");
    result.range.from.should.equal(1);
    result.range.to.should.equal(5);
  });

  it("should pass `surah 2 start from 1 end 5`", () => {
    const result = NLP("surah 2 start from 1 end 5");

    result.confidence.should.be.greaterThan(0.8);
    result.collection.should.equal("quran");
    result.filters.length.should.be.equal(1);
    result.filters[0].field.should.equal("surah");
    result.filters[0].value.should.equal(2);
    result.range.field.should.equal("ayah");
    result.range.from.should.equal(1);
    result.range.to.should.equal(5);
  });

  it("should pass `surah 2 start 1 end 5`", () => {
    const result = NLP("surah 2 start 1 end 5");

    result.confidence.should.be.greaterThan(0.8);
    result.collection.should.equal("quran");
    result.filters.length.should.be.equal(1);
    result.filters[0].field.should.equal("surah");
    result.filters[0].value.should.equal(2);
    result.range.field.should.equal("ayah");
    result.range.from.should.equal(1);
    result.range.to.should.equal(5);
  });

  it("should pass `surah 2 start from 1 to end 5`", () => {
    const result = NLP("surah 2 start from 1 to end 5");

    result.confidence.should.be.greaterThan(0.8);
    result.collection.should.equal("quran");
    result.filters.length.should.be.equal(1);
    result.filters[0].field.should.equal("surah");
    result.filters[0].value.should.equal(2);
    result.range.field.should.equal("ayah");
    result.range.from.should.equal(1);
    result.range.to.should.equal(5);
  });

  it("should pass `surah 2 1 to 5`", () => {
    const result = NLP("surah 2 1 to 5");

    result.confidence.should.be.greaterThan(0.8);
    result.collection.should.equal("quran");
    result.filters.length.should.be.equal(1);
    result.filters[0].field.should.equal("surah");
    result.filters[0].value.should.equal(2);
    result.range.field.should.equal("ayah");
    result.range.from.should.equal(1);
    result.range.to.should.equal(5);
  });

  it("should pass `surah al-baqarah ayah from 1 to 5`", () => {
    const result = NLP("surah al-baqarah ayah from 1 to 5");

    result.confidence.should.be.greaterThan(0.8);
    result.collection.should.equal("quran");
    result.filters.length.should.be.equal(1);
    result.filters[0].field.should.equal("surah");
    result.filters[0].value.should.equal(2);
    result.range.field.should.equal("ayah");
    result.range.from.should.equal(1);
    result.range.to.should.equal(5);
  });
});
