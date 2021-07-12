'use strict';

const startBtn = document.querySelector('.game__startBtn');
const startContent = document.querySelector('.overay');
const gameTimer = document.querySelector('.game__timer');
const gameField = document.querySelector('.game__field');
const bgSound = new Audio('./sound/bg.mp3');
const winSound = new Audio('./sound/game_win.mp3');
const loseSound = new Audio('./sound/alert.wav');
const popup = document.querySelector('.pop-up');
const popup__msg = document.querySelector('.pop__up__message');
const screenWidth = window.innerWidth;
const screenHeight = window.innerHeight;

let started = false;
let timer = undefined;
const GAME_DURATION_SEC = 10;

startBtn.addEventListener('click', () => {
    if(started){
        stopGame();
    }else {
        startGame();
    }
});

gameField.addEventListener('click', (e) => {
    if(started){
        findWally(e);
    }
    return;
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
            stopSound(bgSound);
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

    console.log(wallyX);
    console.log(wallyY);

    // 77 <= wallyX <= 78) && (48<= wallyY <= 51)
    if(wallyX <= 78){
        finishGame('win');
    }else {
        finishGame('lose');
    }
}

function stopSound(sound) {
    sound.pause();
}

function stopGameTimer() {
    clearInterval(timer);

}

function finishGame(win){
    started = false;
    stopGameTimer();
    stopSound(bgSound);
    showPopUpWithText(win ? 'YOU WON <br> Next Level?🎉' : 'YOU LOST 💩');
    if(win){
        playSound(winSound);
    }else {
        playSound(loseSound);
    }
}

function showPopUpWithText(message){
    popup.style.visibility = 'visible';
    popup__msg.innerHTML = `${message}`;
}