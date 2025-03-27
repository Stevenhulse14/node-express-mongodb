// const btnCatch = document.querySelector(".catch-btn");
// const btnRock = document.querySelector(".rock-btn");
// const btnRand = document.querySelector(".randomize-btn");
// console.dir(btnCatch, btnRand, btnRock);

// importing using es modules
import { myTeam, oppTeam } from "/pokemon-data.js";
import randomize from "./helper/index.js";
// import axios from "axios";
const btnContainer = document.querySelector(".button-container");

btnContainer.addEventListener("click", async (e) => {
  const poke_name = document.querySelector(".pokemon-name");
  const pokes_moves = document.querySelectorAll(".move");
  const poke_img = document.querySelector("img");

  const buttonClick = e.target.classList[1];
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${randomize()}`
  );
  const data = await response.json();
  if (buttonClick === "catch-btn") {
    await postData(
      {
        name: poke_name.innerHTML,
        moves: [...pokes_moves].map((item) => (item = item.innerHTML)),
        sprite: poke_img.src,
      },
      "my"
    );
  } else if (buttonClick === "rock-btn") {
    const newPoke = {
      name: poke_name.innerHTML,
      moves: [...pokes_moves].map((item) => (item = item.innerHTML)),
      sprite: poke_img.src,
    };
    await postData(newPoke, "opp");
  } else {
    const moves = Object.keys(randomize(data));
    const {
      name,
      sprites: { front_shiny },
    } = data;
    //console.log(pokes_moves);
    pokes_moves.forEach((node, index) => (node.innerText = moves[index]));
    poke_name.innerHTML = name;
    poke_img.src = front_shiny;
  }
});

const postData = async (pokemon, options) => {
  try {
    // ----------------- This is how you do it without that script at the bottom file

    const response = await fetch(`/api/teams/${options}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(pokemon),
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
