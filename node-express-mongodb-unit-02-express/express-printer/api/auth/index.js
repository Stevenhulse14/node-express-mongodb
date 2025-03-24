const router = require("express").Router();
require("dotenv").config();
const { signup, login, usersList } = require("../../controller/authController");

// see all users for api testing purposes
router.get("/users", usersList);

router.post("/login", login);

router.post("/signup", signup);

module.exports = router;
