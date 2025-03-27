const Mongoose = require("mongoose");

const pokemon = new Mongoose.Schema(
  {
    name: "String",
    sprite: "String",
    moves: ["String"],
  },
  {
    strict: false,
  }
);

module.exports = Mongoose.model("pokemon", pokemon);
