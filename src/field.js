'use strict';
import { Reason } from './game.js';

export const Stage = Object.freeze({
    first : 'first',
    second : 'second',
    third : 'third',
});

export class Field {
    constructor(){
        this.startContent = document.querySelector('.game__overay');
        this.bgImage = document.querySelector('.game__background__img');
        this.field = document.querySelector('.game__field');
        this.soundStop = document.querySelector('.game__sound__stop');
        this.field.addEventListener('click', this.onClick);
    }

    setClickListener(onFieldClick) {
        this.onFieldClick = onFieldClick;
    }

    hideStartContent(){
        this.startContent.remove();
    }

    setBackgroundImage(imgPath){
        this.bgImage.style.backgroundImage = `${imgPath}`;
    }

    onClick = (event) =>{

    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    let x = event.clientX;
    let y = event.clientY;

    let pointX = Math.round(x / screenWidth * 100);
    let pointY = Math.round(y / screenHeight * 100);

    if((pointX >= 86 && pointX < 89) && (pointY >= 81 && pointY < 86)){
        this.onFieldClick && this.onFieldClick(Stage.first, Reason.win);
    }else {
        this.onFieldClick && this.onFieldClick(Stage.first, Reason.lose);
    }
    if((pointX == 49) && (pointY >= 43 && pointY < 47)){
        this.onFieldClick && this.onFieldClick(Stage.second, Reason.win);
    }else {
        this.onFieldClick && this.onFieldClick(Stage.second, Reason.lose);
    }
    if((pointX >= 62 && pointX < 64) && (pointY >= 35 && pointY < 41)){
        this.onFieldClick && this.onFieldClick(Stage.third, Reason.win);
    }else {
        this.onFieldClick && this.onFieldClick(Stage.third, Reason.lose);
        }
    }
}