'use strict';

const btnRoll = document.querySelector('.btn--roll');
const dice = document.querySelector('.dice');
const currentScoreEl01 = document.getElementById('current--1');
const currentScoreEl0 = document.getElementById('current--0');
const scoreEl1 = document.getElementById('score--1');
const scoreEl0 = document.getElementById('score--0');

//resetting everything to default

scoreEl1.innerHTML = 0;
scoreEl0.innerHTML = 0;
dice.classList.add('hidden');


//roll btn functionality

btnRoll.addEventListener('click', function () {
    
    let diceRoll = Math.trunc(Math.random() * 6) + 1;

    dice.classList.remove('hidden');
    dice.src = `dice-${diceRoll}.png`;

    if (!diceRoll == 1) {
        
    }
})