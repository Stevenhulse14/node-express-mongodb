const User = require("../../models/User");
const Pokemon = require("../../models/Pokemon");

async function renderUserPage(req, res) {
  try {
    // Check the server to see if the client has permission to see this page
    if (req.session.isAuth) {
      const currentUser = await User.findById(req.session.user.id);

      // Find all pokemon on this user's favorite list
      const pokenameList = [];

      for (const i = 0; i < currentUser.favoritePokemon.length; i++) {
        const onePokemon = await Pokemon.findById(
          currentUser.favoritePokemon[i]
        );
        pokenameList.push(onePokemon.name);
      }

      res.render("user", { user: currentUser, favoritePokemon: pokenameList });
    } else {
      res.redirect("/logIn");
    }
  } catch (error) {
    console.log(`renderUserPage error: ${error}`);
  }
}

module.exports = { renderUserPage };
