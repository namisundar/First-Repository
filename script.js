'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'correct answer';
//document.querySelector('.number').textContent = 10;
document.querySelector('.score').textContent = 1;
document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/
let number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
// const displayMessage = function (message) {
//   document.querySelector('.message').textContent = message;
//};
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    document.querySelector('.message').textContent = 'no number!';
  } else if (guess < number) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too low';
      //let num = Number(document.querySelector('.score').textContent);
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost!!:(';
    }
  } else if (guess > number) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too high';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost!!:(';
    }
  } else if (guess === number) {
    document.querySelector('.message').textContent = 'Correct answer!!!';
    document.querySelector('.number').textContent = number;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.highscore').textContent = highscore + 1;

    // if (score > highscore) {
    //   highscore = score;
    //   document.querySelector('.highscore').textContent = highscore;
    // }
  }
});
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('.score').textContent = score;
  number = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  //document.querySelector('.score').textContent = 20;
  document.querySelector('.guess').value = '';
});
