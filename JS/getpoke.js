export default function getpoke(pokeid) {
  fetch(`https://pokeapi.co/api/v2/pokemon/${pokeid}`)
  .then(response => response.json())
  .then(poke => {
    const nombre = poke.name;
    const img = poke.sprites.front_default;
    const num = poke.id;
    document.getElementById('pokecard').innerHTML = `
      <div class ="card">  
        <h2 id="pokeid">${num}</h2>
        <img src="${img}" alt="${nombre}">
        <h1>${nombre}</h1>
      </div>
    `
  })
  .catch(error => console.log('Error', error));
}