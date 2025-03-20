/*
  6. Import Express and axios. Set up Router variable
*/
const express = require("express");
const axios = require("axios");
const router = express.Router();

/*
  7. Set up homepage, respond with no data yet.
*/
router.get("/", function (req, res) {
    // "home" refers to "./views/home.ejs"
    res.render("home", { data: [], searchQuery: "" });
});

/*
  9. Set up a response to using the search form
*/
router.get("/movies", async (req, res) => {
    const query = req.query.search;

    try {
        const payload = await axios(
          `https://api.themoviedb.org/3/search/multi?api_key=a4cae43902da506229d8148bcfc7364c&language=en-US&query=${query}`
        );

        if (payload.data.results.length === 0) {
            res.render("home", { data: [], searchQuery: "No movies were found!" });
        } else {
            console.log(payload.data.results);
            const movies = payload.data.results.filter((movie) => movie.media_type === "movie");
            res.render("home", { data: movies, searchQuery: query });
        }
    } catch (e) {
        console.log(e);
    }
});

/*
  8. Export the router
*/
module.exports = router;
