const express = require("express");
const logger = require("morgan");
const Shipwrecks = require("./model/shipwrecks");
// for our Database Connection
const Mongoose = require("mongoose");
// for our environment variables
require("dotenv").config();

const app = express();
const PORT = 3030;

// Middleware
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Database Connection
Mongoose.connect(process.env.MONGODB_URI2)
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

app.get("/shipwrecks", async (req, res) => {
  try {
    console.log("Attempting to fetch shipwrecks");
    const data = await Shipwrecks.find({}).limit(10);

    if (!data || data.length === 0) {
      return res.status(404).json({
        success: false,
        message: "No shipwrecks found",
      });
    }

    res.set("Cache-Control", "no-store");
    res.status(200).json({
      success: true,
      message: "Successfully retrieved shipwrecks data",
      data,
    });
  } catch (error) {
    console.error("Error fetching shipwrecks:", error);
    res.status(500).json({
      success: false,
      message: "Error fetching shipwrecks data",
      error: error.message,
    });
  }
});

app.post("/shipwrecks", async (req, res) => {
  try {
    const { name, latdec, londec, depth } = req.body;

    // Validate required fields
    if (!name || !latdec || !londec) {
      return res.status(400).json({
        success: false,
        message: "Name, latitude, and longitude are required fields",
      });
    }

    const newShipwreck = new Shipwrecks({ name, latdec, londec, depth });
    await newShipwreck.save();

    res.status(201).json({
      success: true,
      message: "Shipwreck created successfully",
      data: newShipwreck,
    });
  } catch (error) {
    console.error("Error creating shipwreck:", error);
    res.status(500).json({
      success: false,
      message: "Error creating shipwreck",
      error: error.message,
    });
  }
});
