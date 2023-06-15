'use strict';

let secretNumber = Math.trunc(Math.random() * 20);
let score = 20;
let highScore = 0;

document.querySelector('.check').addEventListener
    ('click', function () {
        const guess = Number(document.querySelector('.guess').value);

        if (!guess) {
            document.querySelector('.message').textContent = 'No guess made !!.';
        }

        else if (guess == secretNumber) {
            document.querySelector('.message').textContent = 'Correct guess made !!.';
            document.querySelector('.number').textContent = guess;
            document.querySelector('body').style.backgroundColor = '#60b347';
            document.querySelector('.number').style.width = '30rem';

            if (score > highScore) {
                highScore = score;
                document.querySelector('.highscore').textContent = highScore;
            }
        }

        else if (guess < secretNumber) {
            document.querySelector('.message').textContent = 'The Number is higher.';
            if (score > 0) {
                score -= 1;
                document.querySelector('.score').textContent = score;
            }
            else {
                document.querySelector('.message').textContent = 'Please reset the game';
            }
        }

        else if (guess > secretNumber) {
            document.querySelector('.message').textContent = 'The Number is lower.';
            if (score > 0) {
                score -= 1;
                document.querySelector('.score').textContent = score;
            }
            else {
                document.querySelector('.message').textContent = 'Please reset the game';
            }
        }

        if (score === 0) {
            document.querySelector('.message').textContent = 'Please reset the game by clicking Play Again button';
        }

    });      // add event listener to check when any click event happens and print the value entered in the input field into the console log

document.querySelector('.again').addEventListener
    ('click', function () {
        score = 20;
        secretNumber = Math.trunc(Math.random() * 20) + 1;
        document.querySelector('.message').textContent = "Start guessing...";
        document.querySelector('.score').textContent = score;
        document.querySelector('.number').textContent = "?";
        document.querySelector('.guess').value = '';
        document.querySelector('body').style.backgroundColor = '#222';
        document.querySelector('.number').style.width = '15rem';
    });