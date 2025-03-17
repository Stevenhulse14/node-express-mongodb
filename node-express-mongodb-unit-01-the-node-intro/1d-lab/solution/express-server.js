const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, "public")));

// Routes for different pages
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "pages", "index.html"));
});

app.get("/projects", (req, res) => {
  res.sendFile(path.join(__dirname, "pages", "projects.html"));
});

// 404 Route (Catch-All)
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, "pages", "404.html"));
});

// Start Server
app.listen(PORT, () => {
  console.log(`Express server running at http://localhost:${PORT}`);
});
