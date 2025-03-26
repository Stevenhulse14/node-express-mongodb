const express = require("express");
const logger = require("morgan");
const path = require("path");

const app = express();

const PORT = 8000;

//--  Middleware -------------------------------------

app.use(logger("dev"));
// Body parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// configure my views for ejs
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// setting up static folder
app.use(express.static(path.join(__dirname, "public")));

/// --------------------------------------------------

//--  Routes -----------------------------------------

app.use("/api", require("./api"));

//----------------------------------------------------
app.get("/", (req, res) => {
  //res.send("Hello World");
  res.render("home", {});
});

app.listen(PORT, () => {
  console.log(`Server is listing on PORT ${PORT}`);
});
