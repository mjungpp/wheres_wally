'use strict';

const startBtn = document.querySelector('.game__startBtn');
const startContent = document.querySelector('.overay');
const gameTimer = document.querySelector('.game__timer');
let started = false;
let timer = undefined;
const GAME_DURATION_SEC = 150;

startBtn.addEventListener('click', () => {
    if(started){
        stopGame();
    }else {
        startGame();
    }
});

function startGame() {
    started = true;
    initGame();
    hideStartContent();
    showGameTimer();
    playSound();
    startGameTimer();
}

function initGame() {
    timer = undefined;
}

function hideStartContent() {
    startContent.remove();
}

function showGameTimer() {
    gameTimer.style.visibility = 'visible';
}

function startGameTimer() {
    let remainingTimeSec = GAME_DURATION_SEC;
    updateTimerText(remainingTimeSec);
    timer = setInterval(() => {
        if(remainingTimeSec <= 0) {
            clearInterval(timer);
            finishGame();
            return;
        }
        updateTimerText(--remainingTimeSec);
    }, 1000);
}

function updateTimerText(time) {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    gameTimer.innerHTML = `${minutes}:${seconds}`;
}

function stopGameTimer() {

}

function playSound() {

}

function finishGame(){
    started = false;

}