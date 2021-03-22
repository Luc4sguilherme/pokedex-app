const getPokemonImage = (sprites) => {
  if (sprites.other['official-artwork'].front_default !== null) {
    return sprites.other['official-artwork'].front_default;
  }

  return sprites.front_default;
};

export default getPokemonImage;
