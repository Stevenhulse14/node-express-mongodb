const express = require("express");
const logger = require("morgan");
const Mongoose = require("mongoose");
require("dotenv").config();
const app = express();

const PORT = 8080;

// allows us to read incoming json data.
app.use(express.json());
app.use(logger("dev"));

app.use("/api", require("./api"));

Mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("Connected to MongoDB");
    // Only start the server after successful database connection
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
    // Add this after Mongoose.connect() to test the connection
    Mongoose.connection.on("connected", () => {
      console.log("Mongoose connection state:", Mongoose.connection.readyState);
    });
  })
  .catch((err) => {
    console.log("Error connecting to MongoDB", err);
    process.exit(1); // Exit the process if database connection fails
  });
