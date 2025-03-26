const axios = require("axios");

const randomize = () => {
  return Math.floor(Math.random() * 900 + 1);
};

const fetchPokemon = async () => {
  try {
    const endpoint = `https://pokeapi.co/api/v2/pokemon/${randomize()}`;
    const response = await axios(endpoint);
    //console.log(response);
    return response;
  } catch (error) {
    console.error(error);
  }
};

module.exports = fetchPokemon;
