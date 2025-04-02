const Router = require("express").Router();

// to : localhost:8080/api

Router.get("/", (req, res) => {
  try {
    res.status(200).send({
      message: " Your API route is working ",
    });
  } catch (error) {
    console.error({
      message: error,
    });
  }
});

Router.use("/auth", require("./auth"));

module.exports = Router;
