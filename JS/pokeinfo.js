export default function pokeinfo(pokeid) {
  fetch(`https://pokeapi.co/api/v2/pokemon/${pokeid}`)
  .then(response => response.json())
  .then(poke => {
    const name = poke.name;
    const num = poke.id;
    const hab = poke.abilities;
    const types = poke.types;
    const stats = poke.stats;
    document.getElementById('pokecard').innerHTML = `
      <div class ="card-i">
        <h3 class="nombre-info">${name}</h3> 
        <h3 id="pokeid">${num}</h2>
        <h3>Habilidades:</h3>
        <ul>
          ${hab.map(h => `<li>${h.ability.name}</li>`).join('')}
        </ul>
        <h3>Tipos:</h3>
        <ul>
          ${types.map(t => `<li>${t.type.name}</li>`).join('')}
        </ul>
        <h3>Estadísticas:</h3>
        <ul>
          ${stats.map(s => `<li>${s.stat.name}: ${s.base_stat}</li>`).join('')}
        </ul>
      </div>
    `
  })
  .catch(error => console.log('Error', error));
}