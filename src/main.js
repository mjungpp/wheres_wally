'use strict';

import * as sound from './sound.js';
import PopUp from './popup.js';

// game field
const startBtn = document.querySelector('.game__startBtn');
const startContent = document.querySelector('.game__overay');
const gameTimer = document.querySelector('.game__timer');
const gameField = document.querySelector('.game__field');
const backgroundIme = document.querySelector('.game__background__img');

// game
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

const gameFinishBanner = new PopUp();
gameFinishBanner.setClickListner((button) => {
    onItemClick(button);
});

function onItemClick(button) {
    if(button == 'next'){
        ++level;
    }
    if(level == 2 && button == 'replay'){
        level = 0;
    }
    startGame();
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

// game.js
function initTimer() {
    timer = undefined;
}

// field.js
function setBackgroundImg(){
    let imgPath;
    if(level == 0) {
        imgPath = `url(img/game__field/stage0.jpg)`;
    }
    if(level == 1){
        imgPath = `url(img/game__field/stage1.jpg)`;
    }
    if(level == 2){
        imgPath = `url(img/game__field/stage2.jpg)`;
    }
    backgroundIme.style.backgroundImage = `${imgPath}`;
}

function hideStartContent() {
    startContent.remove();
}

function showGameTimer() {
    gameTimer.style.visibility = 'visible';
}

// game.js
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

// field.js
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

// game.js
function stopGameTimer() {
    clearInterval(timer);
}

// game.js
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
    gameFinishBanner.showWithText(win);
}