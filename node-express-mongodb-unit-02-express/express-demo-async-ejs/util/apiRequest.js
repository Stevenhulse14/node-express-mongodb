async function apiRequest() {
  try {
    const endpoint = `https://pokeapi.co/api/v2/pokemon/${randomize()}`;
    const request = await fetch(endpoint);
    const data = await request.json();
    //console.log(Object.keys(data));
    return { name: data.name, img: data.sprites.front_shiny };
  } catch (error) {
    console.error(error);
  }
}

const randomize = () => {
  return Math.floor(Math.random() * 900 + 1);
};

module.exports = apiRequest;
