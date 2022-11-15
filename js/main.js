"use strict";
const listaSpesa = ["Pomodori", "Biscotti", "Nutella", "Pesche", "Banane"];

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
}