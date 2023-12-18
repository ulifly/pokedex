export default function pokeinfo(pokeid) {
  let colorType = '#B09398'

  let colorTypes = {
    grass: '#4A9681',
    fire: '#FF675C',
    water: '#0596C7',
    bug: '#A2FAA3',
    normal: '#B09398',
    poison: '#795663',
    electric: '#FFEA70',
    ground: '#D2B074',
    fairy: '#FFC6D9',
    flying: '#7AE7C7',
    ghost: '#561D25',
    dragon: '#DA627D',
    steel: '#1D8A99',
    fighting: '#2F2F2F',
    dark: '#2A1A1F',
    unknown: '#2A1A1F',
    shadow: '#2A1A1F',
    ice: '#AFEAFD',
    rock: '#999799',
    psychic: '#FFC6D9'
  };
  
  fetch(`https://pokeapi.co/api/v2/pokemon/${pokeid}`)
  .then(response => response.json())
  .then(poke => {
    const img = poke.sprites.front_default;
    const name = poke.name;
    const num = poke.id;
    const hab = poke.abilities;
    const types = poke.types;
    const stats = poke.stats;

    let typeColors = types.map(type => colorTypes[type.type.name]);
    let colorType = typeColors[0];
    
    document.getElementById('pokecard').innerHTML = `
      <div class="wrap-bg" style="overflow: hidden; position: relative;">
        <img class="poke-bg" src="${img}" style="
        opacity: 0.3;
        position: absolute;
        left: 50px;
        top: 0;
        width: 100%;
        height: auto;" 
        alt="">
      
      <div class="card-i" style="position: relative;"> 
        <h3 class="nombre-info">${name}</h3> 
        <h3 id="pokeid">${num}</h2>
        <h3>Habilidades:</h3>
        <ul>
          ${hab.map(h => `<li>${h.ability.name}</li>`).join('')}
        </ul>
        <h3>Tipos:</h3>
        <ul>
        ${types.map((t, index) => `<li class="tipos" style="color:${typeColors[index]};" >${t.type.name}</li>`).join('')}
        </ul>
        <h3>Estadísticas:</h3>
        <ul>
          ${stats.map(s => `<li>${s.stat.name}: ${s.base_stat}</li>`).join('')}
        </ul>
      </div>
      </div>
    `
  })
  .catch(error => console.log('Error', error));
}

