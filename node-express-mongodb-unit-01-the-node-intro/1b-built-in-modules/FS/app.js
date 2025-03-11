const fs = require("fs");
// takes two parameters first : the name if the file, encoding: "utf8"
// reads file synchronously
const data = fs.readFileSync("../data.txt", "utf8");

//console.log(fs);

// read a file asynchronously

fs.readFile("../data2.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
  }
  console.log(data);
});

// writes to a file synchronously
fs.writeFileSync("../data.txt", "Hello World !");

fs.writeFile("../data2.txt", "", (err, data) => {
  if (err) {
    console.log(err); // throw err
  }

  console.log(" added text to data2.txt");
});

const str = "Steven is adding next string to this file";

fs.appendFile("../data2.txt", str, (err) => {
  if (err) {
    throw err;
  }
  console.log("hey added data!");
});
