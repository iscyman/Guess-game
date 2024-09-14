'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'correct number!';

// document.querySelector('.number').textContent = 15;
// document.querySelector('.score').textContent = 17;

// document.querySelector('.guess').value = 14;
// console.log(document.querySelector('.guess').value);
//Math.trunc(Math.random() * 21): this elevate it between 0 and 20
//Math.trunc(Math.random() * 20) +1: this is between 1 and 20

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // No input provided
  if (!guess) {
    document.querySelector('.message').textContent = 'No number❌';

    // When guess is correct
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Correct number! 😊';
    document.querySelector('.number').textContent = secretNumber;

    // Style changes when the guess is correct
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    // Highscore logic
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    // When guess is wrong (too high or too low)
  } else if (guess !== secretNumber) {
    if (score > 0) {
      document.querySelector('.message').textContent =
        guess > secretNumber ? 'Too high! 👾' : 'Too low! 🤢';
      score--; // Decrease score by 1
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game!😥';
    }
  }
});

// Resetting the game when 'Again' is clicked
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('.number').textContent = '?';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.guess').value = '';
  document.querySelector('.score').textContent = score;

  // Reset styles
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
