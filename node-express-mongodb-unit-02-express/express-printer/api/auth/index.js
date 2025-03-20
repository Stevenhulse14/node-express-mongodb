const router = require("express").Router();
const jwt = require("jsonwebtoken");
require("dotenv").config();

const secretkey = process.env.SECRETKEY;

const users = [
  { id: 1, username: "Admar", password: "admin123", role: "admin" },
  { id: 2, username: "Steven", password: "user123", role: "user" },
];

router.post("/login", (req, res) => {
  console.log(" AM I HERE ");
  const { password, usersName } = req.body;

  const user = users.find(
    (u) => u.username == usersName && u.password === password
  );

  if (!user) {
    return res.status(404).json({
      message: " Invalid Credentials",
    });
  }

  const token = jwt.sign({ id: user.id, role: user.role }, secretkey, {
    expiresIn: "1h",
  });

  res.json({ token });
});

module.exports = router;
