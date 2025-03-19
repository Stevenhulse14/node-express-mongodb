/*
    6. Import express & uuid, set up router
*/
const express = require("express");
const uuid = require("uuid").v4;

const router = express.Router();

/*
    7. Create an array of your favorite films using uuid() for unique ID's
*/

const films = [
    {
        id: uuid(),
        name: "Guardians of the Galaxy",
        boxOffice: 300,
    },
    {
        id: uuid(),
        name: "Dr. Strange & the Multiverse of Madness",
        boxOffice: 100,
    },
    {
        id: uuid(),
        name: "Thor",
        boxOffice: 200,
    },
    {
        id: uuid(),
        name: "When You Finish Saving The World",
        boxOffice: 2,
    },
];

/*
    12. Create sort method for the films
*/
function sort(data, sortOrder, sortBy) {
  const sortedData = data.toSorted((a, b) => {
    return a[sortBy] < b[sortBy] ? -1 : 1;
  });
  
  if (sortOrder === "desc") {
    sortedData.reverse();
  }

  return sortedData;
}

/*
    8. Handle GET requests to localhost:3000/api/v1/films
*/
router.get("/", function (req, res) {
    // query?sortBy=name or query?sortBy=boxOffice
    // default to sorting by name if req.query.sortBy is undefined.
    const sortByQuery = req.query.sortBy || 'name';

    // query?sortOrder=asc or query?sortOrder=desc
    // Default to ascending if req.query.sortOrder is undefined.
    const sortOrderQuery = req.query.sortOrder || 'asc'

    const sorted = sort(films, sortOrderQuery, sortByQuery);
    // 8a. Respond with films
    res.json({ message: "success", payload: sorted });
});

/*
    9. Handle POST requests to localhost:3000/api/v1/films
*/
router.post("/", function (req, res) {
    // 9b. Build out a new film object
    const newFilm = {
        id: uuid(),
        name: req.body.name,
        boxOffice: req.body.boxOffice,
    };

    // 9c. Push the new object into the local data
    films.push(newFilm);
    // 9d. Send back the new data
    res.json({ message: "success", payload: newFilm });
});

/*
    10. Handle PATCH requests to localhost:3000/api/v1/films/[id]
*/
router.patch("/:id", function (req, res) {
    // 10b. Find the film you want to change
    const foundFilm = films.find((film) => film.id === req.params.id);

    // 10c. Send a failure message if the film isn't found
    if (foundFilm === undefined) {
        res.status(404).json({ message: "failure", payload: "film not found" });
        // 10d. Target the found film, and change it based on the req.body
    } else {
        const incomingObj = req.body;

        //merging two objects
        Object.assign(foundFilm, incomingObj);

        res
            .status(200)
            .json({ message: "success", payload: foundFilm });
    }
});

/*
    11. Handle DELETE requests to localhost:3000/api/v1/films/[id]
*/
router.delete("/:id", function (req, res) {
    // 11b. Find the index you want to splice out
    const i = films.findIndex((film) => film.id === req.params.id);

    // 11c. Send a failure message if the film isn't found
    if (i === -1) {
        res.status(500).json({
          message: "failure",
          payload: "film not found",
        });
        // 11d. Target the found film, and splice it out of our data
    } else {
        const deletedFilm = films.splice(i, 1)[0];

        res.status(200).json({ message: "success", payload: deletedFilm });
    }
});

/*
  8b. Export the router
*/
module.exports = router;
