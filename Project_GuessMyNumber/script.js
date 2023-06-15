'use strict';

let secretNumber = Math.trunc(Math.random() * 20);
console.log(secretNumber);
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
        else if (guess !== secretNumber) {
            if (score > 1) {
                document.querySelector('.message').textContent = guess < secretNumber
                    ? 'The Number is higher.' : 'The Number is lower.';
                score--;
                document.querySelector('.score').textContent = score;
            }
            else {
                document.querySelector('.message').textContent = 'Please reset the game';
                document.querySelector('.score').textContent = score;
            }
        }
    });

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