````markdown
# 🧪 REST API Exercises with Express, dotenv, and MongoDB

Welcome! These projects are designed to help you practice building REST APIs using **Express**, **dotenv**, and **MongoDB**. Each project includes detailed instructions and expandable hint sections for guidance.

---

## 📁 Project 1: Book Tracker API

Create an API that allows users to **track books they’re reading**, with details like title, author, and reading status.

### 📌 Features:

- Create a new book
- Get all books
- Get a single book
- Update book details
- Delete a book

### 🔧 Instructions:

1. Set up your project with:
   ```bash
   npm init -y
   npm install express mongoose dotenv
   ```
````

2. Create a `.env` file with your MongoDB URI:
   ```
   MONGO_URI=mongodb://localhost:27017/booktracker
   PORT=5000
   ```
3. Connect to MongoDB using `mongoose.connect()`
4. Build a `Book` model with fields:

   - title (String)
   - author (String)
   - status (enum: "reading", "completed", "on-hold")

5. Set up the following routes in `routes/bookRoutes.js`:
   - `GET /api/books`
   - `GET /api/books/:id`
   - `POST /api/books`
   - `PUT /api/books/:id`
   - `DELETE /api/books/:id`

<details>
<summary>💡 Helpful Hint: Mongoose Model Example</summary>

```js
const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: String,
  status: {
    type: String,
    enum: ["reading", "completed", "on-hold"],
    default: "reading",
  },
});
```

</details>

---

## 🍔 Project 2: Meal Planner API

Build an API to **track meal plans** for specific days. Users can add meals by day, update them, or remove them.

### 📌 Features:

- Add a meal to a date
- View all meals
- View meals by date
- Update a meal
- Delete a meal

### 🔧 Instructions:

1. Create a new project with:
   ```bash
   npm init -y
   npm install express mongoose dotenv
   ```
2. `.env` file:
   ```
   MONGO_URI=mongodb://localhost:27017/mealplanner
   PORT=5001
   ```
3. Create a `Meal` model:

   - date (Date)
   - name (String)
   - calories (Number)
   - type (enum: "breakfast", "lunch", "dinner", "snack")

4. RESTful routes:
   - `GET /api/meals`
   - `GET /api/meals/date/:date`
   - `POST /api/meals`
   - `PUT /api/meals/:id`
   - `DELETE /api/meals/:id`

<details>
<summary>💡 Helpful Hint: Filter Meals by Date</summary>

Use this Mongoose query to find meals on a specific day:

```js
const meals = await Meal.find({ date: { $gte: startOfDay, $lt: endOfDay } });
```

Use `new Date(dateString)` and manipulate with `setHours(0,0,0)` to define start and end.

</details>

---

## 🧍 Project 3: Simple User Management API

Create a user directory with the ability to **create**, **retrieve**, **update**, and **delete** user data.

### 📌 Features:

- Add a user
- Get all users
- Get one user by ID
- Update user info
- Delete a user

### 🔧 Instructions:

1. Project setup:
   ```bash
   npm init -y
   npm install express mongoose dotenv
   ```
2. `.env` config:
   ```
   MONGO_URI=mongodb://localhost:27017/usermanager
   PORT=5002
   ```
3. Create a `User` model with fields:

   - name (String, required)
   - email (String, required, unique)
   - role (String: "admin", "user", "guest")

4. Routes to implement:
   - `GET /api/users`
   - `GET /api/users/:id`
   - `POST /api/users`
   - `PUT /api/users/:id`
   - `DELETE /api/users/:id`

<details>
<summary>💡 Helpful Hint: Handling Duplicate Emails</summary>

Use a `try/catch` block on POST. If a user exists with the same email, return:

```js
res.status(400).json({ error: "Email already exists" });
```

Also add `{ unique: true }` to the email field in your schema.

</details>

---

## 🧠 Tips for All Projects

<details>
<summary>💡 Enable CORS if testing in browser</summary>

```bash
npm install cors
```

In your server file:

```js
const cors = require("cors");
app.use(cors());
```

</details>

<details>
<summary>💡 Use Postman or Thunder Client to test your routes</summary>

Use the `POST`, `GET`, `PUT`, `DELETE` methods and headers like:

```json
Content-Type: application/json
```

</details>

<details>
<summary>💡 Basic File Structure</summary>

```
project-name/
│
├── models/
│   └── YourModel.js
├── routes/
│   └── yourRoutes.js
├── .env
├── server.js
├── package.json
```

</details>

Happy building! 🚀

```

---
```
