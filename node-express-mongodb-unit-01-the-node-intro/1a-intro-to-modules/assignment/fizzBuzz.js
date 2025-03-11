// Declare the fizzBuzz function here: BY: Nuraly
// arrow functions expression is declared and can only be read down the script:
export const fizzBuzz = (number) => {
  // declare an empty array to hold the values:
  // outpute 1, 2, "FizzBuzz", etc:
  const arr = [];
  // argument number is the lentgh of loop and i will to up to the length,
  // and chack for the fizzBuzz conditions
  for (let i = 1; i <= number; i++) {
    // % operator returns 0 if it is divisible by 3 and / or 5:
    if (i % 3 == 0 && i % 5 == 0) {
      arr.push("fizzbuzz");
    } else if (i % 3 == 0) {
      arr.push("fizz");
    } else if (i % 5 == 0) {
      arr.push("buzz");
    } else {
      arr.push(i);
    }
  }
  return arr;
};

// all of the test cases:
console.log(fizzBuzz(1));
console.log(fizzBuzz(3));
console.log(fizzBuzz(5));
console.log(fizzBuzz(15));

// Export the fizzBuzz function here:
