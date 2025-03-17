// Add your interface code below!
const {
  fahrenheitToCelsius,
  celsiusToFahrenheit,
  convertTemperature,
} = require("./logic");

// 1. Import the object from logic.js that contains the functions you need. COMPLETED

// 2. Grab the variables you'll need from the user's input (process.argv).

const args = process.argv.slice(2);

const scale = args[1];

const degrees = parseFloat(args[0]);

// 3. Call the function that will convert the temperature, passing in the user's input.
if (isNaN(degrees) || (scale !== "f" && scale !== "c")) {
  console.error("Usage: node interface.js <temperature> <scale: 'f' or 'c'>");
  process.exit(1);
}
// 4. Print the result to the console.

const convertedTemp = convertTemperature(degrees, scale);

console.log(
  `Converted temperature: ${convertedTemp.toFixed(2)} degrees ${
    scale === "f" ? "Celsius" : "Fahrenheit"
  }`
);

/**
 *
 * This file here isn't going to be where we code most of our functions.
 * this is where we call node and pass in those perameters.
 */
