# Lesson 2G: One-Page API App Assignment

---

## What this lab covers:

- Create a server using express
- Use a router to handle all URL requests
- Use keywords `async` & `await` to perform a GET request to an API of your choosing
- Use a `try-catch` statement to safely perform the GET request via `axios`
- Render the data you get back onto an EJS file

---

![One-Pager](https://i.imgur.com/GFJ3A1I.png)

It's time to create a one-page API application! We're going to combine the skills we learned in this unit to create a simple application. We haven't arrived at the part of the course that covers MongoDB, so instead of using our own data we will use a free API available to the public. Check out the crowd-sourced [Public APIs Repository](https://github.com/public-apis/public-apis) on GitHub.

The idea of your application here is to make a GET request to the API and attach the data to the front-end of the application in a way that is useful or entertaining. In the `example-apps` directory, we've included a couple of simple apps that you can check out the code for and run with a simple `npm install` and `node index.js`:

- The One-Page Cocktail App, where you can search for a cocktail and have its picture and ingredients displayed, thanks to our code and the CocktailDB API.
- The One-Page Summers App, where you can see all the alternate reality versions of Summers from Rick and Morty, thanks to our code and the Rick and Morty API.

One-page API applications are fairly easy to deploy, as well. We've deployed our [Shiny Pokemon App](https://shiny-pokemon-app.onrender.com/), so you can see that these applications are not only (relatively) quick to build but, once you've built them, you can put them out into the world for everyone to see. In the Shiny Pokemon app, you type in the name of a pokemon, and what is returned is an image of the shiny version of that pokemon Here is a link to [the Pokemon API](https://pokeapi.co/).

Here are some other ideas for your assignment:

- An application that displays the status of the trains at a certain location (for example, here is the API endpoint for the metro in Lisbon, Portugal: https://app.metrolisboa.pt/status/getLinhas.php )
- An application with a search bar that returns data based on the search (see the Shiny Pokemon App and the Cocktail Search App for example code).
- An application that displays a list of characters and useful/entertaining information related to these characters (Any video game/TV show/Movie that has a free API available)

The application doesn't need to be complex, impressive, or super stylish. As long as you get the data from point A (the API) to point B (the server) to point C (the client), and practiced all of the skills listed at the top, then you've completed this lab!
