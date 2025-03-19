# Lesson 2D: Express Router

---

## What this lesson covers:

- How to separate functionality to multiple files
- How to connect your main server to your Router files
- What is `uuid`
- URL extensions
- Sort methods

---

## Routing

As our Node applications are expanding, the codebase can become messy and difficult to navigate. Making your code more modular by giving each file a dedicated task will reduce the chances of a Single Point of Failure. A "Single Point of Failure" refers to a component within a system that, if it fails, can cause the entire system to malfunction or become unavailable. In this case, we will be creating a file dedicated to routing. Routing is when you map a URL request handler to an action. So far we've been mapping various URL extensions to actions that let us manage data on a server, one route for each CRUD operation. We'll be taking those URL routes to their own file in this lesson.

## Getting started

As usual, since we are creating a new project we should initialize with the following command:

```
npm init -y
```

Install the necessary modules:

```
npm install express morgan
```

And we are going to install a module called `uuid` that will auto generate unique ID's for each item in our data

```
npm install uuid
```

## index.js

In **index.js**, the first thing to do is to import the proper modules:

1. Import express & Morgan, set up app variable

```js
const express = require("express");
const logger = require("morgan");

const app = express();
```

Next, we set up our middleware functionality:

2. Set up middleware

```js
// Can accept incoming JSON data
app.use(express.urlencoded({ extended: false }));
// Can send outgoing JSON data
app.use(express.json());
// logs requests and metadata
app.use(logger("dev"));
```

Next, we will be importing the router files. Instead of having `app.get()` repeatedly in the main server file, we will be writing large chunks of code in **./routes/filmsRouter.js** so that there is a dedicated file to this functionality.

3. Import Router files

Under the import for the emojisRouter, add the following line:

```js
const filmsRouter = require("./routes/filmsRouter");
```

Since we are splitting up the routes, we should also split up the URL up as well:

4. Set up the URL routes to connect to each router

Under the equivalent line for the emojis, add:

```js
// localhost:3000/api/v1/films
app.use("/api/v1/films", filmsRouter);
```

This means that `localhost:3000/api/v1/films` is what the URL will always begin with. any URL extensions that the router listens to will come after `localhost:3000/api/v1/films`

Finally, let's set up the port and have the server listen on port 3000:

5. Set up the port and begin listening

```js
const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}....`);
});
```

It's time to begin writing in **filmsRouter.js**.

## filmsRouter.js

Begin by importing the `express` and `uuid` modules, and setting up the `router` object:

6. Import express & uuid, set up router

```js
const express = require("express");
const router = express.Router();
// Can generate a unique ID upon server startup
const uuid  = require("uuid").v4;
```

The router object will be exported at the end of this page, and is already imported in **index.js** from steps 3 & 4.

Next, let's set up our local data. Every time we run the server, the IDs will be auto generated using `uuid()`:

7. Create an array of your favorite films using uuid() for unique ID's

```js
const films = [
    {
        id: uuid(),
        name: "Guardians of the Galaxy",
        boxOffice: 300,
    },
    {
        id: uuid(),
        name: "Dr. Strange & the Multiverse of Madness",
        boxOffice: 75,
    },
    {
        id: uuid(),
        name: "Thor",
        boxOffice: 55,
    },
    {
        id: uuid(),
        name: "When You Finish Saving The World",
        boxOffice: 2,
    },
];
```

Next, we will write the first GET request so that we can see our data in Postman. We will also export the router so we can test this:

8. Handle GET requests to localhost:3000/api/v1/films

```js
router.get("/" function (req, res) {
    // 8a. Respond with films
    res.json({ message: "success", payload: films });
}); // end of GET /

// 8. B) Export the router
/*
  8b. Export the router
*/
module.exports = router;
```

- Run the server by going to the terminal and using the command `node index.js`
- Use Postman to perform a GET request to `localhost:3000/api/v1/films`
- Once it works, cut the server off by pressing `ctrl + c` in the terminal

9. Handle POST requests to localhost:3000/api/v1/films

```js
router.post("/", function (req, res) {
    // 9a. Build out a new film object
    const newFilm = {
        id: uuid(),
        name: req.body.name,
        boxOffice: req.body.boxOffice,
    };

    // 9b. Push the new object into the local array
    films.push(newFilm);
    // 9c. Show the updated data to the user
    res.json({ message: "success", payload: films });
}); // end of POST /films
```

- Run the server by going to the terminal and using the command `node index.js`
- Use Postman to perform a POST request to `localhost:3000/api/v1/films`.
- - Change the Params tab to Body. In the Body tab.
- - Set the data to raw, and set text to JSON.
- - Make sure to use the property names that match the names being used to generate the new object, and fill the values with unique values. Here is an example of something you can send:

```js
{
    "name": "Spider-Man",
    "boxOffice": 355
}
```

- Once it works, cut the server off by pressing `ctrl + c` in the terminal

10. Handle PATCH requests to localhost:3000/api/v1/films/[id]

```js
router.patch("/:id", function (req, res) {
    // 10a. Find the film you want to change
    const film = films.find((film) => film.id === req.params.id);

    // 10b. Send a failure message if the film isn't found
    if (film === undefined) {
        res.status(404).json({ message: "failure", payload: "film not found" });
        // 10c. Target the found film, and change it based on the req.body
    } else {
        const incomingObj = req.body;

        //merging two objects
        Object.assign(film, incomingObj);

        res.json({
            message: "success",
            payload: film,
        });
    }
}); // end of PATCH request to /films/[id]
```

- Run the server by going to the terminal and using the command `node index.js`
- Use Postman to perform a PATCH request to `localhost:3000/api/v1/films/[an id from the data]`. Grab one of the unique IDs that was generated for a film of your choice
- - Change the Params tab to Body. In the Body tab.
- - Set the data to raw, and set text to JSON.
- Here is an example of the req.body:

```js
{
    "name": "Iron Man",
    "boxOffice": 3000
}
```

- Also test an ID that doesn't match the data, so you can see what a failure looks like.
- Once it works, cut the server off by pressing `ctrl + c` in the terminal

11. Handle DELETE requests to localhost:3000/api/v1/films/[id]

```js
router.delete("/:id", function (req, res) {
    // 11a. Find the film you want to delete
    const i = films.findIndex((film) => film.id === req.params.id);

    // 11b. Send a failure message if the film isn't found
    if (i === -1) {
        res.status(404).json({
            message: "failure",
            payload: "film not found",
        });
        // 11c. Target the found film, and splice it out of our data
    } else {
        const deletedFilm = films.splice(i, 1)[0];

        res.json({
            message: "success",
            payload: deletedFilm,
        });
    }
}); // end of DELETE request to localhost:3000/api/v1/films/[id]
```

- Run the server by going to the terminal and using the command `node index.js`
- Use Postman to perform a DELETE request to `localhost:3000/api/v1/films/:id` and make sure to grab an ID _after_ you have restarted the server. Also test an ID that doesn't match the data, so you can see what a failure looks like.
- Once it works, cut the server off by pressing `ctrl + c` in the terminal

## Sort Methods

We can apply a method of sorting our data using queries in the parameters of the URL (Postman will use a Parameters tab as a helpful redundancy).

12. Create sort method for the films

```js
function sort(data, sortOrder, sortBy) {
    const sortedData = data.toSorted((a, b) => {
        return a[sortBy] < b[sortBy] ? -1 : 1;
    });
    
    if (sortOrder === "desc") {
        sortedData.reverse();
    }

    return sortedData;
}
```

The `sort()` method will be plugged into our GET method, when we decide to make a GET request and get the entire films array it will sort this data for us.

- If our query looks like `query?sortOrder=asc`, it will sort the films from A - Z.
- If our query looks like `query?sortOrder=desc`, it will sort the films from Z - A
- If our query looks like `query?sortOrder=asc&sortBy=boxOffice`, it will sort the films from 0 - 300
- If our query looks like `query?sortOrder=desc&sortBy=boxOffice`, it will sort the films from 300 - 0

This will make queries much simpler, once we go back into `router.get("/", ...)` and apply this. It makes it such that the front-end of an application simply needs to change the URL of the request based on some sort of form with check boxes and/or a drop down menu. This is what this looks like:

```js
router.get("/", function (req, res) {
    // 13a. Set up sortBy.
    // query?sortBy=name or query?sortBy=boxOffice
    // default to sorting by name if req.query.sortBy is undefined.
    const sortByQuery = req.query.sortBy || 'name';

    // 13b. Set up sortOrder.
    // query?sortOrder=asc or query?sortOrder=desc
    // Default to ascending if req.query.sortOrder is undefined.
    const sortOrderQuery = req.query.sortOrder || 'asc'

    // 13c. Get the sorted version of the films. Change the line in 8a to be "sorted" instead of "films".
    const sorted = sort(films, sortOrderQuery, sortByQuery);
    // 8a. Respond with films
    res.json({ message: "success", payload: sorted });
  }
}); // end of GET /films
```

- Run the server by going to the terminal and using the command `node index.js`
- Use Postman to perform a GET request to `localhost:3000/api/v1/films?sortOrder=asc&sortBy=name`. Take note of the order of the films.
- Use Postman to perform a GET request to `localhost:3000/api/v1/films?sortOrder=desc&sortBy=name`. Take note of the order of the films.
- Use Postman to perform a GET request to `localhost:3000/api/v1/films?sortOrder=asc&sortBy=boxOffice`. Take note of the order of the films.
- Use Postman to perform a GET request to `localhost:3000/api/v1/films?sortOrder=desc&sortBy=boxOffice`. Take note of the order of the films.
- Once it works, cut the server off by pressing `ctrl + c` in the terminal
