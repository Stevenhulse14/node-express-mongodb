const emojis = require("./emojis.js");

/**
 * search()
 * Returns the emojis whose names match the given query.
 * --------
 * @param {string} searchStr - The query to match.
 * @returns {Object[]} - An array of objects where each object is a matching emoji.
 */
const search = function (substr) {
  const lowercase_substr = substr.toLowerCase();

  return emojis.filter((emoji) =>
    emoji.name.toLowerCase().includes(lowercase_substr)
  );
};

//console.log(search("HEART"));

module.exports = search;
