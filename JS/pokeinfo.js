export default function pokeinfo(pokeid) {
  fetch(`https://pokeapi.co/api/v2/pokemon/${pokeid}`)
  .then(response => response.json())
  .then(poke => {
    const img = poke.sprites.front_default;
    const name = poke.name;
    const num = poke.id;
    const hab = poke.abilities;
    const types = poke.types;
    const stats = poke.stats;
    document.getElementById('pokecard').innerHTML = `
      <div class="wrap-bg" style="overflow: hidden; position: relative;">
        <img class="poke-bg" src="${img}" style="
        opacity: 0.9;
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: auto;" 
        alt=""> 
      </div>
      <div class="card-i" style="position: relative;"> 
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