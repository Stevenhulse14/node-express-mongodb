const Router = require("express").Router();

// test our api route
// localhost:8000/api
Router.get("/", (req, res) => {
  res.send("Hello from API");
});

// the first part is the URL
// the second part is the direction to the file we want
// serve up

Router.use("/teams", require("./routes/teams"));
Router.use("/pokemon", require("./routes/pokemon"));

module.exports = Router;
