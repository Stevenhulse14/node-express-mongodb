# Lesson 2D: Express-Router Assignment

---

## Goals

- Create a server using the Express module
- Create an API with full CRUD functionality on 2 sets of data
- Implement a Router to clean up the code

---

![Stock Image of Push Up](https://i.imgur.com/my52chH.jpg)

It's time to get in shape! Back-end functionality is fairly standard, and it takes some repetitions before getting a handle of it. The examples here uses datasets for Musicians and Actors, but feel free to use a set of data that you will enjoy working with!

## Instructions:

- Begin inside of an empty folder
- Create an **index.js** file
- Create a **./routes** folder
- Create a **./routes/musiciansRouter** file
- Create a **./routes/actorsRouter** file
- Use command `npm init -y` to initialize a Node project
- Use command `npm install express morgan uuid` so our necessary modules are ready to use

- - In **index.js**

1. Import express & Morgan, set up app variable
2. Set up middleware
3. Import Router files (`"./routes/musiciansRouter`)
4. Set up the URL routes to connect to each router
5. Set up the port and begin listening

- - In **./routes/musiciansRouter.js**

6. Import `express` & `uuid`, set up router
7. Create an array of your favorite Musical Artists using `uuid()` for unique ID's

The data we will create is based on what music artists you listen to. Here is an example:

```js
const musicians = [
  {
    id: uuid(),
    name: "KAYTRANADA",
    age: 30,
  },
  {
    id: uuid(),
    name: "Kenny Beats",
    age: 31,
  },
  {
    id: uuid(),
    name: "Tyler the Creator",
    age: 31,
  },
  {
    id: uuid(),
    name: "Denzel Curry",
    age: 27,
  },
];
```

Make sure that the ages and names vary enough to test for sorting methods.

8. Handle GET requests to `/musicians` and Export the router at the bottom of the page

- TEST IT WITH POSTMAN

9. Handle POST requests to `/musicians`.

- TEST IT WITH POSTMAN

10. Handle PATCH requests to `/musicians/:id`.

- TEST IT WITH POSTMAN

11. Handle DELETE requests to `/musicians/:id`.

- TEST IT WITH POSTMAN

- - In **./routes/actorsRouter.js**

12. Import express & uuid, set up router
13. Create an array of your favorite Actors using uuid() for unique ID's

The data we will create is based on what music artists you listen to. Here is an example:

```js
const actors = [
  {
    id: uuid(),
    name: "Jonah Hill",
    age: 38,
  },
  {
    id: uuid(),
    name: "Leonardo DiCaprio",
    age: 48,
  },
  {
    id: uuid(),
    name: "Finn Wolfhard",
    age: 19,
  },
  {
    id: uuid(),
    name: "Samuel L Jackson",
    age: 73,
  },
];
```

Make sure that the ages and names vary enough to test for sorting methods.

14. Handle GET requests to `/actors` and Export the router at the bottom of the page

- TEST IT WITH POSTMAN

15. Handle POST requests to `/actors/`

- TEST IT WITH POSTMAN

16. Handle PATCH requests to `/actors/[id]`

- TEST IT WITH POSTMAN

17. Handle DELETE requests to `/actors/[id]`

- TEST IT WITH POSTMAN

## BONUSES

- Create sort method for the musical artists
- Apply the sort method in your GET method
- Create sort method for the actors
- Apply the sort method in your GET method
