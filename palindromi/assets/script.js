/*
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
*/

// Ask user one word
const userWord = prompt('Dammi una parola');

console.log('Hai scelto la parola: ' + userWord);

// Reverse user word
let reverseUserWord = userWord.split('').reverse().join('');

console.log('La tua parola letta al contrario è: ' + reverseUserWord)

// Check is user word and its reverse are the same
if (reverseUserWord == userWord) {
console.log('%cComplimenti, la parola da te inserita è un palindromo', 'color:green')
} else {
    console.log('%cMi dispiace, la parola da te inserita non è un palindromo', 'color:red')
}