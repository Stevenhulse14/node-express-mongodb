# File Listing and Sorting Assignment

### General Goal

The primary goal of this assignment is to create a Node.js script that lists all files in a specified directory, ensuring that directories are listed first, followed by files.

### Bonus Goal

As an additional challenge, sort the files by their extensions and list them in order after the directories.

### Setup

1. **Modules Required**: You need to require the `fs` (File System) and `path` modules.

2. **Tools to Use**: This assignment will make use of:
   - `require`
   - `path.join`
   - `__dirname`
   - `fs.readdir`
   - `console.log` (for printing out the final result)

### General Workflow

1. **Writing the Script**: Write the script in the supplied `prog.js` file.

2. **Running the Script**: Execute the script using Node.js:
   ```sh
   node prog.js

**It is recommended that you execute the script at regular intervals to make sure you've made no errors, and to see what your results look like so far. Running `console.log` on any value will make it print out, so you can inspect the results.**

### Approach

1. **Reading Directory Contents**: Use `fs.readdir` to read the contents of the specified directory. The files will be passed in to the callback you give to `fs.readdir`.

2. **Handling Files and Directories**: 

- You can create arrays based on manual looping through the files array.
-  Alternatively, if you feel comfortable with the tools, you can use `forEach`, `filter`, and `map` methods to handle the files and directories.

3. **Sorting**: 

- Sort the directories to be listed first.
- Sort the files by their extensions (bonus goal).
