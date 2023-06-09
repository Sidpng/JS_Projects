'use strict';

const secretNumber = Math.trunc(Math.random() * 20);
let score = 20;

document.querySelector('.check').addEventListener
    ('click', function () {
        const guess = Number(document.querySelector('.guess').value);
        console.log(guess);

        if (!guess) {
            document.querySelector('.message').textContent = 'No guess made !!.';
        }

        else if (guess == secretNumber) {
            document.querySelector('.message').textContent = 'Correct guess made !!.';
        }

        else if (guess < secretNumber) {
            document.querySelector('.message').textContent = 'The Number is higher.';
            if (score > 0) {
                score--;
                document.querySelector('.score').textContent = score;
            }
            else {
                document.querySelector('.message').textContent = 'Please reset the game';
            }
        }

        else if (guess > secretNumber) {
            document.querySelector('.message').textContent = 'The Number is lower.';
            if (score > 0) {
                score--;
                document.querySelector('.score').textContent = score;
            }
            else {
                document.querySelector('.message').textContent = 'Please reset the game';
            }
        }

    });      // add event listener to check when any click event happens and print the value entered in the input field into the console log
