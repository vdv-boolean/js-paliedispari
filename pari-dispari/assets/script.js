/*
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
*/

//Ask to user a number between 1 and 5
let userNum = parseInt(prompt('Dammi un numero tra 1 e 5'));

while (userNum > 6) {
    userNum = parseInt(prompt('Dammi un numero tra 1 e 5'))
}
console.log('User number: ' + userNum); 

