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

| Topic                   | Kahoot | Slides | Demo                | Solution             | Review |
| ----------------------- | ------ | ------ | ------------------- | -------------------- | ------ | --- |
| Node Env                |        | -      | - [🧑‍💻][node-demo]   | -                    | -      | -   |
| Node Installation       | [📺][] |        | -                   | -                    | -      |
| Running Node            | [📺][] |        | -                   | - [👾][running-node] | -      |
| Introduction to Modules | [📺][] |        | - [🧑‍💻][module-demo] | -                    | -      |

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

| Topic             | Kahoot | Slides | Demo                     | Solution | Review |
| ----------------- | ------ | ------ | ------------------------ | -------- | ------ | --- |
| Tic-Tac-Toe       |        | -      | - [🧑‍💻][tic-tac-toe-demo] | -        | -      | -   |
| Built in Modules  | [📺][] |        | -                        | -        | -      |
| Fs / OS Library   | [📺][] |        | -                        | -        | -      |
| HTTP Introduction | [📺][] |        | -                        | -        | -      |

[//]: # " Paste in table above >> [🧑‍💻][tic-tac-toe-demo] "
[tic-tac-toe-demo]: https://github.com/Stevenhulse14/node-express-mongodb/tree/main/tic-tac-toe-solution

#### Day 3: HTTP

- Pre-Work:

  - [📖 HTTP module ][http-modules]
  - [📖 Express Introduction ][express-doc]

[http-modules]: https://nodejs.org/api/http.html
[express-doc]: https://expressjs.com/

| Topic             | Kahoot | Slides | Demo | Solution | Review |
| ----------------- | ------ | ------ | ---- | -------- | ------ | --- |
| Tic-Tac-Toe       |        | -      | -    | -        | -      | -   |
| Built in Modules  | [📺][] |        | -    | -        | -      |
| Fs / OS Library   | [📺][] |        | -    | -        | -      |
| HTTP Introduction | [📺][] |        | -    | -        | -      |

#### Day 4: Express Demo

- Pre-Work:

  - [📖 Express Demo ][express-deep-dive]
  - [📖 Express Demo Web Dev Simplified ][35-min-video]

[express-deep-dive]: https://www.youtube.com/watch?v=Oe421EPjeBE&t=18185s&ab_channel=freeCodeCamp.org
[35-min-video]: https://www.youtube.com/watch?v=SccSCuHhOw0&ab_channel=WebDevSimplified

| Topic        | Kahoot | Slides | Demo | Solution | Review |
| ------------ | ------ | ------ | ---- | -------- | ------ | --- |
| Express Demo |        | -      | -    | -        | -      | -   |
|              | [📺][] |        | -    | -        | -      |
|              | [📺][] |        | -    | -        | -      |
|              | [📺][] |        | -    | -        | -      |

#### Day 5: HTTP/Express LAB

- Pre-Work:

| Topic | Kahoot | Slides | Demo | Solution | Review |
| ----- | ------ | ------ | ---- | -------- | ------ | --- |
|       |        | -      | -    | -        | -      | -   |
|       | [📺][] |        | -    | -        | -      |
|       | [📺][] |        | -    | -        | -      |
|       | [📺][] |        | -    | -        | -      |

</details>
