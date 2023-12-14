const botonback = document.querySelector('#bback');
const botonnext = document.querySelector('#bnext');
const botonrand = document.querySelector('#brand');

botonrand.addEventListener('click', pokerand); 

function pokerand() {
  let pokeid = Math.floor(Math.random() * 898) + 1;
  getpoke(pokeid);
}


function getpoke(pokeid) {
  fetch(`https://pokeapi.co/api/v2/pokemon/${pokeid}`)
  .then(response => response.json())
  .then(poke => {
    const nombre = poke.name;
    const img = poke.sprites.front_default;
    const num = poke.id;
    console.log(nombre, img);
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


botonnext.addEventListener('click', pokenext);

function pokenext() {
  let pokeid = document.getElementById('pokeid').innerHTML;
  pokeid = parseInt(pokeid);
  if (pokeid < 898) {
    pokeid++;
    getpoke(pokeid);
  } else {
    pokeid = 1;
    getpoke(pokeid);
  }
}

botonback.addEventListener('click', pokeback);
function pokeback() {
  let pokeid = document.getElementById('pokeid').innerHTML;
  pokeid = parseInt(pokeid);
  if (pokeid > 1) {
    pokeid--;
    getpoke(pokeid);
  } else {
    pokeid = 898;
    getpoke(pokeid);
  } 
}