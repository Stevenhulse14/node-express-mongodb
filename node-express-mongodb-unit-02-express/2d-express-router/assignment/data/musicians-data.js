const { v4: uuid } = require("uuid");

let musicians = [
  {
    id: uuid(),
    name: "KAYTRANADA",
    age: 30,
  },
  {
    id: uuid(),
    name: "Kenny Beats",
    age: 31,
  },
  {
    id: uuid(),
    name: "Tyler the Creator",
    age: 31,
  },
  {
    id: uuid(),
    name: "Denzel Curry",
    age: 27,
  },
];

module.exports = musicians;
