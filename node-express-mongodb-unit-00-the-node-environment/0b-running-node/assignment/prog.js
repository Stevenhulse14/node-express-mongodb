// Your code here.

function greetUser(name, isAdmin, hour) {
  let greeting;

  if (hour >= 5 && hour < 12) {
    greeting = " Good morning";
  } else if (hour >= 12 && hour < 18) {
    greeting = " Good afternoon";
  } else {
    greeting = " Good evening";
  }

  let message = `${greeting}, ${name}!`;

  if (isAdmin) {
    message += " you have administrator access. ";
  }

  console.log(message);
}

greetUser("Steven", true, 12);
greetUser("Colin", true, 10);
greetUser("Samantha", true, 15);
greetUser("Gene", false, 16);
greetUser("Ty", false, 20);
greetUser("Burrell", true, 3);
