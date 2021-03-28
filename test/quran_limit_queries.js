const chai = require("chai");
const NLP = require("../src/QU/nlp");

const should = chai.should();

describe("Quran Limit Queries", () => {
  it("should pass `surah 2 first 5 ayah`", () => {
    const result = NLP("surah 2 first 5 ayah");

    result.confidence.should.be.greaterThan(0.8);
    result.collection.should.equal("quran");
    result.filters.length.should.be.equal(1);
    result.filters[0].field.should.equal("surah");
    result.filters[0].value.should.equal(2);
    result.range.field.should.equal("ayah");
    result.range.from.should.equal(1);
    result.range.to.should.equal(5);
  });

  it("should pass `surah 2 first 5 ayahs`", () => {
    const result = NLP("surah 2 first 5 ayahs");

    result.confidence.should.be.greaterThan(0.8);
    result.collection.should.equal("quran");
    result.filters.length.should.be.equal(1);
    result.filters[0].field.should.equal("surah");
    result.filters[0].value.should.equal(2);
    result.range.field.should.equal("ayah");
    result.range.from.should.equal(1);
    result.range.to.should.equal(5);
  });

  it("should pass `first 5 ayahs of surah 2`", () => {
    const result = NLP("first 5 ayahs of surah 2");

    result.confidence.should.be.greaterThan(0.8);
    result.collection.should.equal("quran");
    result.filters.length.should.be.equal(1);
    result.filters[0].field.should.equal("surah");
    result.filters[0].value.should.equal(2);
    result.range.field.should.equal("ayah");
    result.range.from.should.equal(1);
    result.range.to.should.equal(5);
  });

  it("should pass `surah 2 last 5 ayahs`", () => {
    const result = NLP("surah 2 last 5 ayahs");

    result.confidence.should.be.greaterThan(0.8);
    result.collection.should.equal("quran");
    result.filters.length.should.be.equal(1);
    result.filters[0].field.should.equal("surah");
    result.filters[0].value.should.equal(2);
    result.range.field.should.equal("ayah");
    result.range.from.should.equal(1);
    result.range.to.should.equal(5);
  });

  it("should pass `last 5 ayahs of surah 2`", () => {
    const result = NLP("last 5 ayahs of surah 2");

    result.confidence.should.be.greaterThan(0.8);
    result.collection.should.equal("quran");
    result.filters.length.should.be.equal(1);
    result.filters[0].field.should.equal("surah");
    result.filters[0].value.should.equal(2);
    result.range.field.should.equal("ayah");
    result.range.from.should.equal(1);
    result.range.to.should.equal(5);
  });

  it("should pass `surah 2 first five ayahs`", () => {
    const result = NLP("surah 2 first five ayahs");

    result.confidence.should.be.greaterThan(0.8);
    result.collection.should.equal("quran");
    result.filters.length.should.be.equal(1);
    result.filters[0].field.should.equal("surah");
    result.filters[0].value.should.equal(2);
    result.range.field.should.equal("ayah");
    result.range.from.should.equal(1);
    result.range.to.should.equal(5);
  });

  it("should pass `surah 2 last five ayahs`", () => {
    const result = NLP("surah 2 last five ayahs");

    result.confidence.should.be.greaterThan(0.8);
    result.collection.should.equal("quran");
    result.filters.length.should.be.equal(1);
    result.filters[0].field.should.equal("surah");
    result.filters[0].value.should.equal(2);
    result.range.field.should.equal("ayah");
    result.range.from.should.equal(1);
    result.range.to.should.equal(5);
  });

  it("should pass `surah baqara last 5 ayahs`", () => {
    const result = NLP("surah baqara last 5 ayahs");

    result.confidence.should.be.greaterThan(0.8);
    result.collection.should.equal("quran");
    result.filters.length.should.be.equal(1);
    result.filters[0].field.should.equal("surah");
    result.filters[0].value.should.equal(2);
    result.range.field.should.equal("ayah");
    result.range.from.should.equal(1);
    result.range.to.should.equal(5);
  });

  it("should pass `surah baqara first 5 ayahs`", () => {
    const result = NLP("surah baqara first 5 ayahs");

    result.confidence.should.be.greaterThan(0.8);
    result.collection.should.equal("quran");
    result.filters.length.should.be.equal(1);
    result.filters[0].field.should.equal("surah");
    result.filters[0].value.should.equal(2);
    result.range.field.should.equal("ayah");
    result.range.from.should.equal(1);
    result.range.to.should.equal(5);
  });

  it("should pass `quran surah 2 last ayah`", () => {
    const result = NLP("quran surah 2 last ayah");

    result.confidence.should.be.greaterThan(0.8);
    result.collection.should.equal("quran");
    result.filters.length.should.be.equal(1);
    result.filters[0].field.should.equal("surah");
    result.filters[0].value.should.equal(2);
    result.range.field.should.equal("ayah");
    result.range.from.should.equal(1);
    result.range.to.should.equal(5);
  });

  it("should pass `quran surah 2 first ayah`", () => {
    const result = NLP("quran surah 2 first ayah");

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
