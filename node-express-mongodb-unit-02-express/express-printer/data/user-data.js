const { v4: uuidv4 } = require("uuid");

const users = [
  { id: uuidv4(), username: "Admar", password: "admin123", role: "admin" },
  { id: uuidv4(), username: "Steven", password: "user123", role: "user" },
];

module.exports = users;
