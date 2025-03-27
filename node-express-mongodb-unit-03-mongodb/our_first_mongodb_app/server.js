const express = require("express");
const logger = require("morgan");
const path = require("path");
const Mongoose = require("mongoose");
require("dotenv").config();

const app = express();

const PORT = 8000;

//--  Middleware -------------------------------------

app.use(logger("dev"));
// Body parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// configure my views for ejs
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// setting up static folder
app.use(express.static(path.join(__dirname, "public")));

/// --------------------------------------------------

// Add a connect to my Database

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

//--  Routes -----------------------------------------

app.use("/api", require("./api"));

//----------------------------------------------------
app.get("/", (req, res) => {
  //res.send("Hello World");
  res.render("home", {});
});
