const emojis = require("./emojis.js");

/**
 * translateWords()
 * -----------
 * Returns the given sentence with some words replaced with emojis.
 * @param {string} words - The sentence to translate.
 * @returns {string} - The sentence with any emoji words replaced with their matching emojis.
 */
const translateWords = function (sentence) {
  const emojimap = {};
  emojis.forEach((emoji) => {
    const { name, symbol } = emoji;
    emojimap[name.toLowerCase()] = symbol;
  });

  return sentence
    .split(" ")
    .map((word) => emojimap[word.toLowerCase()] || word)
    .join(" ");
};

console.log(translateWords("elephant news poop"));

module.exports = translateWords;

// const newArr = ["steven", "emmanuel", "nikki", "nuraly"];

// const hashmap = {
//   /// first iteration has nothing
//   // after the first iteration ?
// };

// newArr.map((item) => {
//   if (Object.hasOwn(hashmap, item[0])) {
//     hashmap[item[0]] += 1;
//   } else {
//     hashmap[item[0]] = 1;
//   }
// });

// console.log(hashmap);
