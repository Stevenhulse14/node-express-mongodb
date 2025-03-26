const Router = require("express").Router();
const path = require("path");

//localhost:8000/api/teams/teams
Router.get("/", (req, res) => {
  //res.send("Hello from Teams");
  res.render("teams", {});
});

Router.post("/", (req, res) => {});

module.exports = Router;
