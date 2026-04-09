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

let pesoLeggera = biciLeggera.peso;

for (let i=1; i < bici.length; i++) {
    if (bici[i].peso < pesoLeggera) {
        biciLeggera = bici[i];
    }
}

console.log(`La bici più leggera è la ${biciLeggera.nome}, peso ${biciLeggera.peso}kg`);

/// Snack2
// Creare un array di oggetti di squadre di calcio.
// Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
// Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

function randomizePoints() {
    return Math.floor(Math.random() * 7) + 1;
}

function randomizeFallo() {
    return Math.floor(Math.random() * 4) + 1;
}

const erTeam = [
    {nome: 'Napoli', punti: 0, falliSubiti: 0},
    {nome: 'Roma', punti: 0, falliSubiti: 0},
    {nome: 'Juventus', punti: 0, falliSubiti: 0},
    {nome: 'Inter', punti: 0, falliSubiti: 0},
    {nome: 'Milan', punti: 0, falliSubiti: 0},
]

for (let i=0; i<erTeam.length; i++) {
    erTeam[i].punti = randomizePoints();
    erTeam[i].falliSubiti = randomizeFallo();
    console.log(erTeam[i]);
}

const falliList = [];

for (let i=0; i<erTeam.length; i++) {
    const fallName = erTeam[i].nome;
    const fallFallo = erTeam[i].falliSubiti;
    falliList.push(fallName, fallFallo);
}

console.log(falliList);