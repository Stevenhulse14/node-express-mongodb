/*
    1. Use require() to import the os module
*/
const os = require("os"); // Operating System

/*
    4. Use require() to import the fs module
*/
const fs = require("fs"); // File System

/*
    11. Use require() to import the path module
*/
const path = require("path"); // Path module

/*
    2. Check for the type of operating system
*/
console.log(`Operating System: ${os.type()}`);

/*
    3. Check for the amount of free memory (in bytes)
*/
console.log(`Memory Available (bytes): ${os.freemem()}`);

/*
    5. Read the .txt files
*/
const data = fs.readFileSync("./data.txt", "utf8");
const data2 = fs.readFileSync("./data2.txt", "utf8");

/*
    6. Create a new file, use the .txt files as content
*/
fs.writeFileSync(
  "new-file.txt", // name of the new file
  `${data} ${data2}` // content of the new file
);

/*
    7. Read the new file to see if it works
*/
const joinedData = fs.readFileSync("./new-file.txt", "utf8");
console.log(`joined data: ${joinedData}`);

/*
    8. Leave a console log to demonstrate asynchronous timing
*/
console.log("Before Async processing");

/*
    9. Read data.txt and respond with it
*/
fs.readFile("./data.txt", "utf8", function (err, result) {
  // 9a. just in case the file isn't there:
  if (err) {
    console.log(err);
    return err;
    // 9b. If the file IS there:
  } else {
    console.log(`asynchronous reading of data.txt: ${result}`);
  }
}); // end of reading data.txt

/*
    10. Leave another console log to demonstrate asynchronous timing
*/
console.log("After Async processing");

/*
    12. Gather the relative file path of test.js
*/
const filePath = path.join("path-folder", "test.js"); // => path-folder/test.js
console.log(`File path to test.js file: ${filePath}`);

/*
    13. Get the base file name from filePath
*/
const base = path.basename(filePath); // => test.js
console.log(`Base file name: ${base}`);

/*
    14. Check the absolute file path of this file
*/
console.log("directory this file is in: " + __dirname); // => /Users/abbreviatedman/Documents/noble/nem/node-express-mongodb-unit-01-node-intro/1b-built-in modules

// Let's add another intriguing tool that builds on top of readFile: readdir. It reads the contents of a directory, and passes into its callback an array of all the file names in that directory.

// We'll combine it with `__dirname` to read the current directory, and then we'll print out the array of file names.

/*
    15. Read from the current directory and list all files in it.
*/

fs.readdir(__dirname, function (err, files) {
  if (err) {
    console.log(err);
    return err;
  } else {
    console.log("Files in this directory: ");
    console.log(files);
  }
});

// Since that's an array, we can use forEach to iterate through it and print out each file name.

/*
    16. Use forEach to iterate through the files array.
*/

fs.readdir(__dirname, function (err, files) {
  if (err) {
    console.log(err);
    return err;
  } else {
    console.log("Files in this directory: ");
    files.forEach(function (file) {
      console.log(file);
    });
  }
});
