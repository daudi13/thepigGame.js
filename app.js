'use strict';

const btnRoll = document.querySelector('.btn--roll');
const dice = document.querySelector('.dice');
const currentScoreEl01 = document.getElementById('current--1');
const currentScoreEl0 = document.getElementById('current--0');
const scoreEl1 = document.getElementById('score--1');
const scoreEl0 = document.getElementById('score--0');

//resetting everything to default

scoreEl0.innerHTML = 0;
scoreEl1.innerHTML = 0;
dice.classList.add('hidden');

const scores = new Array(0, 0);
let theScore = 0
let activePlayer = 0;



//roll btn functionality

btnRoll.addEventListener('click', function () {
    let diceRoll = Math.trunc(Math.random() * 6) + 1;
    dice.classList.remove('hidden');
    dice.src = `dice-${diceRoll}.png`;

    if (diceRoll !== 1) {
        theScore = theScore + diceRoll;
        document.getElementById(`current--${activePlayer}`).innerHTML = theScore;

    } else {
        document.getElementById(`current--${activePlayer}`).innerHTML = 0;
        document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
        activePlayer = activePlayer === 1 ? 0 : 1;
        theScore = 0;
        document.querySelector(`.player--${activePlayer}`).classList.add('player--active');
    }
})