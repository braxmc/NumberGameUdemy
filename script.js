'use strict';

// calculates random number 
let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highscore = 0;

// checks to see if input matches number
document.querySelector('.check').addEventListener('click', function() {
  let guess = Number(document.querySelector('.guess').value);

  // if there is no guess
  if(!guess) {
    document.querySelector('.message').textContent = 'No number!';
    
  // if they guess correct
  } else if(guess === secretNumber) {
    document.querySelector('.message').textContent = 'Correct number!';
    document.querySelector('.number').textContent = secretNumber;

  // css changes upon win
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    // updates highscore
    if(score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

  // if their guess is too low
  } else if(guess !== secretNumber) {
    //determines if score is above 0
    if(score > 0) {
      document.querySelector('.message').textContent = guess > secretNumber ? 'Number too high!' : 'Number too low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      loss;
    }
  } 
});

// again button
document.querySelector('.again').addEventListener('click', function() {
  // reset score
  score = 20;
  document.querySelector('.score').textContent = score;
  // reset random number
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  // reset css
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  // reset message
  document.querySelector('.message').textContent = 'Start guessing...';
  // reset guess
  document.querySelector('.guess').value = '';
  // hiding number
  document.querySelector('.number').textContent = '?';
})