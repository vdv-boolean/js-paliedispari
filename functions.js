function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

function isEven(number) {
  return number % 2 == 0;
}

function isPalindrome(word) {
    console.log('Hai scelto la parola: ' + word);
    let reverseUserWord = word.split('').reverse().join('');
    console.log('La tua parola letta al contrario è: ' + reverseUserWord)
    if (reverseUserWord == word) {
        console.log('%cComplimenti, la parola da te inserita è un palindromo', 'color:green')
    } else {
        console.log('%cMi dispiace, la parola da te inserita non è un palindromo', 'color:red')
    }
  }