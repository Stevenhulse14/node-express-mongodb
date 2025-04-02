const Router = require("express").Router();
const { signUp, login } = require("../controller");

// to : localhost:8080/api/auth/signup

Router.post("/signup", signUp);

// to : localhost:8080/api/auth/login

Router.post("/login", login);

module.exports = Router;
