const Router = require("express").Router();
const { oppTeam, myTeam } = require("../../data/pokemon-data");
const path = require("path");

//localhost:8000/api/teams
Router.get("/", (req, res) => {
  //res.send("Hello from Teams");
  res.render("teams", {});
});

//localhost:8000/api/teams/opp
Router.post("/opp", (req, res) => {
  const poke = req.body;

  if (!poke) {
    res.status(500).send({
      message: " No pokemon sent ",
    });
  }
  oppTeam.push(poke);
  res.status(200).send({
    message: " Added pokemon to your team",
    team: oppTeam,
  });
});
//localhost:8000/api/teams/my
Router.post("/my", (req, res) => {
  const poke = req.body;

  if (!poke) {
    res.status(500).send({
      message: " No pokemon sent ",
    });
  }
  myTeam.push(poke);
  console.log(myTeam);
  res.status(200).send({
    message: " Added pokemon to your team",
    team: myTeam,
  });
});

// update a pokemon on your team

// delete pokemon on your team
module.exports = Router;
