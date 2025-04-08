const Pokemon = require("../../models/Pokemon");

const getAllPokemon = async () => {
  try {
    const pokemon = await Pokemon.find({});

    return pokemon;
  } catch (error) {
    throw error;
  }
};

const getOnePokemon = async (name) => {
  try {
    const pokemon = await Pokemon.findOne({ name: name });

    return pokemon;
  } catch (error) {
    throw error;
  }
};

const createOnePokemon = async function (pokemonData) {
  try {
    const pokemon = await Pokemon.create(pokemonData);

    return pokemon;
  } catch (error) {
    throw error;
  }
}

const deleteOnePokemon = async (name) => {
  try {
    const pokemon = await Pokemon.deleteOne({ name: name });

    return pokemon;
  } catch (error) {
    throw error;
  }
};

const updateOnePokemon = async (name, updateData) => {
  try {
    const pokemon = await Pokemon.findOneAndUpdate(
      { name: name },
      updateData,
      { new: true },
    );

    return pokemon;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getAllPokemon,
  getOnePokemon,
  createOnePokemon,
  deleteOnePokemon,
  updateOnePokemon,
};
