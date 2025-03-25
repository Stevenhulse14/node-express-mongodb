const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Shipwrecks = new mongoose.Schema(
  {
    feature_type: String,
    chart: String,
    latdec: Number,
    londec: Number,
    geometry: {
      type: {
        type: String,
        enum: ["Point"],
        default: "Point",
      },
      coordinates: {
        type: [Number],
        default: undefined,
      },
    },
    name: String,
    history: String,
    quasou: String,
    watlev: String,
    depth: Number,
  },
  {
    strict: false,
  }
);

module.exports = mongoose.model("Shipwrecks", Shipwrecks);
