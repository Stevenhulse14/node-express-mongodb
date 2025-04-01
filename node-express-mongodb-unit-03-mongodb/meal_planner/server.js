const express = require("express");
const Logger = require("morgan");
const Mongoose = require("mongoose");
const cors = require("cors");

require("dotenv").config();
const PORT = process.env.PORT || 3000;
const app = express();

//middleware

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(Logger("dev"));
app.use(cors());

// routes

app.use("/api", require("./api"));

Mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error(err);
  });

/*
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


*/
