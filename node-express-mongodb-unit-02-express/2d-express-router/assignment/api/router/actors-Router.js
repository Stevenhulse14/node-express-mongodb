const router = require("express").Router();
const data = require("../../data/actor-data");

const { v4: uuid } = require("uuid");

router.get("/", (req, res) => {
  res.json(data);
});

router.post("/", (req, res) => {
  // post requests have a body
  const mergeIdandData = { ...req.body, id: uuid() };

  if (data.find((item) => item.id === mergeIdandData.id)) {
    return res.status(500).json({
      error: " Bad request item exists already",
    });
  } else {
    data.push(mergeIdandData);
    return res.status(201).json({
      message: " successfully added to Database !",
      data,
    });
  }
});

module.exports = router;
