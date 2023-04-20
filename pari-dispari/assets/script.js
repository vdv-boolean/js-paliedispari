/*
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
*/

// Ask to user between "even" and "odd"
let userChoice = prompt('Scegli tra pari e dispari').toLowerCase();

while (!~["pari", "dispari"].indexOf(userChoice)) {
    userChoice = prompt('Scegli tra pari e dispari');
}

console.log('Hai scelto: ' + userChoice)

//Ask to user a number between 1 and 5
const min = 1;
const max = 5;

let userNum = parseInt(prompt('Dammi un numero tra 1 e 5'));

while (!(userNum >= min && userNum <= max)) {
    userNum = parseInt(prompt('Dammi un numero tra 1 e 5'))
}
console.log('User number: ' + userNum); 

// Get random number between 1 and 5
const pcNum = getRandomNumber(min, max);

console.log('Pc number: ' + pcNum); 

// Sum of two numbers

const sumNum = userNum + pcNum;

console.log('Somma: ' + sumNum);

// Check if sum is even or odd

if (sumNum % 2 == 0) {
    console.log('La somma è un numero pari')
} else {
    console.log('La somma è un numero dispari')
}


/**************
 * Functions
***************/

function getRandomNumber() {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

