const url = "https://pokeapi.co/api/v2/pokemon/ditto";

// async function poke() {
//   try {
//     const data = await fetch(url);
//     const response = await data.json();

//     console.log(response);
//   } catch (error) {
//     console.error(error);
//   }
// }

// poke();

async function poke() {
  const data = fetch(url)
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) => console.log(error));

  console.log(data);
}

poke();
