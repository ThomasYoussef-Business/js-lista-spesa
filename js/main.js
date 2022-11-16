"use strict";
/* --- Il problema da risolvere è quello di creare un sito che possa fare --- */
/* --- da lista della spesa, dove l'utente può togliere e mettere elementi -- */
/* ------------------------------ nella lista. ------------------------------ */


/* ----------------------------- Variabili varie ---------------------------- */
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

// Questo loop aggiunge gli elementi già nella lista dentro all'HTML
for (const oggettoDaComprare of listaSpesa) {
    console.log(`Devo prendere ${oggettoDaComprare}`);
    contenitoreOggetti.innerHTML += oggettoSpesaComponente(oggettoDaComprare);
}


function aggiungiOggetto() {
    // Usato trim per evitare che whitespace siano abbastanza
    // per aggiungere un nuovo oggetto
    if (inputOggettoNuovo.value.trim()) {
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

    if (listaSpesa[indiceOggettoSpesa] == nomeOggetto) {
        listaSpesa.splice(indiceOggettoSpesa, 1)
        oggettoSpesa.remove();
    }
}

// Premere invio sull'input causa l'avvio di un evento inteso per i form,
// quindi lo intercetto per cambiarne il comportamento
inputOggettoNuovo.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        aggiungiOggetto();
    }
})

function prendiIndiceNodo(elemento) {
    // Soluzione un po' artigianale, non molto elegante ma funzionante
    // TODO: Usare un Object per stare dietro agli elementi nella lista e
    // per rimuoverli 
    return Array.prototype.indexOf.call(elemento.parentNode.children, elemento)
}

/* --------- Componente astratto a funzione per evitare ripetizione --------- */
function oggettoSpesaComponente(nomeOggetto) {
    return `<li class="list-group-item list-group-item-primary d-flex justify-content-between"><p class="m-0">${nomeOggetto}</p> <button type="button" onclick="rimuoviDaSpesa(this)" class="btn btn-danger d-flex align-items-center"><span class="material-symbols-rounded">close</span></button></li>`;
}