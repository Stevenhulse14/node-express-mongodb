// need to create the mongodb model

// first lets connect to MongoDB

const Mongoose = require("mongoose");

const users = Mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = Mongoose.model("Users", users);
