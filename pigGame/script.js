"use strict";

const score0El = document.getElementById("score--0");
const score1El = document.getElementById("score--1");
const current0El = document.getElementById("current--0");
const current1El = document.getElementById("current--1");

const diceEl = document.querySelector(".dice");
const rollDiceBtn = document.querySelector(".btn--roll");
const newGameBtn = document.querySelector(".btn--new");
const holdBtn = document.querySelector(".btn--hold");

const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");

let scores, currentScore, activePlayer, playig;

const init = function () {
    scores = [0, 0];
    currentScore = 0;
    activePlayer = 0;
    playig = true;
    diceEl.classList.add("hidden");

    score0El.textContent = 0;
    score1El.textContent = 0;

    current0El.textContent = 0;
    current1El.textContent = 0;

    player0El.classList.remove("player--winner");
    player1El.classList.remove("player--winner");

    player0El.classList.add("player--active");
    player1El.classList.remove("player--active");
}

init();

const switchPlayer = function () {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0El.classList.toggle("player--active");
    player1El.classList.toggle("player--active");
}


rollDiceBtn.addEventListener("click", function () {
    if (playig) {
        const dice = Math.trunc(Math.random() * 6 + 1);

        diceEl.classList.remove("hidden");
        diceEl.src = `dice-${dice}.png`;

        if (dice !== 1) {
            currentScore += dice;
            document.getElementById(`current--${activePlayer}`).textContent = currentScore;
        } else {
            switchPlayer();
        }
    }
});

holdBtn.addEventListener("click", function () {
    if (playig) {
        scores[activePlayer] += currentScore;
        document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];

        if (scores[activePlayer] >= 100) {
            playig = false;
            diceEl.classList.add("hidden");
            document.querySelector(`.player--${activePlayer}`).classList.add("player--winner");
            document.querySelector(`.player--${activePlayer}`).classList.remove("player--active");
        } else {
            switchPlayer();
        }
    }
});

newGameBtn.addEventListener("click", init);
