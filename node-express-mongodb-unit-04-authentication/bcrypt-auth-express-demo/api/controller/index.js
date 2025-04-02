const bcrypt = require("bcrypt");
// import the model
const users = require("../../models/users");

const signUp = async (req, res) => {
  const { username, password } = req.body;

  try {
    const userExist = await users.findOne({ username });

    if (userExist)
      res.status(400).json({
        message: "User already Exists ",
      });

    // ecrypt our password generate our salt rounds
    const salt = 10;
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = new users({ username, password: hashedPassword });
    await user.save();

    res.json({
      message: " User Registered Successfully",
      hashedPassword,
    });
  } catch (error) {
    console.error(error);
  }
};

const login = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await users.findOne({ username });
    if (!user)
      return res.status(401).json({
        message: "Invalid username and password !",
      });

    // compare the password the user entered
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch)
      return res.status(401).json({
        message: "Invalid username or password !",
      });

    res.status(200).json({ message: "logged in successfully" });
  } catch (error) {
    console.error(error);
  }
};

module.exports = { signUp, login };
