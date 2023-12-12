export default function pokemonCatch(args) {
  fetch(`https://pokeapi.co/api/v2/pokemon/${args}`)
    .then((response) => response.json())
    .then((data) => {
      const pokemon = {
        name: data.name,
        image: data.sprites.front_default,
      };
      return pokemon;
    })
    .catch((error) => console.error(error));
}
