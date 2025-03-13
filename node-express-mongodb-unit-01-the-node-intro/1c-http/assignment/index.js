// localhost:3000/jokes
const jokes = require("./data/jokes");
const { randomize } = require("./helper/index");
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
  // const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
  const randomJoke = randomize(jokes);

  res.send(randomJoke);
});

app.get("/albums", (req, res) => {
  // const randomAlbum = albums[Math.floor(Math.random() * albums.length)];
  const randomAlbum = randomize(albums);
  res.json(randomAlbum);
});

app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, "error.html"));
});

app.listen(port, () => {
  console.log(` server is Running on port : ${port}`);
});

/**
 * PRE LUNCH ASSIGNMENT
 *
 * Tasks
 *
 *  - Generate a list of data ( this data could be anything KEEP IT PG !)
 *  - Create an Express server that will add a new item to that arr (Post Route)
 *  - Want to be able to see all of the data. ( Get Route )
 *
 *  - npm i nodemon express body-parser
 *
 *
 *
 * PUSH UP TO GITHUB AND DM ME THE LINK !!!!
 *
 */
