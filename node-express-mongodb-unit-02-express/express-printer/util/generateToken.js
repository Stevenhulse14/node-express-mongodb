const jwt = require("jsonwebtoken");
require("dotenv").config();

process.env.SECRETKEY;

const generateToken = (user) => {
  // sign takes in the payload, secret key and options
  return jwt.sign(
    {
      id: user.id,
      username: user.username,
    },
    process.env.SECRETKEY,
    {
      expiresIn: "1h",
    }
  );
};

module.exports = generateToken;
