let cats = require("./cats");
const { readCats } = require("./helper");
const bodyParser = require("body-parser");

const express = require("express");
const app = express();
const PORT = 3000;

app.use(bodyParser());

app.get("/", (req, res) => {
  res.send(`<h1> Welcome to my First API</h1>`);
});
// if your using the readCats function make this a async function and use await
app.get("/cats", async (req, res) => {
  //const str = await readCats();
  //console.log(str.split("=")[1].split(";")[0]);
  res.send(cats);
});

// update request

// fix the update route to work with arrays
app.put("/cats/:id", (req, res) => {
  // this is how we will get the number the # is the key
  const catId = parseInt(req.params.id);
  console.log(catId);
  const updatedCats = req.body;
  console.log(" updatedCat", updatedCats);

  const catIndex = cats.findIndex((cat) => cat.id === catId);

  if (catIndex !== -1) {
    cats[catIndex] = { ...cats[catIndex], ...updatedCats };
    res.json({
      message: "Cat updated successfully",
      cat: cats,
    });
  } else {
    res.status(404).json({ message: " cat not found !" });
  }
});

// configure your POST and DELETE ROUTES !
// make sure your order is corrent because order matters

// delete request

app.listen(PORT, () => {
  console.log(`Server running at localhost:${PORT}`);
});
// CRUD activities
