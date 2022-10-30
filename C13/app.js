/* let fs= require('fs');
let leerApi = JSON.parse(fs.readFileSync('./response_ability.json', 'utf8'));

function buscarPorNombre (nombre){
    for (let i = 0; i < leerApi.results.length; i++) {
        if (leerApi.results[i].name === nombre) {
            return leerApi.results[i];
        } else {
            return "No se encontro";
        }
        }
        
    }

console.log(buscarPorNombre("damp")); */


// const fs = require('fs');

// REQUIRIENDO EL MODULO JSONHELPER
const jsonHelper = require("./node_modules/JsonHelper");


// UTILIZANDO EL METODO LEER PARA PARSEAR EL ARCHIVO arrayAutos.JSON
arrayPokemon = jsonHelper.leer("./response_ability.json");



const pokemons =  {arrayPokemon,
  buscarPorNombre: function (nombre) {
    for (let i = 0; i < this.arrayPokemon.results.length; i++) {
        if (nombre === this.arrayPokemon.results[i].name) {
            console.log(this.arrayPokemon.results[i].name)
            return this.arrayPokemon.results[i].name;
        }
}
}
}


pokemons.buscarPorNombre("stench");
