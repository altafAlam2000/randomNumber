

const randomNumber = Math.ceil(Math.random() * 10);
// console.log(randomNumber);5
const guessNumber = prompt("guess the number between 1 & 10 inclusive");
(guessNumber == randomNumber) ? console.log("Matched"): console.log("Not matched, the was " + randomNumber);
