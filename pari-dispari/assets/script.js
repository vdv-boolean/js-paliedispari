// Ask to user between "even" and "odd"
let userChoice = prompt('Scegli tra pari e dispari').toLowerCase();

while (!~["pari", "dispari"].indexOf(userChoice)) {
    userChoice = prompt('Scegli tra pari e dispari');
}

console.log('Hai scelto: ' + userChoice);

//Ask to user a number between 1 and 5
const min = 1;
const max = 5;

let userNum = parseInt(prompt('Dammi un numero tra 1 e 5'));

while (!(userNum >= min && userNum <= max)) {
    userNum = parseInt(prompt('Dammi un numero tra 1 e 5'));
}
console.log('User number: ' + userNum); 

// Get random number between 1 and 5
const pcNum = getRandomNumber(min, max);

console.log('Pc number: ' + pcNum); 

// Sum of two numbers
const sumNum = userNum + pcNum;

console.log('Somma: ' + sumNum);

// Check if sum is even or odd
let esite
if (isEven(sumNum)) {
    esite = 'pari'
    console.log('La somma è un numero pari');
} else {
    console.log('La somma è un numero dispari');
}

// Declare if user won or not
if (esite == userChoice) {
    console.log('%cHai vinto!', 'color: green');
} else {
    console.log('%cHai perso!', 'color: red');
}
