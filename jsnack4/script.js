// JSNACK4
/* In un array sono contenuti i nomi degli invitati alla festa del grande
Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o
no alla festa.
*/

const arrayInvitati = ["Francesca", "Andrea", "Alice", "Giorgia", "Martina", "Patrick"];

let onTheList = prompt("Sei un invitato? Inserisci il tuo nome e scoprilo: ");


if (arrayInvitati.indexOf(onTheList) > -1) {
    console.log("Puoi entrare!");
} else {
    console.log("Non puoi entrare!");
}