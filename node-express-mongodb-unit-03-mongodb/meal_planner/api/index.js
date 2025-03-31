const Router = require("express").Router();

// this is a testing api endpoint
Router.get("/", (req, res) => {
  res.send(" YOU ARE AT THE API ROUTES !");
});

Router.use("/meals", require("./routes/meals"));

module.exports = Router;
