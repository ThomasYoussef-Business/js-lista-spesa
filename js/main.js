"use strict";
const listaSpesa = ["Pomodori", "Biscotti", "Nutella", "Pesche", "Banane"];
const contenitoreOggetti = document.getElementById("contenitore-lista");

/**
 * let i = 0;
 * 
 * while (i < listaSpesa.length) {
 *      console.log(listaSpesa[i]);
 * }
 */

for (let i = 0; i < listaSpesa.length; i++) {
    const oggettoDaComprare = listaSpesa[i];
    console.log(`Devo prendere ${oggettoDaComprare}`);
    contenitoreOggetti.innerHTML += nuovoOggettoSpesa(oggettoDaComprare);
}



function rimuoviDaSpesa(elemento) {
    console.log(elemento.parentNode);
}

function nuovoOggettoSpesa(nomeOggetto) {
    return `<li class="list-group-item list-group-item-primary d-flex justify-content-between"><p class="m-0">${nomeOggetto}</p> <button type="button" onclick="rimuoviDaSpesa(this)" class="btn btn-danger"><span class="material-symbols-rounded">close</span></button></li>`;
}