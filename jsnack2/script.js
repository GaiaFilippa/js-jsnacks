// JSNACK2
// L’utente inserisce due parole in successione, con due prompt.
//Il software stampa prima la parola più corta, poi la parola più lunga.

let firstWord = prompt("Inserisci una parola: ");
let secondWord = prompt("Inserisci un'altra parola: ");


    let lenghtFirstWord = firstWord.length;
    let lenghtSecondWord = secondWord.length;

    if (lenghtFirstWord > lenghtSecondWord) {
        console.log(secondWord + " " + firstWord);
    } else {
        console.log(firstWord + " " + secondWord);
    }