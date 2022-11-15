"use strict";
const listaSpesa = ["Pomodori", "Biscotti", "Nutella", "Pesche", "Banane"];
const contenitoreOggetti = document.getElementById("contenitore-lista");
const inputOggettoNuovo = document.getElementById("inputSpesa");

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
    contenitoreOggetti.innerHTML += oggettoSpesaComponente(oggettoDaComprare);
}

function aggiungiOggetto() {
    if (inputOggettoNuovo.value) {
        const nuovoOggetto = inputOggettoNuovo.value;
        inputOggettoNuovo.value = '';
        listaSpesa.push(nuovoOggetto);
        contenitoreOggetti.innerHTML += oggettoSpesaComponente(nuovoOggetto);
    }
}

function rimuoviDaSpesa(elemento) {
    const oggettoSpesa = elemento.parentNode;
    const indiceOggettoSpesa = prendiIndiceNodo(oggettoSpesa);
    const nomeOggetto = oggettoSpesa.firstChild.innerHTML;
    console.log(`${indiceOggettoSpesa}, ${nomeOggetto}, ${listaSpesa}`);
    if (listaSpesa[indiceOggettoSpesa] == nomeOggetto) {
        listaSpesa.splice(indiceOggettoSpesa, 1)
        oggettoSpesa.remove();
    }
    console.log(`${indiceOggettoSpesa}, ${nomeOggetto}, ${listaSpesa}`);
}

inputOggettoNuovo.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        aggiungiOggetto();
    }
})

function prendiIndiceNodo(elemento) {
    return Array.prototype.indexOf.call(elemento.parentNode.children, elemento)
}

function oggettoSpesaComponente(nomeOggetto) {
    return `<li class="list-group-item list-group-item-primary d-flex justify-content-between"><p class="m-0">${nomeOggetto}</p> <button type="button" onclick="rimuoviDaSpesa(this)" class="btn btn-danger d-flex align-items-center"><span class="material-symbols-rounded">close</span></button></li>`;
}