const Mongoose = require("mongoose");
const pokemon = require("./pokemonSchema");
const team = new Mongoose.Schema({
  name: "String",
  team: [pokemon],
});

module.exports = Mongoose.model("team", team);
