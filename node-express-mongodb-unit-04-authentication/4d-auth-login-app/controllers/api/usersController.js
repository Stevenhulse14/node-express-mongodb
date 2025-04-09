// importing our user model
const User = require("../../models/User");
//importing bcrypt that how we encrypt the password when we add to the db.
const bcrypt = require("bcrypt");

async function createUser(userData) {
  try {
    // Generate a salt
    const salt = await bcrypt.genSalt(10);

    // Encrypt the user password
    const encryptedPassword = await bcrypt.hash(userData.password, salt);

    // Generate the user document
    const newUserData = {
      username: userData.username,
      password: encryptedPassword,
      favoritePokemon: [],
    };

    // Insert the document into the User collection
    const newUser = await User.create(newUserData);

    // Return the value.
    return newUser;
  } catch (error) {
    throw error;
  }
}
async function logInUser(req, res) {
  try {
    // findOne User that matches the username from the sign in form
    const user = await User.findOne({ username: req.body.username });

    // If no user, throw error. Otherwise, compare passwords
    if (!user) {
      throw "User not found, please sign up";
    } else {
      // bcrypt compares the incoming password with the database password
      const comparedPassword = await bcrypt.compare(
        req.body.password,
        user.password
      );

      // If the password is incorrect, throw an error. Otherwise, begin server session
      if (!comparedPassword) {
        throw "Please check your password and try again";
      } else {
        // Give the server login authority
        req.session.isAuth = true;

        // Generate user object to attach to the server-side session
        const userObj = {
          username: user.username,
          id: user._id,
        };

        // Server-side session holds info about the user
        req.session.user = userObj;

        // This route can only be seen if req.session.isAuth is set to true
        res.redirect("/user");
      } // end of "password compare" actions
    } // end of "user found" actions
  } catch (err) {
    // server-side
    console.log(`logInUser error: ${err}`);

    // client-side
    res.json({
      message: "failure",
      payload: `logInUser error: ${err}`,
    });
  }
}

module.exports = {
  createUser,
  logInUser,
};
