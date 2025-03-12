const express = require("express");

const app = express();

const PORT = 3000;
// path and a callback function
app.get("/", (req, res) => {
  res.send(`<h2 style="color: red ;">Hello World</h2>`);
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
