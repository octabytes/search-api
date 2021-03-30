const express = require("express");
const transformer = require("./QU/transformer");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.status(200).json({
    message: "welcome",
  });
});

router.get("/search/:query", async (req, res, next) => {
  try {
    const response = await transformer(req.params.query);
    res.status(200).json(response);
  } catch (err) {
    console.error(err);
    err.status = 400;
    next(err);
  }
});

module.exports = router;
