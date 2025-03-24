const bcrypt = require("bcrypt");
const generateToken = require("../util/generateToken");
const users = require("../data/user-data");
const { v4: uuid } = require("uuid");

const signup = async (req, res) => {
  try {
    const { username, password } = req.body;

    const existingUser = users.find((user) => user.username === username);

    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = {
      id: uuid(),
      username,
      password: hashedPassword,
    };

    users.push(newUser);
    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = users.find((user) => user.username === username);

    if (!user) {
      return res.status(400).json({ message: "Invalid username or password" });
    }

    const validPassword = await bcrypt.compare(password, user.password);

    if (!validPassword) {
      return res.status(400).json({ message: "Invalid username or password" });
    } else {
      const token = generateToken(user);
      res.status(200).json({ message: "Login successful", token });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const usersList = (req, res) => {
  res.status(200).json(users);
};

module.exports = { signup, login, usersList };
