const axios = require("axios");
const randomize = require("../util/helper");

// const randomize = () => {
//   return Math.floor(Math.random() * 900 + 1);
// };

const fetchPokemon = async () => {
  try {
    const endpoint = `https://pokeapi.co/api/v2/pokemon/${randomize()}`;
    // only use axios in the backend.
    const response = await axios(endpoint);
    //console.log(response);
    return response;
  } catch (error) {
    console.error(error);
  }
};

module.exports = fetchPokemon;
