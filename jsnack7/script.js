// JSNACK 7
/* Scrivere un programma che stampi la tabellina del 2, fino al numero 1000.
Modificate poi il programma in modo che venga chiesto all'utente il
numero massimo consentito, e stampare tutta la tabellina del 2 fino al
numero inserito.
*/

// Stampa Tabellina del 2 sino al numero 1000
/*
for(let i=2; i<=1000; i=i+2){
    console.log(i);
}
*/

let finalMultiplierString = prompt("Inserisci il moltiplicatore finale che vuoi raggiungere: ");

let finalMultiplier = parseInt(finalMultiplierString);

for(let i = 2; i <= finalMultiplier; i=i+2){
    console.log(i);
}