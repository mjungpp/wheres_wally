const bgSound = new Audio('./sound/bg.mp3');
const winSound = new Audio('./sound/game_win.mp3');
const alertSound = new Audio('./sound/alert.wav');

export function playBackground(){
    playSound(bgSound);
}

export function playWin(){
    playSound(winSound);
}

export function playAlert(){
    playSound(alertSound);
}

export function stopBackground(){
    stopSound(bgSound);
}

function playSound(sound){
    sound.currentTime = 0;
    sound.play();
}

function stopSound(sound){
    sound.pause();
}