'use strict';

const startBtn = document.querySelector('.game__startBtn');
const startContent = document.querySelector('.game__overay');
const gameTimer = document.querySelector('.game__timer');
const gameField = document.querySelector('.game__field');
const bgImage = document.querySelector('.wally__background__img');
const stageTwoBg = 'img/game__field/stage1.jpg';
const stageThreeBg = 'img/game__field/stage2.jpg';
const bgSound = new Audio('./sound/bg.mp3');
const winSound = new Audio('./sound/game_win.mp3');
const loseSound = new Audio('./sound/alert.wav');
const popup = document.querySelector('.pop-up');
const popupBtn = document.querySelector('.pop-up__button');
const popup__msg = document.querySelector('.pop__up__message');
const screenWidth = window.innerWidth;
const screenHeight = window.innerHeight;

let started = false;
let timer = undefined;
const GAME_DURATION_SEC = 180;
let level = 0;

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
});

function startGame() {
    started = true;
    // bgImage.style.backgroundImage = `url(${stageTwoBg})`;
    initTimer();
    hideStartContent();
    showGameTimer();
    playSound(bgSound);
    startGameTimer();
}

function initTimer() {
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
            stopGame(lose);
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

function findWally(e){

    let x = e.clientX;
    let y = e.clientY;

    let pointX = Math.round(x / screenWidth * 100);
    let pointY = Math.round(y / screenHeight * 100);

    if(level == 0){
        if((pointX >= 78 && pointX < 80) && (pointY >= 48 && pointY < 52)){
            stopGame(true);
        }else {
            stopGame(false);
        }
    }
    
    if(level == 1){
        console.log(`wallyX : ${pointX}`);
        console.log(`wallyY : ${pointY}`);
    }
    
    if(level == 2){
        console.log(`wallyX : ${pointX}`);
        console.log(`wallyY : ${pointY}`);
    }
}

function stopSound(sound) {
    sound.pause();
}

function stopGameTimer() {
    clearInterval(timer);
}

function stopGame(win){
    started = false;
    stopGameTimer();
    stopSound(bgSound);
    if(win){
        playSound(winSound);
        ++level;
    }else {
        playSound(loseSound);
    }
    showPopUpWithText(win ? 'YOU WON🎉<br/>Next Level❓' : 'YOU LOST💩<br/>Replay❓', win);
}

function showPopUpWithText(message, win){
    popup.style.visibility = 'visible';

    const icon = popupBtn.querySelector('.fas');
    if(level < 2){
        if(win){
            icon.classList.add('fa-play');
            icon.classList.remove('fa-redo');
        }else {
            icon.classList.add('fa-redo');
            icon.classList.remove('fa-play');
        }
        popup__msg.innerHTML = `${message}`;
    // the end
    }else {
        popup__msg.innerHTML = `YOU FINISH!👍`;
    }
}