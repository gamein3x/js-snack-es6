`use strict`;

/// Snack 1
// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore.

const bici = [
    { nome: "Specialized Tarmac", peso: 6.8 },
    { nome: "Cannondale SuperSix", peso: 7.2 },
    { nome: "Trek Emonda", peso: 6.6 },
    { nome: "Pinarello Dogma", peso: 7.5 }
];

// Assumo che la prima sia la più leggera.
let biciLeggera = bici[0];

// Scrollo l'array e aggiorno biciLeggera solo se ha un peso minore.
let current = 1;
let pesoCurrent = bici[current].peso;
let pesoLeggera = biciLeggera.peso;

while (current < bici.length) {
    current++;
    if (pesoCurrent < pesoLeggera) {
        biciLeggera = bici[current];
    }
}

console.log(`La bici più leggera è la ${biciLeggera.nome}, peso ${biciLeggera.peso}`);

/// Snack2
// Creare un array di oggetti di squadre di calcio.
// Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
// Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.