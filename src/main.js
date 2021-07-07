'use strict';

const startBtn = document.querySelector('.game__startBtn');
const backgroundTransparent =
startBtn.addEventListener('click', () => {
    if(started){
        stopGame();
    }else {
        startGame();
    }
});

function startGame() {
    started = true;
    hideStartContent();
}

function hideStartContent() {

}

function stopGame() {
    started = false;
}