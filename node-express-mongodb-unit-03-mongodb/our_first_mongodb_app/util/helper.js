const randomize = (data) => {
  //randomizing the moves
  if (data) {
    const { moves } = data;
    const newObj = {};

    for (let i = 0; i < 4; i++) {
      const item = Math.floor(Math.random() * moves.length + 1);
      const name = data.moves[item].move.name;
      newObj[name] = data.moves[item];
    }
    return newObj;
  }
  // randomize the pokemon
  else {
    return Math.floor(Math.random() * 900 + 1);
  }
};

module.exports = randomize;
