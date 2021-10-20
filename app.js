'use strict';

const btnRoll = document.querySelector('.btn--roll');
const dice = document.querySelector('.dice');
const currentScoreEl01 = document.getElementById('current--1');
const currentScoreEl0 = document.getElementById('current--0');
const scoreEl1 = document.getElementById('score--1');
const scoreEl0 = document.getElementById('score--0');
const btnHold = document.querySelector('.btn--hold');
const player1El = document.querySelector('.player--1');
const player0El = document.querySelector('.player--0');

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
        playerSwitch();
    }
})

//hold button functionality

btnHold.addEventListener('click', function () {

    //1. add current score to active player's score

    scores[activePlayer] += theScore;
    playerSwitch();


    // 2. check if player's score is >=100 finish the game

    
    if (document.getElementById(`score--${activePlayer}`).innerHTML >= 100) {
        document.getElementById(`score--${activePlayer}`).innerHTML = `WINNER!!`;
    }

    //3. if not switch to the next player
})

function playerSwitch() {
    document.getElementById(`score--${activePlayer}`).innerHTML = scores[activePlayer];
    document.querySelector(`.player--${activePlayer}`).classList.toggle('player--active');
    activePlayer = activePlayer === 0 ? 1 : 0;
    document.querySelector(`.player--${activePlayer}`).classList.toggle('player--active');
    theScore = 0;
}