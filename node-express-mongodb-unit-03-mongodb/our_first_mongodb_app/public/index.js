// const btnCatch = document.querySelector(".catch-btn");
// const btnRock = document.querySelector(".rock-btn");
// const btnRand = document.querySelector(".randomize-btn");
// console.dir(btnCatch, btnRand, btnRock);

// importing using es modules
//import { myTeam, oppTeam } from "/pokemon-data.js";
// import axios from "axios";
const btnContainer = document.querySelector(".button-container");

btnContainer.addEventListener("click", async (e) => {
  console.dir(e.target.classList[1]);
  const buttonClick = e.target.classList[1];
  if (buttonClick === "catch-btn") {
    const data = await postData();
    console.log(data);
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
    // ----------------- This is how you do it without that script at the bottom file

    const response = await fetch("/api/teams/my", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: "Meowth",
        moves: ["scratch", "sand-attack", "fury swipes", "slash"],
      }),
    });
    // const response = await axios.post("http://localhost:8000/api/teams/my", {
    //   name: "Meowth",
    //   moves: ["scratch", "sand-attack", "fury swipes", "slash"],
    // });

    return response;
  } catch (error) {
    console.error(error);
  }
};
