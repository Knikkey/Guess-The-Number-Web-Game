'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  // No input
  if (!guess) {
    displayMessage('No Number! 😵');
    //document.querySelector('.message').textContent = 'No Number! 😵';
  }

  //When player wins
  else if (guess === secretNumber) {
    displayMessage('You got it! 🎊');
    // document.querySelector('.message').textContent = 'You got it! 🎊';

    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';

    document.querySelector('.number').textContent = secretNumber;

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }

  //When guess is wrong
  else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(
        guess > secretNumber
          ? 'Too high! Try a lower number ⬇️'
          : 'Too low! Try a higher number ⬆️'
      );
      //   document.querySelector('.message').textContent =
      // guess > secretNumber
      //   ? 'Too high! Try a lower number ⬇️'
      //   : 'Too low! Try a higher number ⬆️';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You lost the game... how?...');
      //   document.querySelector('.message').textContent =
      ('You lost the game... how?...');
      document.querySelector('.score').textContent = 0;
    }
  }

  //   //When guess is too high
  //   else if (guess > secretNumber) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent =
  //         'Too high! Try a lower number ⬇️';
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent =
  //         'You lost the game... how?...';
  //       document.querySelector('.score').textContent = 0;
  //     }
  //   }

  //   //When guess is too low
  //   else if (guess < secretNumber) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent =
  //         'Too low! Try a higher number ⬆️';
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent =
  //         'You lost the game... how?...';
  //       document.querySelector('.score').textContent = 0;
  //     }
  //   }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  displayMessage('Start guessing...');
  //   document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
