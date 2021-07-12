'use strict';

const startBtn = document.querySelector('.game__startBtn');
const startContent = document.querySelector('.overay');
const gameTimer = document.querySelector('.game__timer');
const gameField = document.querySelector('.game__field');
const bgSound = new Audio('./sound/bg.mp3');
const screenWidth = window.innerWidth;
const screenHeight = window.innerHeight;

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
            finishGame(lose);
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

    let x = event.clientX;
    let y = event.clientY;

    let wallyX = Math.round(x / screenWidth * 100);
    let wallyY = Math.round(y / screenHeight * 100);

    if(wallyX >= 77 && wallyX <= 78 && wallyY >= 48 && wallyY <= 51){
        gameFinish(win);
    }else {
        gameFinish(lose);
    }
}

function stopGameTimer() {
    sound.pause();
}

function finishGame(win){
    started = false;
    showPopUpWithText();

}

function showPopUpWithText(){
    
}