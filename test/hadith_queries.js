const chai = require("chai");
const NLP = require("../src/QU/nlp");

const should = chai.should();

describe("Hadith Queries", () => {
  it("should pass `sahih bukhari hadith 1`", () => {
    const result = NLP("sahih bukhari hadith 1");

    result.collection.should.equal("bukhari");
    result.confidence.should.greaterThan(0.8);
    result.filters.length.should.equal(1);
    result.filters[0].field.should.equal("hadith_number");
    result.filters[0].value.should.equal(1);
  });

  it("should pass `sahih bukhari hadees 1`", () => {
    const result = NLP("sahih bukhari hadees 1");

    result.collection.should.equal("bukhari");
    result.confidence.should.greaterThan(0.8);
    result.filters.length.should.equal(1);
    result.filters[0].field.should.equal("hadith_number");
    result.filters[0].value.should.equal(1);
  });

  it("should pass `sahih bukhari hadees number 1`", () => {
    const result = NLP("sahih bukhari hadees number 1");

    result.collection.should.equal("bukhari");
    result.confidence.should.greaterThan(0.8);
    result.filters.length.should.equal(1);
    result.filters[0].field.should.equal("hadith_number");
    result.filters[0].value.should.equal(1);
  });

  it("should pass `sahih bukhari`", () => {
    const result = NLP("sahih bukhari");

    result.collection.should.equal("bukhari");
    result.confidence.should.greaterThan(0.8);
  });

  it("should pass `sahih bukhari hadith`", () => {
    const result = NLP("sahih bukhari hadith");

    result.collection.should.equal("bukhari");
    result.confidence.should.greaterThan(0.8);
  });

  it("should pass `bukhari 123`", () => {
    const result = NLP("bukhari 123");

    result.collection.should.equal("bukhari");
    result.confidence.should.greaterThan(0.8);
    result.filters.length.should.equal(1);
    result.filters[0].field.should.equal("hadith_number");
    result.filters[0].value.should.equal(123);
  });

  it("should pass `bukhari number 123`", () => {
    const result = NLP("bukhari number 123");

    result.collection.should.equal("bukhari");
    result.confidence.should.greaterThan(0.8);
    result.filters.length.should.equal(1);
    result.filters[0].field.should.equal("hadith_number");
    result.filters[0].value.should.equal(123);
  });

  it("should pass `bukhari #123`", () => {
    const result = NLP("bukhari #123");

    result.collection.should.equal("bukhari");
    result.confidence.should.greaterThan(0.8);
    result.filters.length.should.equal(1);
    result.filters[0].field.should.equal("hadith_number");
    result.filters[0].value.should.equal(123);
  });

  it("should pass `bukhari number #123`", () => {
    const result = NLP("bukhari number #123");

    result.collection.should.equal("bukhari");
    result.confidence.should.greaterThan(0.8);
    result.filters.length.should.equal(1);
    result.filters[0].field.should.equal("hadith_number");
    result.filters[0].value.should.equal(123);
  });
});
