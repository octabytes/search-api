const EmptySpace = {
  type: "empty_space",
  require_words: 1,
  exec: () => {
    return {
      fulfil: true,
      consume_words: 1,
      score: 1,
      value: "nonce",
    };
  },
};

module.exports = EmptySpace;
