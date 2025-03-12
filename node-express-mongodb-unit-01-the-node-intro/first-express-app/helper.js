const fs = require("fs");
const fileName = "cats.js";

const readCats = async () => {
  try {
    return await fs.promises.readFile(fileName, "utf8");
  } catch (error) {
    return [];
  }
};

module.exports = {
  readCats,
};
