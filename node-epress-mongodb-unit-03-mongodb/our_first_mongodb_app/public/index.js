// const btnCatch = document.querySelector(".catch-btn");
// const btnRock = document.querySelector(".rock-btn");
// const btnRand = document.querySelector(".randomize-btn");
// console.dir(btnCatch, btnRand, btnRock);
import { myTeam, oppTeam } from "/pokemon-data.js";
const btnContainer = document.querySelector(".button-container");

btnContainer.addEventListener("click", (e) => {
  console.dir(e.target.classList[1]);
  const buttonClick = e.target.classList[1];
  if (buttonClick === "catch-btn") {
    const newPoke = {
      name: "Pikachi",
      moves: ["thundershock", "tailwhip", "tackle", "thunder"],
    };

    myTeam.push(newPoke);
    console.log(myTeam);
  } else if (buttonClick === "rock-btn") {
    const newPoke = {
      name: "Meowth",
      moves: ["scratch", "sand-attack", "fury swipes", "slash"],
    };
    oppTeam.push(newPoke);
    console.log(oppTeam);
  } else {
    console.log("are you in the else ");
  }
});

const postData = async () => {
  try {
  } catch (error) {}
};
