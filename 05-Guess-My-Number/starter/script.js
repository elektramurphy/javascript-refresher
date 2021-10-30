'use strict';

/*
console.log(document.querySelector('.message')
.textContent);

document.querySelector('.message').textContent = 'Correct Number';
console.log(document.querySelector('.message')
.textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

(document.querySelector('.guess').value) = 23;
console.log(document.querySelector('.guess').value);
*/

let secretNumber = Math.trunc(Math.random() * 20) + 
1;
let score = 20; // variable to hold the data (state variable)
let highScore = 0;

const displayMessage = function(message) {
    document.querySelector('.message').textContent = 
    message;
}

document.querySelector('.check').addEventListener // .check is the btn class
('click', function() {  // event handler is the function
    const guess = Number(document.querySelector('.guess').
    value);

    //when there is no input
    if (!guess) {
        // document.querySelector('.message').textContent =
        //'No number';
        displayMessage('No number');

    //when player wins
    } else if (guess === secretNumber){
        displayMessage('You win!');
        document.querySelector('.number').textContent = 
        secretNumber;

        document.querySelector('body').style.
        backgroundColor = '#60b347';

        document.querySelector('.number').style.width = 
        '30rem'; //30 rem NEEDS to be in a string

        if(score > highScore) {
            highScore = score;
            document.querySelector('.highscore').
            textContent = highScore;
        }

    //when guess is wrong
    } else if(guess !== secretNumber) {
        if(score > 1) {
            displayMessage(guess > secretNumber ? 'Too high!' : 'Too low') 
            score = score - 1;
            document.querySelector('.score').textContent = score;
        } else {
            displayMessage('You lost the game')
            document.querySelector('.score').textContent =
            0;
        }
    }
});

document.querySelector('.again').addEventListener
('click', function() {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  
  document.querySelector('.message').textContent = 
  'Start guessing...';
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.
    backgroundColor = '#222';
    document.querySelector('.number').style.width = 
    '15rem'; 
});
