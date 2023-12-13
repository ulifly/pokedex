async function obtenerInformacionPokemon(nombre) {
  try {
    const respuesta = await fetch(`https://pokeapi.co/api/v2/pokemon/${nombre}`);
    if (respuesta.ok) {
      const datosPokemon = await respuesta.json();
      // Aquí puedes procesar los datos del Pokémon como desees
      return datosPokemon;
    } else {
      throw new Error('No se encontró información para el Pokémon');
    }
  } catch (error) {
    console.error(error);
    return null;
  }
}

const nombrePokemon = 'pikachu';
obtenerInformacionPokemon(nombrePokemon)
  .then((informacionPokemon) => {
    if (informacionPokemon) {
      console.log(`Información de ${nombrePokemon}:`);
      console.log(`Nombre: ${informacionPokemon.name}`);
      console.log(`Altura: ${informacionPokemon.height}`);
      console.log(`Peso: ${informacionPokemon.weight}`);
    } else {
      console.log(`No se encontró información para el Pokémon ${nombrePokemon}`);
    }
  });
