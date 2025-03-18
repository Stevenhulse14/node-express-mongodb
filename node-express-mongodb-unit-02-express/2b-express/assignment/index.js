const express = require("express");

const subways = require("./data/fixture");

const app = express();

const PORT = 8080;

app.get("/", (req, res) => {
  res.status(200).send(subways);
});

app.get("/red", (req, res) => {
  res.status(200).send(subways.redLine);
});

app.get("/green", (req, res) => {
  res.status(200).send(subways.greenLine);
});

app.get("/:train([1-6])", (req, res) => {
  // to show you dynamic routing
  const train = req.params.train;
  console.log(train);
  const allStations = [...subways.redLine, ...subways.greenLine];

  const value = allStations.filter((station) => station.train.includes(train));

  res.json(value);
});

app.get("/local", (req, res) => {
  const local = ["2", "6"];
  const allStations = [...subways.redLine, ...subways.greenLine];
  const localStations = allStations.filter((station) =>
    station.train.some((train) => local.includes(train))
  );
  console.log(localStations);
});
app.get("/express", (req, res) => {
  const expres = ["1", "3", "4", "5"];
  const allStations = [...subways.redLine, ...subways.greenLine];
  const expresStations = allStations.filter((station) =>
    station.train.some((train) => expres.includes(train))
  );
  res.send(expresStations);
});

app.all("*", (req, res) => {
  res
    .status(404)
    .send(
      "The MTA is currently working to complete this application soon. Thank you for your patience"
    );
});

app.listen(PORT, () => {
  console.log(`Your listen on PORT: ${PORT} MTA`);
});
