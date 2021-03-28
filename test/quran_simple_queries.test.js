const chai = require("chai");
const NLP = require("../src/QU/nlp");

const should = chai.should();

describe("Simple Queries", () => {
  it("should pass `Quran surah 2 ayah 1`", () => {
    const result = NLP("Quran surah 2 ayah 1");

    result.confidence.should.be.greaterThan(0.8);
    result.collection.should.equal("quran");
    result.filters.length.should.be.equal(2);
    result.filters[0].field.should.equal("surah");
    result.filters[0].value.should.equal(2);
    result.filters[1].field.should.equal("ayah");
    result.filters[1].value.should.equal(1);
  });

  it("should pass `surah 2 ayah 1`", () => {
    const result = NLP("surah 2 ayah 1");

    result.confidence.should.be.greaterThan(0.8);
    result.collection.should.equal("quran");
    result.filters.length.should.be.equal(2);
    result.filters[0].field.should.equal("surah");
    result.filters[0].value.should.equal(2);
    result.filters[1].field.should.equal("ayah");
    result.filters[1].value.should.equal(1);
  });

  it("should pass `surah 2 ayat 1`", () => {
    const result = NLP("surah 2 ayat 1");

    result.confidence.should.be.greaterThan(0.8);
    result.collection.should.equal("quran");
    result.filters.length.should.be.equal(2);
    result.filters[0].field.should.equal("surah");
    result.filters[0].value.should.equal(2);
    result.filters[1].field.should.equal("ayah");
    result.filters[1].value.should.equal(1);
  });

  it("should pass `surat 2 ayat 1`", () => {
    const result = NLP("surat 2 ayat 1");

    result.confidence.should.be.greaterThan(0.8);
    result.collection.should.equal("quran");
    result.filters.length.should.be.equal(2);
    result.filters[0].field.should.equal("surah");
    result.filters[0].value.should.equal(2);
    result.filters[1].field.should.equal("ayah");
    result.filters[1].value.should.equal(1);
  });

  it("should pass `quran ayat 1 surah 2`", () => {
    const result = NLP("quran ayat 1 surah 2");

    result.confidence.should.be.greaterThan(0.8);
    result.collection.should.equal("quran");
    result.filters.length.should.be.equal(2);
    result.filters[0].field.should.equal("surah");
    result.filters[0].value.should.equal(2);
    result.filters[1].field.should.equal("ayah");
    result.filters[1].value.should.equal(1);
  });

  it("should pass `quran surah#2 ayat#1`", () => {
    const result = NLP("quran surah#2 ayat#1");

    result.confidence.should.be.greaterThan(0.8);
    result.collection.should.equal("quran");
    result.filters.length.should.be.equal(2);
    result.filters[0].field.should.equal("surah");
    result.filters[0].value.should.equal(2);
    result.filters[1].field.should.equal("ayah");
    result.filters[1].value.should.equal(1);
  });

  it("should pass `quran surah #2 ayat #1`", () => {
    const result = NLP("quran surah #2 ayat #1");

    result.confidence.should.be.greaterThan(0.8);
    result.collection.should.equal("quran");
    result.filters.length.should.be.equal(2);
    result.filters[0].field.should.equal("surah");
    result.filters[0].value.should.equal(2);
    result.filters[1].field.should.equal("ayah");
    result.filters[1].value.should.equal(1);
  });

  it("should pass `quran surah# 2 ayat# 1`", () => {
    const result = NLP("quran surah# 2 ayat# 1");

    result.confidence.should.be.greaterThan(0.8);
    result.collection.should.equal("quran");
    result.filters.length.should.be.equal(2);
    result.filters[0].field.should.equal("surah");
    result.filters[0].value.should.equal(2);
    result.filters[1].field.should.equal("ayah");
    result.filters[1].value.should.equal(1);
  });

  it("should pass `surah #2 ayat#1`", () => {
    const result = NLP("surah #2 ayat#1");

    result.confidence.should.be.greaterThan(0.8);
    result.collection.should.equal("quran");
    result.filters.length.should.be.equal(2);
    result.filters[0].field.should.equal("surah");
    result.filters[0].value.should.equal(2);
    result.filters[1].field.should.equal("ayah");
    result.filters[1].value.should.equal(1);
  });

  it("should pass `quran 2:1`", () => {
    const result = NLP("quran 2:1");

    result.confidence.should.be.greaterThan(0.8);
    result.collection.should.equal("quran");
    result.filters.length.should.be.equal(2);
    result.filters[0].field.should.equal("surah");
    result.filters[0].value.should.equal(2);
    result.filters[1].field.should.equal("ayah");
    result.filters[1].value.should.equal(1);
  });

  it("should pass `2:1`", () => {
    const result = NLP("2:1");

    result.confidence.should.be.greaterThan(0.8);
    result.collection.should.equal("quran");
    result.filters.length.should.be.equal(2);
    result.filters[0].field.should.equal("surah");
    result.filters[0].value.should.equal(2);
    result.filters[1].field.should.equal("ayah");
    result.filters[1].value.should.equal(1);
  });

  it("should pass `2-1`", () => {
    const result = NLP("2-1");

    result.confidence.should.be.greaterThan(0.8);
    result.collection.should.equal("quran");
    result.filters.length.should.be.equal(2);
    result.filters[0].field.should.equal("surah");
    result.filters[0].value.should.equal(2);
    result.filters[1].field.should.equal("ayah");
    result.filters[1].value.should.equal(1);
  });

  it("should pass `1 ayah of 2 surah from quran`", () => {
    const result = NLP("1 ayah of 2 surah from quran");

    result.confidence.should.be.greaterThan(0.8);
    result.collection.should.equal("quran");
    result.filters.length.should.be.equal(2);
    result.filters[0].field.should.equal("surah");
    result.filters[0].value.should.equal(2);
    result.filters[1].field.should.equal("ayah");
    result.filters[1].value.should.equal(1);
  });

  it("should pass `first ayah of second surah from quran`", () => {
    const result = NLP("first ayah of second surah from quran");

    result.confidence.should.be.greaterThan(0.8);
    result.collection.should.equal("quran");
    result.filters.length.should.be.equal(2);
    result.filters[0].field.should.equal("surah");
    result.filters[0].value.should.equal(2);
    result.filters[1].field.should.equal("ayah");
    result.filters[1].value.should.equal(1);
  });

  it("should pass `surah number 2 ayat number 1`", () => {
    const result = NLP("surah number 2 ayat number 1");

    result.confidence.should.be.greaterThan(0.8);
    result.collection.should.equal("quran");
    result.filters.length.should.be.equal(2);
    result.filters[0].field.should.equal("surah");
    result.filters[0].value.should.equal(2);
    result.filters[1].field.should.equal("ayah");
    result.filters[1].value.should.equal(1);
  });

  it("should pass `surah num 2 ayah 1`", () => {
    const result = NLP("surah num 2 ayah 1");

    result.confidence.should.be.greaterThan(0.8);
    result.collection.should.equal("quran");
    result.filters.length.should.be.equal(2);
    result.filters[0].field.should.equal("surah");
    result.filters[0].value.should.equal(2);
    result.filters[1].field.should.equal("ayah");
    result.filters[1].value.should.equal(1);
  });

  it("should pass `surah no 2 ayah 1`", () => {
    const result = NLP("surah no 2 ayah 1");

    result.confidence.should.be.greaterThan(0.8);
    result.collection.should.equal("quran");
    result.filters.length.should.be.equal(2);
    result.filters[0].field.should.equal("surah");
    result.filters[0].value.should.equal(2);
    result.filters[1].field.should.equal("ayah");
    result.filters[1].value.should.equal(1);
  });

  it("should pass `surah no. 2 ayah no.1`", () => {
    const result = NLP("surah no. 2 ayah no.1");

    result.confidence.should.be.greaterThan(0.8);
    result.collection.should.equal("quran");
    result.filters.length.should.be.equal(2);
    result.filters[0].field.should.equal("surah");
    result.filters[0].value.should.equal(2);
    result.filters[1].field.should.equal("ayah");
    result.filters[1].value.should.equal(1);
  });

  it("should pass `quran surahs`", () => {
    const result = NLP("quran surahs");

    result.confidence.should.be.greaterThan(0.8);
    result.collection.should.equal("quran");
  });

  it("should pass `quran`", () => {
    const result = NLP("quran");

    result.confidence.should.be.greaterThan(0.8);
    result.collection.should.equal("quran");
  });

  it("should pass `something`", () => {
    const result = NLP("something");

    result.confidence.should.be.lessThan(0.5);
    result.score.should.equal(0);
  });

  it("should pass `kuran`", () => {
    const result = NLP("kuran");

    result.confidence.should.be.greaterThan(0.8);
    result.collection.should.equal("quran");
  });

  it("should pass `kuran surt 2 ayt 1`", () => {
    const result = NLP("kuran surt 2 ayt 1");

    result.confidence.should.be.greaterThan(0.8);
    result.collection.should.equal("quran");
    result.filters.length.should.be.equal(2);
    result.filters[0].field.should.equal("surah");
    result.filters[0].value.should.equal(2);
    result.filters[1].field.should.equal("ayah");
    result.filters[1].value.should.equal(1);
  });
});
