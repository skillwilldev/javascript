'use strict';
const MESSAGES = {
    noInput: '⛔️ No number!',
    tooHigh: '📈 Too high!',
    tooLow: '📉 Too low!',
    correct: '🎉 Correct Number!',
    gameOver: '💥 You lost the game!',
    start: 'Start guessing...',
};

const msg = document.querySelector('.message');
const number = document.querySelector('.number');
const body = document.querySelector('body');
const gameScore = document.querySelector('.score');
const hScore = document.querySelector('.highscore');
const gameGuess = document.querySelector('.guess');

const maxVal = document.querySelector('.between .max');

const btnCheck = document.querySelector('.check');
const btnAgain = document.querySelector('.again');

const gameTo = 10; // თამაში სადამდეა

let secretNumber = Math.trunc(Math.random() * gameTo) + 1;
let score = 20;
let highscore = 0;


maxVal.textContent = gameTo;

const displayMessage = function (message) {
    msg.textContent = message;
};

const handleCheck = function () {
    const guess = Number(gameGuess.value);

    if (!guess) {
        displayMessage(MESSAGES.noInput);
        return;
    }

    if (guess === secretNumber) {
        displayMessage(MESSAGES.correct);
        number.textContent = secretNumber;
        body.style.backgroundColor = '#60b347';
        number.style.width = '30rem';

        if (score > highscore) {
            highscore = score;
            hScore.textContent = highscore;
        }
        return;
    }

    if (score > 1) {
        displayMessage(guess > secretNumber ? MESSAGES.tooHigh : MESSAGES.tooLow);
        score--;
        gameScore.textContent = score;
    } else {
        displayMessage(MESSAGES.gameOver);
        gameScore.textContent = 0;
    }
};

const startAgain = function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * gameTo) + 1;

    displayMessage(MESSAGES.start);
    gameScore.textContent = score;
    number.textContent = '?';
    gameGuess.value = '';
    body.style.backgroundColor = '#222';
    number.style.width = '15rem';
};

btnCheck.addEventListener('click', handleCheck);
btnAgain.addEventListener('click', startAgain);