const router = require("express").Router();

router.get("/help", (req, res) => {
  res.status(200).send("We are up and running :)");
});

router.use("/ink", require("./routes/ink-route"));
router.use("/printer", require("./routes/printer-route"));

module.exports = router;
