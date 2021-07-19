'use strict';
import * as sound from './sound.js';
import { Field,  Stage } from './field.js';

export const Reason = Object.freeze({
    win : 'win',
    lose : 'lose',
    finish : 'finish',
});

// builder pattern
export class GameBuilder {
    withGameDuration(duration){
        this.gameDuration = duration;
        return this;
    }

    build() {
        return new Game(
            this.gameDuration
        );
    }
}

class Game{
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

    onFieldClick = (stage, reason) => {
        if(!this.started){
            return;
        }

        if(this.level == 0){
            if(stage == Stage.first && reason == Reason.win){
                this.finish(Reason.win);
            }else if(stage == Stage.first && reason == Reason.lose){
                this.finish(Reason.lose);
            }
        }
        if(this.level == 1){
            if(stage == Stage.second && reason == Reason.win ){
                this.finish(Reason.win);
            }else if(stage == Stage.second && reason == Reason.lose){
                this.finish(Reason.lose);
            }
        }
        if(this.level == 2){
            if(stage == Stage.third && reason == Reason.win){
                this.finish(Reason.finish);
            }else if(stage == Stage.third && reason == Reason.lose ){
                this.finish(Reason.lose);
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
        console.log(this.level);
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
    
    finish(reason){
        this.started = false;
        this.stopTimer();
        sound.stopBackground();
        this.onGameStop && this.onGameStop(reason);
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
                this.finish(Reason.lose);
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