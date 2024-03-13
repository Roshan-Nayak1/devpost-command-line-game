// game.js
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const targetNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function playGame() {
  rl.question('Guess a number between 1 and 100: ', (guess) => {
    attempts++;
    const parsedGuess = parseInt(guess);

    if (parsedGuess === targetNumber) {
      console.log(`Congratulations! You guessed the number in ${attempts} attempts.`);
      rl.close();
    } else if (parsedGuess < targetNumber) {
      console.log('Too low! Try again.');
      playGame();
    } else {
      console.log('Too high! Try again.');
      playGame();
    }
  });
}

console.log('Welcome to the Guessing Game!');
playGame();