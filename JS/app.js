const botonback = document.querySelector('#bback');
const botonnext = document.querySelector('#bnext');
const botonrand = document.querySelector('#brand');
import getpoke from "./getpoke.js";

botonrand.addEventListener('click', pokerand); 

function pokerand() {
  let pokeid = Math.floor(Math.random() * 898) + 1;
  getpoke(pokeid);
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

