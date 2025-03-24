// we are going to make a request to the pokemon api and generate a new pokemon each request.

// This function make a api request the the endpoint specifed and returns that data.

let pokemon_team_state = [];
let opponents_team = [];

/**
 pokemon_name{
 img: "img_url"
 moves:["wing attack","peck", "water gun", "sand-attack"]
 }
 */

const button = document.querySelector("button");
const rock = document.querySelector("#stone");
const pokemon = document.querySelector("img");
const catchbtn = document.querySelector("#catch");
const team = document.querySelector(".teamcontainer");
const opponentsteam = document.querySelector(".opponentteam");

button.addEventListener("click", () => {
  //const value = await apiRequest();
  console.log("value");
  //pokemon.src = value;
});

rock.addEventListener("click", async () => {
  const img = document.createElement("img");
  const val = await apiRequest();
  img.src = pokemon.src;
  console.log(val);
  if (opponents_team.length < 6) {
    opponentsteam.append(img);
    opponents_team.push(pokemon.src);
    pokemon.src = val;
  }
  //pokemon.src = "";
});

catchbtn.addEventListener("click", () => {
  pokemon_team_state.push(pokemon.src);
  addPokemonDom();
  console.log(pokemon_team_state);
});
// task create a event listener that grabs the rock !

async function apiRequest() {
  try {
    const endpoint = `https://pokeapi.co/api/v2/pokemon/${randomize()}`;
    const request = await fetch(endpoint);
    const data = await request.json();
    console.log(data);
    //return data.sprites.front_shiny;
  } catch (error) {
    console.error(error);
  }
}

function addPokemonDom() {
  if (pokemon_team_state.length <= 6) {
    team.innerHTML = "";
    pokemon_team_state.forEach((src) => {
      const img = document.createElement("img");
      img.src = src;
      console.log(src);
      team.append(img);
    });
  }
}

// tools helper function
const randomize = () => {
  return Math.floor(Math.random() * 900 + 1);
};

console.log("hey are you missing anything ");

module.exports = apiRequest;
