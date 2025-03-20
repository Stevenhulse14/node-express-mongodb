const express = require("express");
const router = express.Router();
const axios = require("axios"); // `npm install axios`

// localhost:3000/summers/
router.get("/", async (req, res) => {
  try {
    let response = await axios.get("https://rickandmortyapi.com/api/character/?name=summer");
    const summers = response.data.results;
    res.render('home', {summers: summers});
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
