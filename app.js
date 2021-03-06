'use strict';

const btnRoll = document.querySelector('.btn--roll');
const dice = document.querySelector('.dice');
const currentScoreEl01 = document.getElementById('current--1');
const currentScoreEl0 = document.getElementById('current--0');
const scoreEl1 = document.getElementById('score--1');
const scoreEl0 = document.getElementById('score--0');
const btnHold = document.querySelector('.btn--hold');
const player1El = document.querySelector('.player--0');
const player0El = document.querySelector('.player--1');
const btnNew = document.querySelector('.btn--new');

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
        playerSwitch();

    }

    
})



//hold button functionality

btnHold.addEventListener('click', function () {

    //1. add current score to active player's score

    scores[activePlayer] += theScore;
    document.getElementById(`current--${activePlayer}`).innerHTML = 0;
    

    // 2. check if player's score is >=100 finish the game

    if (scores[activePlayer] >= 100) {
        document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
        document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
        document.getElementById(`score--${activePlayer}`).innerHTML = 100;
        btnRoll.disabled = true;
        btnHold.disabled = true;
        dice.classList.add('hidden')
    } else {
        playerSwitch()
    }
    
    //3. if not switch to the next player
});




//4. new game button functionality;

btnNew.addEventListener('click', function () {
    scores[0] = 0;
    scores[1] = 0;
    theScore = 0;
    activePlayer = 0;

    currentScoreEl0.innerHTML = theScore;
    currentScoreEl01.innerHTML = theScore;
    scoreEl0.innerHTML = scores[0];
    scoreEl1.innerHTML = scores[1];

    player0El.classList.remove('player--winner');
    player1El.classList.remove('player--winner');
    player0El.classList.remove('player--active');
    player1El.classList.add('player--active');

    btnRoll.disabled = false;
    btnHold.disabled = false;
})



function playerSwitch() {
    document.getElementById(`score--${activePlayer}`).innerHTML = scores[activePlayer];
    document.querySelector(`.player--${activePlayer}`).classList.toggle('player--active');
    activePlayer = activePlayer === 0 ? 1 : 0;
    document.querySelector(`.player--${activePlayer}`).classList.toggle('player--active');
    theScore = 0;
}


