// date libaray to see how long something takes to be encrypted
// const measureCostFactorTime = async function() {
//     const plainTextPassword1 = "bad-password";
//     for (let costFactor = 10; costFactor <= 17; costFactor++) {
//       console.time(`bcrypt | cost: ${costFactor}, time to hash`);
//       const salt = await bcrypt.genSalt(costFactor);
//       await bcrypt.hash(plainTextPassword1, salt)
//       console.timeEnd(`bcrypt | cost: ${costFactor}, time to hash`);
//     }
//   }

//   measureCostFactorTime();

const bcrypt = require("bcrypt");

const password = "SUPERSECRETPASSWORD";
const salt_rounds = 20;

// What did I do right here This is the Syncronous Version of the code
const start = Date.now();
const salt = bcrypt.genSaltSync(salt_rounds);
const hash = bcrypt.hashSync(password, salt);
const end = Date.now();

const final = end - start;

console.log(
  hash,
  `start :${Math.floor(start / 1000)} , end: ${Math.floor(
    end / 1000
  )}, final : ${Math.floor(final / 1000)}`
);

// what did I do with this commented code ? Asyncronous Version

// const ecrypted_Password = bcrypt.genSalt(salt_rounds, async (err, salt) => {
//   try {
//     const value = await bcrypt.hash(password, salt);
//     console.log(value);
//   } catch (error) {
//     console.error(error);
//   }
// });

// async function start() {
//   try {
//     console.log(ecrypted_Password);
//   } catch (error) {
//     console.log(error);
//   }
// }

// start();
// console.log(ecrypted_Password);
