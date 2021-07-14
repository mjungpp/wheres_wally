'use strict';

export default class Field {
    constructor(){
        this.gameField = document.querySelector('.game__field');
        this.bgImage = document.querySelector('.game__background__img');
        this.stageOneBg = 'img/game__field/stage0.jpg';
        this.stageTwoBg = 'img/game__field/stage1.jpg';
        this.stageThreeBg = 'img/game__field/stage2.jpg';
        this.gameField.addEventListener('click', this.onClick);
    }

    onClick(event) {
        
    }
}