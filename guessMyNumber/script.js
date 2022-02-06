'use strict'

let secretNumber = Math.trunc(Math.random() * 20);

let score = 20;

document.querySelector('.check').addEventListener("click",
    function () {
        const guess = Number(document.querySelector('.guess').value);

        if (!guess) {
            document.querySelector('.message').textContent = "No number !";
        } else if (guess === secretNumber) {
            document.querySelector('.message').textContent = "Correct Number !";

            document.querySelector('.number').textContent = secretNumber;

            document.querySelector('body').style.backgroundColor = "#60b347";
            document.querySelector('.number').style.width = "30rem";
        } else if (guess > secretNumber) {
            if (score > 1) {
                document.querySelector('.message').textContent = "Too High !";
                score--;
                document.querySelector('.score').textContent = score;

            } else {
                document.querySelector('.message').textContent = "Game Over !";
            }
        } else if (guess < secretNumber) {
            if (score > 1) {
                document.querySelector('.message').textContent = "Too Low !";
                score--;
                document.querySelector('.score').textContent = score;

            } else {
                document.querySelector('.message').textContent = "Game Over !";
            }
        }
    }
);

document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20);

    document.querySelector('.score').textContent = score;
    document.querySelector('.message').textContent = "Start guessing...";
    document.querySelector('.guess').value = '';
    document.querySelector('.number').textContent = '?';

    document.querySelector('body').style.backgroundColor = "#222";
    document.querySelector('.number').style.width = "15rem";
});
