// JSNACK 6
/* Fate generare un numero random da 0 a 10 al computer, e chiedete
all'utente di inserire un suo numero. Se il numero scelto dall'utente è
uguale al numero del computer informate l'utente che ha vinto, altrimenti
ha perso.
*/

let numberUserChoice = prompt("Inserisci un numero: ");
numberUserChoice = parseInt(numberUserChoice);

let randomNumberGenerator = Math.floor(Math.random() * 11);

if (numberUserChoice == randomNumberGenerator) {
    console.log("Congratulazioni! Hai indovinato il numero generato dal computer! " + randomNumberGenerator);
} else {
    console.log("Mi dispiace, il tuo numero e quello generato dal computer sono diversi");
}