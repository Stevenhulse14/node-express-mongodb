const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = 3000;

const server = http.createServer((req, res) => {
  let filePath = "./pages" + req.url;
  if (req.url === "/") {
    filePath = "./pages/index.html";
  } else if (req.url === "/projects") {
    filePath = "./pages/projects.html";
  }

  // Serve Static Files (CSS, Images)
  if (req.url.startsWith("/public/")) {
    const staticFile = `.${req.url}`;
    const stream = fs.createReadStream(staticFile);

    stream.on("open", () => {
      res.writeHead(200);
      stream.pipe(res);
    });

    stream.on("error", () => {
      res.writeHead(404);
      res.end("404: File not found.");
    });
    return;
  }

  // Read and Serve HTML Pages
  fs.readFile(filePath, (err, data) => {
    if (err) {
      fs.readFile("./pages/404.html", (error, errorData) => {
        res.writeHead(404, { "Content-Type": "text/html" });
        res.end(errorData);
      });
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(data);
    }
  });
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
