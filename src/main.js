'use strict';

import * as sound from './sound.js';

// game field
const startBtn = document.querySelector('.game__startBtn');
const startContent = document.querySelector('.game__overay');
const gameTimer = document.querySelector('.game__timer');
const gameField = document.querySelector('.game__field');
const bgImage = document.querySelector('.game__background__img');
const stageOneBg = 'img/game__field/stage0.jpg';
const stageTwoBg = 'img/game__field/stage1.jpg';
const stageThreeBg = 'img/game__field/stage2.jpg';

// popup
const popup = document.querySelector('.pop-up');
const popupBtn = document.querySelector('.pop-up__button');
const icon = popupBtn.querySelector('.fas');
const popup__msg = document.querySelector('.pop__up__message');

let started = false;
let timer = undefined;
const GAME_DURATION_SEC = 180;
let level = 0;

startBtn.addEventListener('click', startGame);

gameField.addEventListener('click', (e) => {
    if(started){
        findWally(e);
    }
    return;
});

popupBtn.addEventListener('click', () => {
    hidePopup();
    if(icon.classList.contains('fa-arrow-right')){
        ++level;
    }
    if(level == 3 && icon.classList.contains('fa-redo')){
        level = 0;
    }
    startGame();
});

function hidePopup(){
    popup.style.visibility = 'hidden';
}

function startGame() {
    started = true;
    initTimer();
    hideStartContent();
    setBackgroundImg();
    showGameTimer();
    sound.playBackground();
    startGameTimer();
}

function initTimer() {
    timer = undefined;
}

function setBackgroundImg(){
    if(level == 0) {
        bgImage.style.backgroundImage = `url(${stageOneBg})`;
    }
    if(level == 1){
        bgImage.style.backgroundImage = `url(${stageTwoBg})`;
    }
    if(level == 2){
        bgImage.style.backgroundImage = `url(${stageThreeBg})`;
    }
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
            sound.stopBackground();
            finishGame('lose');
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

function findWally(e){

    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    let x = e.clientX;
    let y = e.clientY;

    let pointX = Math.round(x / screenWidth * 100);
    let pointY = Math.round(y / screenHeight * 100);

    if(level == 0){
        if((pointX >= 86 && pointX < 89) && (pointY >= 90 && pointY < 97)){
            finishGame('win');
        }else {
            finishGame('lose');
        }
    }
    if(level == 1){
        if((pointX >= 48 && pointX < 50) && (pointY >= 48 && pointY < 52)){
            finishGame('win');
        }else {
            finishGame('lose');
        }
    }
    if(level == 2){
        if((pointX >= 62 && pointX < 64) && (pointY >= 38 && pointY < 45)){
            finishGame('finish');
        }else {
            finishGame('lose');
        }
    }
}

function stopGameTimer() {
    clearInterval(timer);
}

function finishGame(win){
    started = false;
    stopGameTimer();
    sound.stopBackground();
    if('win' || 'finish'){
        sound.playWin();
    }
    if('lose') {
        sound.playAlert();
    }
    showPopUpWithText(win);
}

function showPopUpWithText(win){
    popup.style.visibility = 'visible';
    let message;

    if(win == 'win'){
        icon.classList.add('fa-arrow-right');
        icon.classList.remove('fa-redo');
        message = `YOU WON🎉<br/>Next Level❓`;
    }
    if(win == 'lose') {
        icon.classList.add('fa-redo');
        icon.classList.remove('fa-arrow-right');
        message = `YOU LOST💩<br/>Replay❓`;
    }
    
    if(win == 'finish'){
        icon.classList.add('fa-redo');
        icon.classList.remove('fa-arrow-right');
        message = `YOU FINISH!👍 REPLAY?`;
    }
    popup__msg.innerHTML = `${message}`;
}