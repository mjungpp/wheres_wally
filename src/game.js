'use strict';
import * as sound from './sound.js';
import Field from './field.js';

export default class Game{
    constructor(gameDuration){
        this.gameDuration = gameDuration;
        this.gameTimer = document.querySelector('.game__timer');
        this.gameField = new Field();
        this.gameField.setClickListener(this.onFieldClick);
        this.started = false;
        this.timer = undefined;
        this.level = 0;
        this.startBtn = document.querySelector('.game__startBtn');
        this.startBtn.addEventListener('click', this.start);
    }

    onFieldClick = (stage, win) => {
        if(!this.started){
            return;
        }
        if(this.level == 0){
            if(stage == 'first' && win == 'win'){
                this.finish('win');
            }else if(stage == 'first' && win == 'lose'){
                this.finish('lose');
            }
        }
        if(this.level == 1){
            if(stage == 'second' && win == 'win'){
                this.finish('win');
            }else if(stage == 'second' && win == 'lose'){
                this.finish('lose');
            }
        }
        if(this.level == 2){
            if(stage == 'third' && win == 'win'){
                this.finish('finish');
            }else if(stage == 'third' && win == 'lose'){
                this.finish('lose');
            }
        }
    }
    
    onItemClick = (button) => {
        if(button == 'next'){
            ++this.level;
        }
        if(button == 'finish'){
            this.level = 0;
        }
        this.start();
    }

    setGameStopListener(onGameStop){
        this.onGameStop = onGameStop;
    }
    
    start = () => {
        this.started = true;
        this.initTimer();
        this.gameField.hideStartContent();
        this.setBackgroundImg();
        this.showTimer();
        sound.playBackground();
        this.startTimer();
    }
    
    finish(win){
        this.started = false;
        this.stopTimer();
        sound.stopBackground();
        if(win == 'win' || win == 'finish'){
            sound.playWin();
        }
        if(win == 'lose') {
            sound.playAlert();
        }
        this.onGameStop && this.onGameStop(win);
    }
    
    initTimer(){
        this.timer = undefined;
    }

    setBackgroundImg(){
        let imgPath = `url(img/game__field/stage${this.level}.jpg)`;
        this.gameField.setBackgroundImage(imgPath);
    }

    showTimer() {
        this.gameTimer.style.visibility = 'visible';
    }

    startTimer() {
        let remainingTimeSec = this.gameDuration;
        this.updateTimerText(remainingTimeSec);
        this.timer = setInterval(() => {
            if(remainingTimeSec <= 0) {
                clearInterval(this.timer);
                sound.stopBackground();
                this.finish('lose');
                return;
            }
            this.updateTimerText(--remainingTimeSec);
        }, 1000);
    }

    updateTimerText(time) {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        this.gameTimer.innerHTML = `${minutes}:${seconds}`;
    }

    stopTimer() {
        clearInterval(this.timer);
    }
}