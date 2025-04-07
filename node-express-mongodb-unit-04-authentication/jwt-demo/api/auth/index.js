const Router = require("express").Router();
const users = require("../../models/users");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();
// localhost:8080/api/auth

Router.get("/", (req, res) => {
  res.send(" your in your Auth route");
});

//sign up

Router.post("/signup", async (req, res) => {
  // send some object { username :  steven , password: password}
  // const data = {
  //   username: "shotta3xd@gmail.com",
  //   password: "password1234",
  // };
  const data = req.body;

  // get the user

  const user = await users.findOne({ username: data.username });

  // check if user exists //----> if user does not exist
  if (!user) {
    res.status(400).json({
      message: "User already exists",
    });
  }

  // encrypt the password
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(data.password, salt);
  // create the user
  const newUser = {
    username: data.username,
    password: hash,
  };
  await users.create(newUser);

  // respond to the user
  res.status(201).json({
    message: "User created successfully",
    newUser,
  });

  try {
  } catch (error) {
    console.log(error);
  }
});

//login in

Router.post("/login", async (req, res) => {
  try {
    const data = req.body; // username and password is coming from the client

    const user = await users.findOne({ username: data.username });

    if (!user) {
      res.status(400).json({
        message: "User does not exist",
      });
    }
    // check if password is correct
    const isMatch = await bcrypt.compare(data.password, user.password);

    if (!isMatch) {
      res.status(400).json({
        message: "Invalid password",
      });
    } else {
      //create a token

      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
        expiresIn: "1d",
      });

      res.status(200).json({
        message: "Login successful",
        token: token,
        user: {
          id: user._id,
          username: user.username,
        },
      });
    }
  } catch (error) {
    console.log(error);
  }
});

module.exports = Router;
