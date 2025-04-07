const Router = require("express").Router();

Router.get("/", (req, res) => {
  res.send(" You are at your localhost:8080/api route");
});

Router.use("/auth", require("./auth"));

module.exports = Router;
