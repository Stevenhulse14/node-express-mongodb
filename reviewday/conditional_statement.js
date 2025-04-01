// Conditionals
let fruits = ["apple", "banana", "peach"];
// if (fruits.includes("watermelon")) {
//   console.log("watermelon");
// } else {
//   fruits.push("watermelon");
// }
console.log("T/F :", !fruits.includes("watermelon"));

if (fruits.includes("watermelon")) {
  fruits.push("watermelon");
  console.log("Here", fruits.length);
} else if (fruits.length >= 3) {
  fruits.push("pear");
  console.log(fruits);
} else {
  console.log("watermelon");
}

//console.log(fruits);
// if / else I like to think about it as left or right
// if is yes and else is no
// if could be no and else could be yes that just depend on
// how you configure your conditionals.
// flowcharting

// SWITCH CASE STATEMENTS

function blend(fruit, liquid, sweetener) {
  const obj = { f: fruit, l: liquid, s: sweetener };

  const display = ({ f, l, s }) =>
    console.log(` Here is your blended Smoothie with ${f}, ${l}, and ${s}`);

  switch (fruit) {
    case "apple":
      display(obj);
      break;
    case "banana":
      display(obj);
      break;
    case "pear":
      display(obj);
      break;

    default:
      console.log(" error with input");
  }
}

//blend("apple", "almond milk", "honey");

// Turanery statments
// is very similar to if else but it does use word it uses symbols
/*
 infix                  postfix
 if (condition ) => (conditon) ?
 else if(condition) => there is no else if equivalent
 else{}   =>       : 
 
  Turanery Statement 
  (Condition) ? <-if { code you want you ? to output } : <-else { code you want you : to output }

*/
const value = fruits.find((fruit) => fruit === "apple") ? "found" : "undefined";

console.log(value);
