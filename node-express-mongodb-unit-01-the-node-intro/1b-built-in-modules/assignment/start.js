// Your code here. Built in Modules

const fs = require("fs"); // import the fs lib
const path = require("path"); // imports the path lib

const directroyPath = __dirname; // gives us the current directory that we are in

console.log(directroyPath);

// read all the directories in that location and
fs.readdir(directroyPath, (err, files) => {
  if (err) {
    return console.error("Error Reading Directoys", err);
  }

  let directories = [];
  let fileList = [];

  //console.log(files);

  // hey loop over these piece of data and determine if it is a directory or file.
  // works on the original dataset [ 'prog.js', 'readme.md', 'start.js' ]
  //files.map(); // [ 'prog.js', 'readme.md', 'start.js' ] = > [ 'prog.js', 'readme.md', 'start.js' ]
  files.forEach((file) => {
    const filePath = path.join(directroyPath, file);
    const stats = fs.statSync(filePath);

    //console.log(stats.isDirectory());

    if (stats.isDirectory()) {
      directories.push(file);
    } else {
      fileList.push(file);
    }

    directories.sort();
    // console.log(
    //   "Dir : ",
    //   directories,
    //   "dirList",
    //   newDirList,
    //   "files : ",
    //   fileList
    // );

    // const str = "test.js";
    // console.log("Split :", str.split(".")[1]);

    fileList.sort((a, b) => {
      const extA = path.extname(a).toLowerCase();
      const extB = path.extname(b).toLowerCase();

      return extA.localeCompare(extB) || a.localeCompare(b);
    });
  });
  // Print sorted directories
  console.log("Directories:");
  directories.forEach((dir) => console.log(dir));

  // Print sorted files
  console.log("\nFiles:");
  fileList.forEach((file) => console.log(file));
});
