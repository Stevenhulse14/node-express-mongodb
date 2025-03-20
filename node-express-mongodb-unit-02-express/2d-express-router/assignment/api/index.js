const router = require("express").Router();

router.use("/actors", require("./router/actors-Router"));

router.use("/musicians", require("./router/musicians-Router"));

module.exports = router;
