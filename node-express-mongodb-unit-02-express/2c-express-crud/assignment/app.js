const { ingredients } = require("./data/index");

// configure our server

const express = require("express");
const app = express();
const PORT = 8080;
// import morgan
const morgan = require("morgan");
// configure our middleware
// is going to allow us to read incoming json data
app.use(express.json());
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.send("<h1> Hello World ! </h1>");
});

app.get("/ingredients", (req, res) => {
  res.status(200).send(ingredients);
});

app.get("/ingredients/:name", (req, res) => {
  const item = req.params.name;
  res.status(200).send(ingredients[item]);
});

app.post("/ingredients/:type", (req, res) => {
  const type = req.params.type.toLowerCase();
  const ingredient = req.body.drinks;
  console.log(ingredient, type);

  if (!ingredient || typeof ingredient !== "object") {
    return res.status(400).json({
      error: " Invalid ingredient format ",
    });
  }
  if (ingredients[type]) {
    res.status(400).send({ message: "Item already exists" });
  } else {
    // add it
    ingredients[type] = ingredient;
    // and confirm that you added it
    res.status(201).send({
      message: "successfully added new object to data !",
      data: ingredients,
    });
  }
});

// update an item

app.put("/ingredients/:type", (req, res) => {
  // get the params
  const type = req.params.type;
  // get the body Array.isArray()
  const newIngredient = req.body; // === const newIngredient = req.body.newIngredients

  if (!Array.isArray(req.body[type])) {
    return res.status(400).send({
      message: " Invalid Data Format",
    });
  }

  if (ingredients[type]) {
    // if it does i want to update it
    ingredients[type] = newIngredient[type];
    res.status(201).send({
      message: `updated ${type} ingredients`,
      ingredients: ingredients,
    });
  } else {
    res.status(404).send({
      message: " Ingredient type not found ",
    });
  }
});

// type === string
// ingredients[type] = cheese: [
//     "cheddar",
//     "swiss",
//     "provolone",
//     "mozzarella",
//     "pepper jack",
//     "Muenster",
//   ],

app.delete("/ingredients/:type/:ingredient", (req, res) => {
  const type = req.params.type.toLowerCase();
  const ingredient = req.params.ingredient.toLowerCase();

  if (ingredients[type]) {
    const index = ingredients[type].findIndex(
      (i) => i.toLowerCase() === ingredient
    );

    // ! <--- a bang operator
    // !== <--- doesn't equal just like === is equal
    if (index !== -1) {
      ingredients[type].splice(index, 1);
      res.json({
        message: `Deleted ${ingredient} from ${type} `,
        ingredients,
      });
    } else {
      res.status(404).json({ error: " your item wasn't found !" });
    }
  } else {
    res.status(404).json({
      error: " Ingredient type was not found ! ",
    });
  }
});

app.all("*", (req, res) => {
  res.status(404).send({
    message: " Its your fault no page was found ! ",
  });
});

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT} ! ingredients`);
});
