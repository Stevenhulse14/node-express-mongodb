const express = require("express");
const logger = require("morgan");

const connectDB = require("./config/db");

const app = express();
const PORT = 8080;

app.use(logger("dev"));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello world !");
});

app.use("/api", require("./api"));

app.listen(PORT, () => {
  console.log(`You are running on Port ${PORT} : jwt demo`);
  connectDB();
});
