// JSNACK1
// L'utente inserisce due numeri in successione, con due prompt.
// Il software stampa il maggiore.

let num1 = prompt("Inserisci il primo numero: ");
let num2 = prompt("Inserisci il secondo numero: ");

let isNum1ANumber = !isNaN(num1);
let isNum2ANumber = !isNaN(num2);

if (isNum1ANumber && isNum2ANumber) {
    num1 = parseInt(num1);
    num2 = parseInt(num2);
} else {
    console.log("Gli input inseriti non sono validi, riesegui il programma!");
}

if (num1 > num2) {
    console.log("Il numero maggiore è il primo: " + num1);
} else {
    console.log("Il numero maggiore è il secondo: " + num2);
}