'use strict';

import * as sound from './sound.js';
import PopUp from './popup.js';
import Field from './field.js';

const startBtn = document.querySelector('.game__startBtn');
const gameTimer = document.querySelector('.game__timer');

// game
let started = false;
let timer = undefined;
const GAME_DURATION_SEC = 150;
let level = 0;

startBtn.addEventListener('click', startGame);

const gameFinishBanner = new PopUp();
gameFinishBanner.setClickListner((button) => {
    onItemClick(button);
});

const gameField = new Field();
gameField.setClickListener(onFieldClick);
function onFieldClick(win){
    if(!started){
        return;
    }
    if(level == 0){
        if(win == 'win'){
            finishGame('win');
        }else {
            finishGame('lose');
        }
    }
    if(level == 1){
        if(win == 'win'){
            finishGame('win');
        }else{
            finishGame('lose');
        }
    }
    if(level == 2){
        if(win == 'finish'){
            finishGame('finish');
        }else {
            finishGame('lose');
        }
    }
}

function onItemClick(button) {
    if(button == 'next'){
        ++level;
    }
    if(button == 'finish'){
        level = 0;
    }
    startGame();
}

function startGame() {
    started = true;
    initTimer();
    gameField.hideStartContent();
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
    let imgPath = `url(img/game__field/stage${level}.jpg)`;
    gameField.setBackgroundImage(imgPath);
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

// game.js
function stopGameTimer() {
    clearInterval(timer);
}

// game.js
function finishGame(win){
    started = false;
    stopGameTimer();
    sound.stopBackground();
    if(win == 'win' || win == 'finish'){
        sound.playWin();
    }
    if(win == 'lose') {
        sound.playAlert();
    }
    gameFinishBanner.showWithText(win);
    return;
}