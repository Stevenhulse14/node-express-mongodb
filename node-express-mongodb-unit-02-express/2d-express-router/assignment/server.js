const express = require("express");
const morgan = require("morgan");
const PORT = 8080;

const app = express();

//  middleware
// out going json data
app.use(express.urlencoded({ extended: false }));
// logger middleware
app.use(morgan("dev"));
// incoming json data
app.use(express.json());

// foward them to a location
app.use("/api", require("./api"));

app.get("/", (req, res) => {
  res.send(" You are at your home page ");
});

app.all("*", (req, res) => {
  res.status(404).send("Page does not exist please try again ");
});

app.listen(PORT, () => {
  console.log(
    ` Your server is up and running on PORT: ${PORT} (Musicians, Actors)`
  );
});
