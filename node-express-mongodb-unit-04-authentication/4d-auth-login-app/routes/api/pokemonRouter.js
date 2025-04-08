// Set up Router functionality
const express = require("express");

// Import database controller functions
const {
  getAllPokemon,
  getOnePokemon,
  createOnePokemon,
  deleteOnePokemon,
  updateOnePokemon,
} = require("../../controllers/api/pokemonController");

const router = express.Router();

// GET localhost:3000/api/pokemons
router.get("/", async function (req, res) {
  try {
    const pokemon = await getAllPokemon();

    res.json({
      message: "success",
      payload: pokemon,
    });
  } catch (error) {
    console.log(`getAllPokemon error: ${error}`);

    res.json({
      message: "failure",
      payload: error,
    });
  }
})

// GET localhost:3000/api/pokemons/:name
router.get("/:name", async function (req, res) {
  try {
    const pokemon = await getOnePokemon(req.params.name);

    res.json({
      message: "success",
      payload: pokemon,
    });
  } catch (error) {
    // server-side message
    console.log(`getOnePokemon error: ${error}`);

    // client-side message
    res.json({
      message: "failure",
      payload: error,
    });
  }
})

// POST localhost:3000/api/pokemons
router.post("/", async function (req, res) {
  try {
    const pokemon = await createOnePokemon(req.body);
    res.json({
      message: "success",
      payload: pokemon,
    });
  } catch (error) {
    // server-side
    console.log(`createOnePokemon error: ${error}`);

    // client-side
    res.json({
      message: "failure",
      payload: `createOnePokemon error: ${error}`,
    });
  }
})

// PATCH localhost:3000/api/pokemons/:name
router.patch("/:name", async function (req, res) {
  try {
    const pokemon = await updateOnePokemon(req.params.name, req.body);
    res.json({
      message: "success",
      payload: pokemon,
    })
  } catch (error) {
    // server-side
    console.log(`updateOnePokemon: ${error}`);

    // client-side
    res.json({
      message: "failure",
      payload: `updateOnePokemon: ${error}`,
    });
  }
})

// DELETE localhost:3000/api/pokemons/:name
router.delete("/:name", async function (req, res) {
  try {
    const pokemon = await deleteOnePokemon(req.params.name);
    res.json({
      message: "success",
      payload: pokemon,
    });
  } catch (error) {
    // server-side
    console.log(`deleteOnePokemon error: ${error}`);

    // client-side
    res.json({
      message: "failure",
      payload: `deleteOnePokemon error: ${error}`,
    });
  }
})

module.exports = router;
