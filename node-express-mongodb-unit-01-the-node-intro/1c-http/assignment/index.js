// localhost:3000/jokes
const jokes = require("./data/jokes");

const albums = require("./data/albums");
const express = require("express");
const path = require("path");
const app = express();
const port = 3002;

// get our data.
// console.log("Jokes :", jokes);
// console.log("Albums :", albums);
app.get("/", (req, res) => {
  res.send(" welome to your new home API");
});

app.get("/jokes", (req, res) => {
  const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
  res.send(randomJoke);
});

app.get("/albums", (req, res) => {
  const randomAlbum = albums[Math.floor(Math.random() * albums.length)];
  res.json(randomAlbum);
});

app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, "error.html"));
});

app.listen(port, () => {
  console.log(` server is Running on port : ${port}`);
});
