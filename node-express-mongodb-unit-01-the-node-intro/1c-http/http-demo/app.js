// using buildin modules
const http = require("http");
// Selecting port
const PORT = 3000;

// creating a serving and spitting out data.
const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("<h6>Hello World</h6>");
});

// starting serving listen on that specific port.
server.listen(PORT, () => {
  console.log(` Server is running at localhost:${PORT}`);
});
