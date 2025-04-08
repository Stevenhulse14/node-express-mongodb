// Import express, set up router
const express = require("express");
const router = express.Router();

// Import functionality from the view controller
const {
  createUser,
} = require("../../controllers/api/usersController");

const {
  getAllPokemon,
  getOnePokemon,
  deleteOnePokemon,
  createOnePokemon,
  updateOnePokemon,
} = require('../../controllers/api/pokemonController');

router.get("/", (_, res) => {
  res.render("index");
});

// localhost:3000/pokemons
router.get("/pokemons", async function (_, res) {
  try {
    const pokemons = await getAllPokemon();

    // Populates a web page with our entire collection data
    res.render("pokemons", { pokemons: pokemons });
  } catch (error) {
    console.log(error);
  }
})

// localhost:3000/one-pokemon/:name
router.get("/one-pokemon/:name", async function (req, res) {
  try {
    const pokemon = await getOnePokemon(req.params.name);
    // Use pokemons.ejs file, all data will be in pokemon
    res.render("one-pokemon", { pokemon: pokemon });
  } catch (error) {
    console.log(error);
  }
})

// localhost:3000/delete-pokemon/:name
router.delete('/delete-pokemon/:name', async function (req, res) {
  try {
    await deleteOnePokemon(req.params.name);
    res.redirect('/pokemons');
  } catch (error) {
    console.log(error);
    res.redirect('/pokemons');
  }
})

// localhost:3000/create-pokemon-form
router.get("/create-pokemon-form", async function(_, res) {
  try {
    res.render("create-pokemon");
  } catch (error) {
    console.log(error);
  }
})

// localhost:3000/create-pokemon
router.post("/create-pokemon", async function(req, res) {
  try {
    const newPokemon = {
      ...req.body,
      moves: req.body.moves
        .split(',')
        .map((move) => move.trim()),
    };

    const pokemon = await createOnePokemon(newPokemon);
    res.redirect(`/one-pokemon/${pokemon.name}`);
  } catch (error) {
    console.log(error);
    res.redirect("/pokemons");
  }
});


// localhost:3000/update-pokemon-form/:name
router.get("/update-pokemon-form/:name", async function(req, res) {
  try {
    // Target the correct document to be updated
    const pokemon = await getOnePokemon(req.params.name);

    // Render the update form with the filled-in original info
    res.render("update-pokemon", { pokemon: pokemon });
  } catch (error) {
    console.log(error);
  }
})

// localhost:3000/update-pokemon/:name
router.patch('/update-pokemon/:name', async function (req, res) {
  try {
    const pokemon = await updateOnePokemon(req.params.name, req.body);
    res.redirect(`/one-pokemon/${pokemon.name}`);
  } catch (error) {
    console.log(error);
    res.redirect(`/one-pokemon/${req.params.name}`);
  }
})

// 6. Set up Signup and Login form-rendering routes.

// localhost:3000/create-user
/*
  12. Set up front-end route for the user page
*/

/*
  17. Set up log out route to end sessions
*/

module.exports = router;
