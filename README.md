# 🚀 **Fullstack Development Resources**

Welcome! This will be your main place for Fullstack-related materials!

## 📚 **Helpful Resources/Links**

<details><summary>Click to view</summary>

- [📖 Node.js Official Documentation](https://nodejs.org/en/docs/)
- [📖 Express Official Documentation](https://expressjs.com/)
- [📖 MongoDB Official Documentation](https://docs.mongodb.com/)
- [📖 Mongoose Documentation](https://mongoosejs.com/)
- [📖 Axios Documentation](https://axios-http.com/docs/intro)
- [📖 EJS Documentation](https://ejs.co/)
- [📺 Node.js Crash Course](https://www.youtube.com/watch?v=fBNz5xF-Kx4)
- [📺 Express.js Crash Course](https://www.youtube.com/watch?v=L72fhGm1tfE)
- [📺 MongoDB Crash Course](https://www.youtube.com/watch?v=-56x56UppqQ)
- [📺 Intro to Authentication (Sessions & Hashing)](https://www.youtube.com/watch?v=Ud5xKCYQTjM)
- [📖 JavaScript Promises & Async/Await](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Promises)

</details>

---

## 📦 **Curriculum Overview: Outback**

<details><summary>Click to view Node-Express-MongoDB Overview</summary>

### **00 - The Node Environment**

- Node Installation
- Running Node

### **01 - Introduction to Node**

- Intro to Modules
  - What is a Module
- http Module
  - Starting a basic server
  - Routing and responding (text, JSON, HTML)
- Lab: Basic Server

### **02 - Node, Express & EJS**

- Express
  - Routing
  - Axios (HTTP requests)
- EJS
  - Partials
  - Data injection
  - Conditional rendering
  - Loops
- Building a Basic API

### **03 - MongoDB**

- Introduction to MongoDB
- CRUD operations
- Using Mongoose

### **04 - Authentication**

- Sessions and Cookies
- Password Hashing (bcrypt)
- User Authentication (Login/Signup)

</details>

---

## **Labs and Projects**

<details><summary>Labs & Projects</summary>

- **Basic Node Server Lab** ([🔗 Code Example](#))
- [Express Basic API Lab](#)
- [MongoDB CRUD Application Lab](#)
- [Authentication Project (Login/Signup, CRUD with Encrypted Passwords)](#)

</details>

---

## **🎥 Checkpoint Reviews**

<details><summary>Node Checkpoint</summary>

- [💬 Q&A Session](#)

</details>

<details><summary>Express & MongoDB Checkpoint</summary>

- [💬 Q&A Session](#)

</details>

---

Happy Coding!

---

### **Week 1: The Node Environment, Introduction to Express and Modules Node**

<details><summary>Click to view</summary>

#### Day 1: The Node Environment

- Pre-Work:

  - [📖 What Exactly is Node.js][nodejs-intro]
  - [📖 A Pair is Better Than One][pair-better]
  - [📖 Git Handbook][git-handbook]

[nodejs-intro]: https://medium.freecodecamp.org/what-exactly-is-node-js-ae36e97449f5
[git-handbook]: https://guides.github.com/introduction/git-handbook/
[pair-better]: https://hackernoon.com/a-pair-is-better-than-one-e9d4514add9f

```

| Topic                   | Kahoot | Slides | Demo                | Solution             | Review |
| ----------------------- | ------ | ------ | ------------------- | -------------------- | ------ | --- |
| Node Env                |        | -      | - [🧑‍💻][node-demo]   | -                    | -      | -   |
| Node Installation       | [📺][] |        | -                   | -                    | -      |
| Running Node            | [📺][] |        | -                   | - [👾][running-node] | -      |
| Introduction to Modules | [📺][] |        | - [🧑‍💻][module-demo] | -                    | -      |

```

[//]: # " Paste in table above >> [🧑‍💻][node-demo] "
[node-demo]: https://github.com/Stevenhulse14/node-express-mongodb/tree/main/node-express-mongodb-unit-00-the-node-environment/node-demo
[//]: # " Paste in table above >> [🧑‍💻][module-demo] "
[module-demo]: https://github.com/Stevenhulse14/node-express-mongodb/tree/main/node-express-mongodb-unit-01-the-node-intro/1a-intro-to-modules/modules-demo
[//]: # " Paste in table above >> [👾][running-node] "
[module-demo]: https://github.com/Stevenhulse14/node-express-mongodb/blob/main/node-express-mongodb-unit-00-the-node-environment/0b-running-node/final.js

#### Day 2: Modules / FS Library / Tic Tac Toe Review

- Pre-Work:

  - [📖 Node.js Modules ][nodejs-modules]
  - [📖 Fs Library][fs-lib]
  - [📖 Tic Tac Toe Proj][tic-tac-toe]

[nodejs-modules]: https://nodejs.org/api/modules.html
[fs-lib]: https://www.w3schools.com/nodejs/nodejs_filesystem.asp
[tic-tac-toe]: https://github.com/Stevenhulse14/Tickytackytoey

```

| Topic             | Kahoot | Slides | Demo                     | Solution | Review |
| ----------------- | ------ | ------ | ------------------------ | -------- | ------ | --- |
| Tic-Tac-Toe       |        | -      | - [🧑‍💻][tic-tac-toe-demo] | -        | -      | -   |
| Built in Modules  | [📺][] |        | -                        | -        | -      |
| Fs / OS Library   | [📺][] |        | -                        | -        | -      |
| HTTP Introduction | [📺][] |        | -                        | -        | -      |

```

[//]: # " Paste in table above >> [🧑‍💻][tic-tac-toe-demo] "
[tic-tac-toe-demo]: https://github.com/Stevenhulse14/node-express-mongodb/tree/main/tic-tac-toe-solution

#### Day 3: HTTP

- Pre-Work:

  - [📖 HTTP module ][http-modules]
  - [📖 Express Introduction ][express-doc]

[http-modules]: https://nodejs.org/api/http.html
[express-doc]: https://expressjs.com/

```

| Topic             | Kahoot | Slides | Demo | Solution | Review |
| ----------------- | ------ | ------ | ---- | -------- | ------ | --- |
| Tic-Tac-Toe       |        | -      | -    | -        | -      | -   |
| Built in Modules  | [📺][] |        | -    | -        | -      |
| Fs / OS Library   | [📺][] |        | -    | -        | -      |
| HTTP Introduction | [📺][] |        | -    | -        | -      |

```

#### Day 4: Express Demo

- Pre-Work:

  - [📖 Express Demo ][express-deep-dive]
  - [📖 Express Demo Web Dev Simplified ][35-min-video]

[express-deep-dive]: https://www.youtube.com/watch?v=Oe421EPjeBE&t=18185s&ab_channel=freeCodeCamp.org
[35-min-video]: https://www.youtube.com/watch?v=SccSCuHhOw0&ab_channel=WebDevSimplified

```

| Topic        | Kahoot | Slides | Demo | Solution | Review |
| ------------ | ------ | ------ | ---- | -------- | ------ | --- |
| Express Demo |        | -      | -    | -        | -      | -   |
|              | [📺][] |        | -    | -        | -      |
|              | [📺][] |        | -    | -        | -      |
|              | [📺][] |        | -    | -        | -      |


```

#### Day 5: HTTP/Express LAB

- Pre-Work:

```

| Topic | Kahoot | Slides | Demo | Solution | Review |
| ----- | ------ | ------ | ---- | -------- | ------ | --- |
|       |        | -      | -    | -        | -      | -   |
|       | [📺][] |        | -    | -        | -      |
|       | [📺][] |        | -    | -        | -      |
|       | [📺][] |        | -    | -        | -      |

```

</details>

Awesome! Here's a continuation of your Week 1 curriculum with detailed outlines for **Week 2**, **Week 3**, and **Week 4**, maintaining your formatting and expanding on Express, Middleware, Routing, MongoDB, and CRUD principles:

---

### **Week 2: Express, Routing, Middleware, and RESTful APIs**

<details><summary>Click to view</summary>

#### Day 1: Express Routing

- Pre-Work:

  - [📖 Express Routing Docs][express-routing]
  - [📖 RESTful Routes Overview][restful-routes]

[express-routing]: https://expressjs.com/en/guide/routing.html  
[restful-routes]: https://dev.to/avxkim/restful-api-in-express-js-3f1

```
| Topic            | Kahoot | Slides | Demo                       | Solution                     | Review |
| ---------------- | ------ | ------ | -------------------------- | ---------------------------- | ------ |
| Express Routing  |        | -      | - [🧑‍💻][routing-demo]      | -                            | -      |
| REST Overview    | [📺][] |        | -                          | -                            | -      |
```

[routing-demo]: https://github.com/Stevenhulse14/node-express-mongodb/tree/main/unit-02-routing-demo

---

#### Day 2: Middleware & Custom Functions

- Pre-Work:

  - [📖 Express Middleware][middleware-doc]
  - [📖 Custom Middleware Explained][custom-middleware]

[middleware-doc]: https://expressjs.com/en/guide/using-middleware.html  
[custom-middleware]: https://www.digitalocean.com/community/tutorials/expressjs-middleware

```
| Topic              | Kahoot | Slides | Demo                       | Solution | Review |
| ------------------ | ------ | ------ | -------------------------- | -------- | ------ |
| Middleware         |        | -      | - [🧑‍💻][middleware-demo]   | -        | -      |
| Custom Middleware  | [📺][] |        | -                          | -        | -      |
```

[middleware-demo]: https://github.com/Stevenhulse14/node-express-mongodb/tree/main/unit-02-middleware

---

#### Day 3: HTTP Methods & RESTful API Patterns

- Pre-Work:

  - [📖 REST Methods][rest-methods]
  - [📖 CRUD in Express][crud-express]

[rest-methods]: https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods  
[crud-express]: https://zellwk.com/blog/crud-express-mongodb/

```
| Topic             | Kahoot | Slides | Demo                       | Solution | Review |
| ----------------- | ------ | ------ | -------------------------- | -------- | ------ |
| REST Methods      |        | -      | - [🧑‍💻][rest-method-demo]  | -        | -      |
| CRUD Overview     | [📺][] |        | -                          | -        | -      |
```

[rest-method-demo]: https://github.com/Stevenhulse14/node-express-mongodb/tree/main/unit-02-crud-basics

---

#### Day 4: Express Review + Mini Project (REST API)

```
| Activity            | Kahoot | Slides | Demo | Solution | Review |
| ------------------- | ------ | ------ | ---- | -------- | ------ |
| Build a REST API    |        | -      | -    | -        | -      |
| Peer Review / Share |        |        |      |          |        |
```

---

#### Day 5: LAB - Express CRUD API

- Objective: Build a small API for a fictional app (e.g., Book Manager or Pet Tracker)

```
| Topic       | Kahoot | Slides | Demo | Solution | Review |
| ----------- | ------ | ------ | ---- | -------- | ------ |
| CRUD Lab    |        |        |      |          |        |
```

</details>

---

### **Week 3: MongoDB Integration and Full CRUD**

<details><summary>Click to view</summary>

#### Day 1: MongoDB Basics & Atlas Setup

- Pre-Work:

  - [📖 Intro to MongoDB][mongo-intro]
  - [📖 MongoDB Atlas Guide][atlas-guide]

[mongo-intro]: https://www.mongodb.com/docs/manual/introduction/  
[atlas-guide]: https://www.mongodb.com/basics/mongodb-atlas-tutorial

```
| Topic         | Kahoot | Slides | Demo                        | Solution | Review |
| ------------- | ------ | ------ | --------------------------- | -------- | ------ |
| MongoDB Intro |        | -      | - [🧑‍💻][mongo-demo]         | -        | -      |
| Atlas Setup   | [📺][] |        | -                           | -        | -      |
```

[mongo-demo]: https://github.com/Stevenhulse14/node-express-mongodb/tree/main/unit-03-mongodb-intro

---

#### Day 2: Mongoose & Schema Design

- Pre-Work:

  - [📖 Mongoose Docs][mongoose-docs]
  - [📖 Schema Design Basics][schema-design]

[mongoose-docs]: https://mongoosejs.com/docs/index.html  
[schema-design]: https://dev.to/loujaybee/mongoose-schema-design-best-practices-3om3

```
| Topic             | Kahoot | Slides | Demo                          | Solution | Review |
| ----------------- | ------ | ------ | ----------------------------- | -------- | ------ |
| Mongoose Intro    |        | -      | - [🧑‍💻][mongoose-demo]        | -        | -      |
| Schema Creation   | [📺][] |        | -                             | -        | -      |
```

[mongoose-demo]: https://github.com/Stevenhulse14/node-express-mongodb/tree/main/unit-03-mongoose-schema

---

#### Day 3: CRUD with MongoDB

- Pre-Work:

  - [📖 Full CRUD Tutorial][mongo-crud]

[mongo-crud]: https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/mongoose

```
| Topic           | Kahoot | Slides | Demo                         | Solution | Review |
| --------------- | ------ | ------ | ---------------------------- | -------- | ------ |
| Mongo CRUD      |        | -      | - [🧑‍💻][mongo-crud-demo]     | -        | -      |
| Data Validation | [📺][] |        | -                            | -        | -      |
```

[mongo-crud-demo]: https://github.com/Stevenhulse14/node-express-mongodb/tree/main/unit-03-crud-with-mongo

---

#### Day 4: Connecting All Pieces

```
| Activity                      | Kahoot | Slides | Demo | Solution | Review |
| -----------------------------| ------ | ------ | ---- | -------- | ------ |
| Fullstack API (Books, Pets)  |        | -      | -    | -        | -      |
```

---

#### Day 5: LAB - Mongo CRUD App

```
| Topic          | Kahoot | Slides | Demo | Solution | Review |
| -------------- | ------ | ------ | ---- | -------- | ------ |
| MongoDB Lab    |        |        |      |          |        |
```

</details>

---

### **Week 4: Authentication & Sessions**

<details><summary>Click to view</summary>

#### Day 1: Hashing Passwords with Bcrypt

- Pre-Work:

  - [📖 Bcrypt Docs][bcrypt-docs]
  - [📖 Password Security 101][password-security]

[bcrypt-docs]: https://www.npmjs.com/package/bcrypt  
[password-security]: https://cheatsheetseries.owasp.org/cheatsheets/Authentication_Cheat_Sheet.html

```
| Topic         | Kahoot | Slides | Demo                            | Solution | Review |
| ------------- | ------ | ------ | ------------------------------- | -------- | ------ |
| Bcrypt Intro  |        | -      | - [🧑‍💻][bcrypt-demo]           | -        | -      |
```

[bcrypt-demo]: https://github.com/Stevenhulse14/node-express-mongodb/tree/main/unit-04-authentication/bcrypt

---

#### Day 2: Sessions and Cookies

- Pre-Work:

  - [📖 Sessions vs JWT][sessions-vs-jwt]
  - [📖 Express-Session Guide][session-doc]

[sessions-vs-jwt]: https://auth0.com/blog/cookies-vs-tokens-definitive-guide/  
[session-doc]: https://www.npmjs.com/package/express-session

```
| Topic              | Kahoot | Slides | Demo                        | Solution | Review |
| ------------------ | ------ | ------ | --------------------------- | -------- | ------ |
| Session & Cookies  |        | -      | - [🧑‍💻][session-demo]       | -        | -      |
```

[session-demo]: https://github.com/Stevenhulse14/node-express-mongodb/tree/main/unit-04-authentication/session

---

#### Day 3: JWT Authentication

- Pre-Work:

  - [📖 JWT Basics][jwt-doc]
  - [📖 Auth Flow Tutorial][auth-tutorial]

[jwt-doc]: https://jwt.io/introduction  
[auth-tutorial]: https://dev.to/franciscomendes10866/jwt-authentication-in-nodejs-1p96

```
| Topic         | Kahoot | Slides | Demo                      | Solution | Review |
| ------------- | ------ | ------ | ------------------------- | -------- | ------ |
| JWT Auth Flow |        | -      | - [🧑‍💻][jwt-demo]        | -        | -      |
```

[jwt-demo]: https://github.com/Stevenhulse14/node-express-mongodb/tree/main/unit-04-authentication/jwt-auth

---

#### Day 4: Role-Based Access Control

```
| Topic                  | Kahoot | Slides | Demo | Solution | Review |
| ---------------------- | ------ | ------ | ---- | -------- | ------ |
| RBAC Implementation    |        | -      | -    | -        | -      |
| Protecting Endpoints   | [📺][] |        | -    | -        | -      |
```

---

#### Day 5: LAB - Secure Routes

```
| Topic        | Kahoot | Slides | Demo | Solution | Review |
| ------------ | ------ | ------ | ---- | -------- | ------ |
| Auth Lab     |        |        |      |          |        |
```

</details>

---

Let me know if you want me to bundle these into a downloadable `.md` file or HTML page for easier student access!
