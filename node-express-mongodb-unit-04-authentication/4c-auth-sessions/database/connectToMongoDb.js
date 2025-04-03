const mongoose = require("mongoose");
const dotenv = require("dotenv");

async function connectToMongoDb() {
  mongoose.set("strictQuery", false);
  try {
    await mongoose.connect(process.env.MONGODB_URI)
    console.log("MongoDB Connected");
  } catch(error) {
    console.log(`DB connection failed: ${error}`);
  }
}

module.exports = connectToMongoDb;
