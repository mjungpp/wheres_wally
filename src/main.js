'use strict';

const startBtn = document.querySelector('.game__startBtn');
const startContent = document.querySelector('.overay');
const gameTimer = document.querySelector('.game__timer');
const gameField = document.querySelector('.game__field');

const bgSound = new Audio('./sound/bg.mp3');

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

gameField.addEventListener('click', (e) => {
    findWally(e);
})

function startGame() {
    started = true;
    initGame();
    hideStartContent();
    showGameTimer();
    playSound(bgSound);
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

function playSound(sound) {
    sound.currentTime = 0;
    sound.play();
}

function findWally(event){
    console.log(event.clientX, event.clientY);
}

function stopGameTimer() {
    sound.pause();
}

function finishGame(){
    started = false;
    showPopUpWithText();

}

function showPopUpWithText(){
    
}