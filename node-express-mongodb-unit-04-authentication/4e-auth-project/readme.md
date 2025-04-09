# LAB - Fullstack User App

---

### Introduction

You will either create a new application or update an existing one so that it is:

- A basic CRUD application.
- With User login/signup.
- And encrypted passwords in the database.
- Has a feature that requires a user to be logged in.

You will not have to:

- Worry about styling.
- Create an API.
- Create an app from scratch (unless you don't have one to update).

Here are some ideas for apps with features that require a user to be logged in:

- A blog or social media site where only logged-in users can create a post or comment on an existing one.
- A music library where only logged-in users can favorite a song.
- A to-do list where only logged-in users can have multiple lists.
- A recipe book where only logged-in users can create a recipe.
- A personal library where only logged-in users can wish-list a book or add a book to their collection.
- A movie database where only logged-in users can add a movie to their list of watched movies--or movies to watch.

Some other ideas for themes are below, but __you can choose your own__, as long as it meets the requirements.

- a personal finance tracker
- a workout tracker
- a travel journal
- a dating app
- a job board
- a real estate app
- a car dealership
- a restaurant app
- an e-commerce store

### REQUIREMENTS - CLIENT FUNCTIONALITY

The client should be able to do the following on this application:

- `C`reate a Document
- `R`ead all Documents, or just one
- `U`pdate one Document
- `D`elete one Document
- Sign up.
- Log in.
- Log out.
- Save one Document as a logged-in User.

### BONUS

In no particular order:

- Style your site.
- Add a third collection to your database (after users and your original collection).
- Add a feature that requires a user to be logged in AND have a specific role, such as an admin or a moderator or a premium user.

---

### Some Recommended Steps To Help You Get Started

##### Structure - Create The Following Files/Folders

- index.js
- .env
- controllers/
- database/
- models/
- public/
- routes/
- views/

##### Initiate Node Project

- Open terminal
- navigate to the root folder (the ls command should show the structure)
- use command `npm init -y`

##### Install Bare Minimum Modules

- In terminal, use command `npm install express morgan mongoose dotenv ejs method-override bcrypt express-session connect-mongo`

##### Create Data According To Your Them

- Create some JSON data and import it into your database.

##### General Steps

- Test that the server can run before creating ANY functionality
- Create a homepage view and TEST THAT IT CAN BE SEEN FROM THE BROWSER
- Test a connection to your database
- Set up a Model, Controller, and Route for a single collection
  - Test that it can be seen on the back-end via Postman

- Set up views to see your collection
  - Create 1 page to `R`ead the ENTIRE collection
  - Create 1 page to `R`ead 1 document within the collection

- Set up for the client to `C`reate a document
  - Back-end functionality, tested via Postman
  - Create 1 page for the client to input data via a form
  - Plug the back-end to receive the action from the front-end

- Set up for the client to `U`pdate a document
  - Back-end functionality, tested via Postman
  - Create 1 page for the client to input data via a form
  - Plug the back-end to receive the action from the front-end

- Set up for the client to `D`elete a document
  - Back-end functionality, tested via Postman
  - Create 1 page for the client to delete it via a button
  - Plug the back-end to receive the action from the front-end

- Add Users
  - Add signup/login back-end functionality.
  - Create 1 page for the client to sign up.
  - Create 1 page for the client to log in.
  - Add relationship between users and your other collection.
  - Add a feature that requires a user to be logged in, connecting them with the other collection.
