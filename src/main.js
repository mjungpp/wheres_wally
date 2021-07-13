'use strict';

// game field
const startBtn = document.querySelector('.game__startBtn');
const startContent = document.querySelector('.game__overay');
const gameTimer = document.querySelector('.game__timer');
const gameField = document.querySelector('.game__field');
const bgImage = document.querySelector('.game__background__img');
const stageOneBg = 'img/game__field/stage0.jpg';
const stageTwoBg = 'img/game__field/stage1.jpg';
const stageThreeBg = 'img/game__field/stage2.jpg';

// sound
const bgSound = new Audio('./sound/bg.mp3');
const winSound = new Audio('./sound/game_win.mp3');
const loseSound = new Audio('./sound/alert.wav');

// popup
const popup = document.querySelector('.pop-up');
const popupBtn = document.querySelector('.pop-up__button');
const icon = popupBtn.querySelector('.fas');
const popup__msg = document.querySelector('.pop__up__message');

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
    setBackground();
    showGameTimer();
    playSound(bgSound);
    startGameTimer();
}

function initTimer() {
    timer = undefined;
}

function setBackground(){
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

    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    let x = e.clientX;
    let y = e.clientY;

    let pointX = Math.round(x / screenWidth * 100);
    let pointY = Math.round(y / screenHeight * 100);

    if(level == 0){
        console.log(`wallyX : ${pointX}`);
        console.log(`wallyY : ${pointY}`);
        // if((pointX >= 78 && pointX < 80) && (pointY >= 48 && pointY < 52)){
        //     stopGame(true);
        // }else {
        //     stopGame(false);
        // }
        stopGame(true);
    }
    
    if(level == 1){
        // if((pointX >= 73 && pointX < 76) && (pointY >= 58 && pointY < 64)){
        //     stopGame(true);
        // }else {
        //     stopGame(false);
        // }
        stopGame(true);
    }
    
    if(level == 2){
        console.log(`wallyX : ${pointX}`);
        console.log(`wallyY : ${pointY}`);
        stopGame(true);
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
    }else {
        playSound(loseSound);
    }
    showPopUpWithText(win ? 'YOU WON🎉<br/>Next Level❓' : 'YOU LOST💩<br/>Replay❓', win);
}
function showPopUpWithText(message, win){
    popup.style.visibility = 'visible';
    if(level < 2){
        if(win){
            icon.classList.add('fa-arrow-right');
        }else {
            icon.classList.add('fa-redo');
        }
        popup__msg.innerHTML = `${message}`;
    // the end
    }else {
        started = false;
        icon.classList.add('fa-redo');
        popup__msg.innerHTML = `YOU FINISH!👍 REPLAY?`;
        
    }
}