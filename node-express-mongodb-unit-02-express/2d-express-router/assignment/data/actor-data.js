const { v4: uuid } = require("uuid");

const actors = [
  {
    id: uuid(),
    name: "Jonah Hill",
    age: 38,
  },
  {
    id: uuid(),
    name: "Leonardo DiCaprio",
    age: 48,
  },
  {
    id: uuid(),
    name: "Finn Wolfhard",
    age: 19,
  },
  {
    id: uuid(),
    name: "Samuel L Jackson",
    age: 73,
  },
];

// console.log(actors);

module.exports = actors;
