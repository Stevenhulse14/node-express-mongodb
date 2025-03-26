const Router = require("express").Router();
const randomize = require("../../util/helper");

const fetchPokemon = require("../../controller/pokemonContoller");
// localhost:8000/api/pokemon
Router.get("/", async (req, res) => {
  //edge case what if the pokemon doesn't have any moves.

  try {
    const { data } = await fetchPokemon();
    // function randomizeMoves(arr) {
    //   const newObj = {};

    //   for (let i = 0; i < 4; i++) {
    //     const item = Math.floor(Math.random() * data.moves.length + 1);
    //     const name = arr[item].move.name;
    //     newObj[name] = arr[item];
    //   }
    //   return newObj;
    // }

    // ---------------------------------->>
    /**
     

      We can create two different structures that can provide different functionalities

      randomizeMoves(data.moves) => will structure it in an Obj that has key value pairs
      of information about that move.
      {
  'body-slam': {
    move: { name: 'body-slam', url: 'https://pokeapi.co/api/v2/move/34/' },
    version_group_details: []
  },
  'mega-kick': {
    move: { name: 'mega-kick', url: 'https://pokeapi.co/api/v2/move/25/' },
    version_group_details: []
  },
  rest: {
    move: { name: 'rest', url: 'https://pokeapi.co/api/v2/move/156/' },
    version_group_details: []
  },
  'terrain-pulse': {
    move: {
      name: 'terrain-pulse',
      url: 'https://pokeapi.co/api/v2/move/805/'
    },
    version_group_details: [ [Object] ]
  }
}
      if we wrap a Object.keys() around that returned value of the object we get back an 
      array of our pokemons moves  [ 'reversal', 'slash', 'attract', 'brick-break' ]
     */
    // console.log(
    //   "ALL DATE:",
    //   data,
    //   "DATA FORMAT 1",
    //   randomizeMoves(data.moves),
    //   "DATA FORMAT 2",
    //   Object.keys(randomizeMoves(data.moves))
    // );
    //  -----------------------------------
    res.render("pokemon", {
      name: data.name,
      moves: Object.keys(randomize(data)),
      sprite: data.sprites.front_shiny,
    });
  } catch (error) {
    console.error(error);
  }
});

module.exports = Router;
