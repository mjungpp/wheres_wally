'use strict';

export default class Field {
    constructor(){
        this.startContent = document.querySelector('.game__overay');
        this.bgImage = document.querySelector('.game__background__img');
        this.field = document.querySelector('.game__field');
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

    onClick(event){

    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    let x = event.clientX;
    let y = event.clientY;

    let pointX = Math.round(x / screenWidth * 100);
    let pointY = Math.round(y / screenHeight * 100);

    if((pointX >= 86 && pointX < 89) && (pointY >= 90 && pointY < 97)){
        this.onFieldClick && this.onFieldClick('win');
    }else {
        this.onFieldClick && this.onFieldClick('lose');
    }
    if((pointX >= 48 && pointX < 50) && (pointY >= 48 && pointY < 52)){
        this.onFieldClick && this.onFieldClick('win');
    }else {
        this.onFieldClick && this.onFieldClick('lose');
    }
    if((pointX >= 62 && pointX < 64) && (pointY >= 38 && pointY < 45)){
        this.onFieldClick && this.onFieldClick('finish');
    }else {
        this.onFieldClick && this.onFieldClick('lose');
    }
    }
}