# 🛒 E-Commerce Backend API: Build Along Guide

Welcome to your **E-Commerce Backend Build-Along Project**! This guide will walk you through building a secure, modular backend system using **Node.js**, **Express**, **MongoDB**, and more. We're talking **real-world**, **production-level** features — so get ready to LEVEL UP 🧠🚀.

---

## 📚 Technologies Used

| Tech           | Purpose                                                 |
| -------------- | ------------------------------------------------------- |
| **Node.js**    | JavaScript runtime for server-side programming          |
| **Express.js** | Minimalist web framework for Node                       |
| **MongoDB**    | NoSQL database for storing product, cart, and user data |
| **bcrypt**     | Hashing library for securing passwords                  |
| **uuid**       | Generates unique IDs for users and products             |
| **morgan**     | HTTP request logger middleware                          |
| **dotenv**     | Loads environment variables                             |
| **cors**       | Handles Cross-Origin Resource Sharing                   |

> 🧠 Make sure [Node.js](https://nodejs.org/en) and [MongoDB](https://www.mongodb.com/try/download/community) are installed on your system.

---

## 🗂️ Project Structure

We're building this backend using a **modular structure**. This makes your app easier to scale, debug, and maintain. Each component has a responsibility:

```
backend/
│
├── server.js            # 🔌 App entry point
├── config/              # ⚙️ DB & environment config
│   └── db.js
├── routes/              # 🚦 Route files (user, auth, cart, products)
│   └── userRoutes.js
├── controllers/         # 🧠 Controller functions (business logic)
│   └── userController.js
├── middleware/          # 🛡️ Auth & logger middleware
│   └── authMiddleware.js
├── models/              # 🧬 Mongoose models (User, Product, Cart)
│   └── User.js
├── helpers/             # 🛠️ Utility functions
│   └── hashPassword.js
└── .env                 # 🔐 Secret keys & config
```

---

## 📦 Step 1: Initialize Project

### 🔧 What This Step Does

Creates the project directory, initializes npm, and installs necessary dependencies for our server.

### 🛠️ Instructions

1. Create a new project folder and initialize a Node project:
   ```bash
   mkdir ecommerce-backend && cd ecommerce-backend
   npm init -y
   ```
2. Install the dependencies:
   ```bash
   npm install express mongoose bcrypt uuid morgan cors dotenv jsonwebtoken
   ```
3. Install development tools (e.g. nodemon):

   ```bash
   npm install --save-dev nodemon
   ```

4. Update `package.json` to include dev/start scripts:
   ```json
   "scripts": {
     "start": "node server.js",
     "dev": "nodemon server.js"
   }
   ```

> 📖 **Docs:** [npm init](https://docs.npmjs.com/cli/v7/commands/npm-init) | [Express](https://expressjs.com/) | [Mongoose](https://mongoosejs.com/)

---

## 🌐 Step 2: Set Up Express Server

### 🔧 What This Step Does

This sets up your base Express application, connects to MongoDB, and defines middleware for CORS, JSON parsing, and HTTP logging.

### 🛠️ Instructions

1. Create a file called `server.js` at your project root.
2. Add the following code to spin up your Express server:

```js
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
require("dotenv").config();
const connectDB = require("./config/db");

const app = express();
connectDB();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.get("/", (req, res) => res.send("API is running..."));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
```

> 📖 **Docs:** [Express Middleware](https://expressjs.com/en/guide/using-middleware.html) | [Morgan](https://www.npmjs.com/package/morgan)

---

## ⚙️ Step 3: MongoDB Connection

### 🔧 What This Step Does

This connects your app to a local MongoDB database using Mongoose and logs the status.

### 🛠️ Instructions

1. Create a new folder called `config` and inside it, create `db.js`.
2. Add the following connection logic:

```js
const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
  } catch (err) {
    console.error(`❌ Error: ${err.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;
```

3. Create a `.env` file:

```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/ecommerce
JWT_SECRET=yourSuperSecretKey
```

> 📖 **Docs:** [Mongoose](https://mongoosejs.com/docs/connections.html) | [dotenv](https://www.npmjs.com/package/dotenv)

---

## 👤 Step 4: Create User Model

### 🔧 What This Step Does

Defines the schema for storing user data in MongoDB.

### 🛠️ Instructions

1. Create a folder called `models` and inside it, a file called `User.js`
2. Add the following schema:

```js
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
```

> 📖 [Mongoose Schema Docs](https://mongoosejs.com/docs/guide.html)

---

## 🔐 Step 5: Password Hashing Helpers

### 🔧 What This Step Does

Creates utility functions for hashing and verifying passwords using bcrypt.

### 🛠️ Instructions

1. Create a folder called `helpers` and inside it, a file `hashPassword.js`
2. Add the following functions:

```js
const bcrypt = require("bcrypt");

const hashPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
};

const comparePassword = async (entered, hashed) => {
  return await bcrypt.compare(entered, hashed);
};

module.exports = { hashPassword, comparePassword };
```

> 📖 [bcrypt Docs](https://www.npmjs.com/package/bcrypt)

---

## 🛡️ Step 6: Auth Middleware

### 🔧 What This Step Does

Creates middleware to check for a valid JWT token and protect private routes.

### 🛠️ Instructions

1. Create a `middleware` folder with a file `authMiddleware.js`
2. Add this JWT logic:

```js
const jwt = require("jsonwebtoken");

const protect = (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = decoded;
      next();
    } catch (err) {
      res.status(401).json({ message: "Not authorized" });
    }
  } else {
    res.status(401).json({ message: "No token found" });
  }
};

module.exports = { protect };
```

> 📖 [jsonwebtoken Docs](https://www.npmjs.com/package/jsonwebtoken)

---

## 🔄 Step 7: Register & Login Controller

### 🔧 What This Step Does

In this step, you'll implement two critical features of your e-commerce backend: **user registration** and **user login**. Both will include the use of secure password handling via **bcrypt**, and we'll generate **JSON Web Tokens (JWT)** so users can authenticate and stay logged in.

### 🛠️ Instructions

#### 1. Create a controller file

Create a new folder if you haven't already:

```bash
mkdir controllers
```

Inside it, create the user controller:

```bash
touch controllers/userController.js
```

#### 2. Understanding the dependencies

In the `userController.js` file, we’ll use the following:

- `User` (Mongoose model) to interact with the database
- `jwt` to create tokens for authentication
- `hashPassword` and `comparePassword` from our helpers

#### 3. Write the controller logic

Paste in the following code:

```js
const User = require("../models/User");
const jwt = require("jsonwebtoken");
const { hashPassword, comparePassword } = require("../helpers/hashPassword");

// POST /api/users/register
const register = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // Check if email already exists
    const existing = await User.findOne({ email });
    if (existing)
      return res.status(400).json({ message: "Email already registered" });

    // Hash password
    const hashed = await hashPassword(password);

    // Create new user
    const user = await User.create({ username, email, password: hashed });

    res.status(201).json({ message: "User registered", user });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

// POST /api/users/login
const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find user by email
    const user = await User.findOne({ email });
    if (!user) return res.status(401).json({ message: "Invalid credentials" });

    // Compare passwords
    const match = await comparePassword(password, user.password);
    if (!match) return res.status(401).json({ message: "Invalid credentials" });

    // Create JWT
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });

    res.json({
      token,
      user: { id: user._id, username: user.username, email: user.email },
    });
  } catch (err) {
    res.status(500).json({ message: "Login failed", error: err.message });
  }
};

module.exports = { register, login };
```

### 🔍 Explanation

- 🔐 **Register:**

  - Checks if the email already exists.
  - Hashes the password using bcrypt.
  - Creates a new user and returns a success response.

- 🔐 **Login:**
  - Verifies if the email exists and password is valid.
  - If valid, creates a JWT token that expires in 1 day.
  - Sends the token and user info back to the client.

> 💡 Make sure you’re using `express.json()` middleware so the `req.body` can be parsed. We did this in Step 2.

### ✅ Test Your Routes

Use [Postman](https://www.postman.com/) or [Thunder Client](https://www.thunderclient.com/) to test these endpoints:

- `POST /api/users/register`
- `POST /api/users/login`

Send a `Content-Type: application/json` header and a body like:

```json
{
  "username": "JohnDoe",
  "email": "john@example.com",
  "password": "secure123"
}
```

> 📖 **Helpful Docs:**
>
> - [bcrypt](https://www.npmjs.com/package/bcrypt)
> - [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)
> - [JWT.IO Debugger](https://jwt.io/)

---

## 🚦 Step 8: User Routes

### 🔧 What This Step Does

Exposes HTTP POST endpoints to register and login a user.

### 🛠️ Instructions

1. Create a folder `routes` with file `userRoutes.js`
2. Add this:

```js
const express = require("express");
const { register, login } = require("../controllers/userController");
const router = express.Router();

router.post("/register", register);
router.post("/login", login);

module.exports = router;
```

3. In `server.js`, include the routes:

```js
const userRoutes = require("./routes/userRoutes");
app.use("/api/users", userRoutes);
```

> 📖 [Express Router Docs](https://expressjs.com/en/guide/routing.html)

---

## 🧰 Your Next Mission 💥

You're now ready to build out advanced features that turn a simple backend into a fully functional e-commerce engine. Let's not just list the features — let’s **understand how they fit together** in your application and **why** they matter.

### 🛍️ Build Product Model & CRUD Routes

#### Why It Matters:

Products are the backbone of any e-commerce system. You'll need the ability to add, update, list, and delete products from your inventory. This step is where your backend starts resembling a real online store.

Every product should have attributes like name, price, stock, and category. CRUD operations let admin users manage inventory, and regular users fetch product data for display.

#### Objective:

Allow users to view, create, update, and delete products in the database.

#### Steps:

1. **Create a model** in `models/Product.js`:

```js
const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: String,
    price: { type: Number, required: true },
    category: String,
    stock: Number,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);
```

2. **Create a controller** in `controllers/productController.js` with the following functions:

   - `createProduct`
   - `getAllProducts`
   - `getProductById`
   - `updateProduct`
   - `deleteProduct`

3. **Create routes** in `routes/productRoutes.js` and wire them to your `productController` functions.

4. **Mount route** in `server.js` using:

```js
const productRoutes = require("./routes/productRoutes");
app.use("/api/products", productRoutes);
```

> 📖 [Mongoose CRUD](https://mongoosejs.com/docs/models.html)

---

### 🛒 Build Cart System (One Cart Per User)

#### Why It Matters:

The cart system lets users store selected products before checking out. It's dynamic — users should be able to add/remove items, update quantities, and persist that data until purchase.

Every time a user adds a product to the cart, your backend should check if the item is already in the cart. If so, increase the quantity; otherwise, add it. One cart per user makes retrieval and tracking much easier, and it ties into future features like order processing.

#### Objective:

Each user can have one active cart with multiple products and quantities.

#### Steps:

1. **Create a model** in `models/Cart.js`:

```js
const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    items: [
      {
        product: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
        quantity: { type: Number, default: 1 },
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Cart", cartSchema);
```

2. **Create a controller** `cartController.js` with functions like:

   - `getUserCart`
   - `addToCart`
   - `removeFromCart`
   - `updateCartItem`

3. **Set up routes** in `routes/cartRoutes.js`, and secure them with `protect` middleware.

> 📖 [Populate Mongoose References](https://mongoosejs.com/docs/populate.html)

---

### 🧑‍💼 Add User Roles (e.g. Admin)

#### Why It Matters:

In a real e-commerce app, not everyone should have access to all routes. Admins might need to add or remove products, manage inventory, or view all orders. Role-based access ensures regular users cannot modify sensitive data.

By storing a role field in the user model and creating middleware that checks for `admin` status, you allow privileged access where necessary. This is also a building block for creating a full admin panel later.

#### Objective:

Allow certain users to manage products, view all orders, etc.

#### Steps:

1. Update the `User.js` model:

```js
role: { type: String, enum: ['user', 'admin'], default: 'user' }
```

2. Create an `adminMiddleware.js`:

```js
const admin = (req, res, next) => {
  if (req.user && req.user.role === "admin") next();
  else res.status(403).json({ message: "Admin access only" });
};
module.exports = { admin };
```

3. Use both `protect` and `admin` middleware in admin routes.

> 📖 [Express Role-Based Access](https://developer.okta.com/blog/2018/07/12/role-based-access-control)

---

### ✅ Secure Routes with Protect Middleware

#### Why It Matters:

Authentication keeps user data secure. Without it, anyone could modify someone else's cart or access protected resources. By securing routes with the `protect` middleware you wrote in Step 6, you ensure users can only access resources with a valid JWT token.

Apply this middleware to any route that reads/writes sensitive user data, such as:

- Viewing or modifying the cart
- Placing an order
- Updating profile info

In the future, you can also chain this with `admin` middleware to require multiple levels of access.

Any route that modifies data (like adding to a cart) should be secured with the `protect` middleware:

```js
const { protect } = require("../middleware/authMiddleware");
router.post("/add", protect, addToCart);
```

This ensures only authenticated users can access these features.

---

### 📊 Add Data Validation (with express-validator or Joi)

#### Why It Matters:

Imagine registering a user with no email, or adding a product with a negative price — validation prevents bad data from entering your system.

Use libraries like [express-validator](https://express-validator.github.io/docs/) or [Joi](https://joi.dev/) to check request bodies before hitting your controller logic. It’s a layer of safety for both users and developers.

Validation is often added directly to route declarations, using an array of rules to ensure fields meet expected patterns, types, or required presence.

1. Install a validation library:

```bash
npm install express-validator
```

2. Add validation middleware to your routes:

```js
const { body, validationResult } = require("express-validator");

router.post(
  "/register",
  [body("email").isEmail(), body("password").isLength({ min: 6 })],
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(400).json({ errors: errors.array() });
    next();
  },
  register
);
```

> 📖 [Express Validator Docs](https://express-validator.github.io/docs/)

---

## 📘 Documentation References

- [Express Docs](https://expressjs.com/)
- [MongoDB Mongoose Docs](https://mongoosejs.com/docs/)
- [bcrypt](https://www.npmjs.com/package/bcrypt)
- [uuid](https://www.npmjs.com/package/uuid)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [morgan](https://www.npmjs.com/package/morgan)
- [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)

---

## 🎯 Final Tips

✅ Modularize your logic into **controllers**, **routes**, **middleware**, and **helpers**.

📂 Keep your file structure clean for long-term scalability.

🧠 Test each route using **Postman** or **Thunder Client**.

💬 Leave helpful console logs or comments — it’s for future you!

---

## 💬 Want to Go Even Further?

- Add email verification
- Stripe or PayPal integration
- Admin-only access to modify products
- Rate limiting & error logging

> 📢 **This README is just the start. Expand it, break it, rebuild it. That’s how you grow.**

Happy Coding! 🚀

— _Built with ❤️ by [YourName]_
