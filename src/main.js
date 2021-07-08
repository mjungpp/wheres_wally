'use strict';

const startBtn = document.querySelector('.game__startBtn');
const startContent = document.querySelector('.game__contents');
let started = false;
const gameTimer = document.querySelector('.game__timer');

startBtn.addEventListener('click', () => {
    if(started){
        stopGame();
    }else {
        startGame();
    }
});

function startGame() {
    started = true;
    console.log('start');
    hideStartContent();
    showGameTimer();
    playSound();
}

function hideStartContent() {
    startContent.remove();
}

function showGameTimer() {
    gameTimer.style.display = "block";
}

function stopGameTimer() {

}

function playSound() {

}

function stopGame() {
    started = false;
}