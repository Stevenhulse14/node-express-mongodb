const router = require("express").Router();
const {
  createUser,
  logInUser,
} = require("../../controllers/api/usersController");

// localhost:3000/api/users
router.post("/", async (req, res) => {
  try {
    const user = await createUser(req.body);
    res.json({
      message: "success",
      payload: user,
    });
  } catch (error) {
    console.log(error);
    res.json({ message: "failure", payload: error });
  }
});

//localhost:3000/api/users/log-in-user
//logInUser
// /logInUser
router.post("/log-in-user", logInUser);
module.exports = router;
