const data = {
  user: {
    name: "Steven",
    id: 2,
    email: "stevenhulse1993@gmail.com",
  },
  team: [
    {
      pokemon: "pikachu",
      type: "electric",
      hp: 35,
      attack: 55,
      defense: 40,
      speed: 90,
      specialAttack: 40,
      specialDefense: 50,
      level: 27,
    },
    {
      pokemon: "charmander",
      type: "fire",
      hp: 39,
      attack: 52,

      defense: 43,
      speed: 65,
      specialAttack: 60,
      specialDefense: 50,
      level: 7,
    },
    {
      pokemon: "squirtle",
      type: "water",
      hp: 44,
      attack: 48,
      defense: 65,
      speed: 43,
      specialAttack: 50,
      specialDefense: 64,
      level: 8,
    },
    {
      pokemon: "bulbasaur",
      type: "grass",
      hp: 45,
      attack: 49,
      defense: 49,
      speed: 45,
      specialAttack: 65,
      specialDefense: 65,
      level: 6,
    },
    {
      pokemon: "mewtwo",
      type: "psychic",
      hp: 106,
      attack: 110,
      defense: 90,
      speed: 130,
      specialAttack: 154,
      specialDefense: 90,
      level: 100,
    },
    {
      pokemon: "snorlax",
      type: "normal",
      hp: 160,
      attack: 110,
      defense: 65,
      speed: 30,
      specialAttack: 65,
      specialDefense: 110,
      level: 50,
    },
  ],
};

console.log(Array.isArray(data), Array.isArray([])); // Steven

// whenever we have an object we can perform tasks on it like getting all of the keys.
// we that it is an object and not an array because it has keys and values.
//console.log(Object.values(data)); // [ 'user', 'team' ]

console.log(Object.keys(data)[1]); // [ 'user', 'team' ]

// we can use the keys to get the values.

console.log(data[Object.keys(data)[1]]);

const pokemon_names = data[Object.keys(data)[1]].map((item) =>
  item.attack >= 100 ? item.pokemon : null
);

console.log(pokemon_names);
