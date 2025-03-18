const express = require("express");

const app = express();

const PORT = 8080;

app.get("/", (req, res) => {
  console.log(" This is my homepage");
  res.status(200).send("HomePage");
});

app.get("/about", (req, res) => {
  res.status(200).send("<h1>About page</h1>");
});

app.all("*", (req, res) => {
  res
    .status(404)
    .send(" 404 not found whatever you were looking for is hiding ");
});

app.listen(PORT, () => {
  console.log(`Listen on Port: ${PORT}, Everything is up and running aaaaa!`);
});
