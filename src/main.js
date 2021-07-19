'use strict';
import PopUp from './popup.js';
import Game from './game.js';

const gameFinishBanner = new PopUp();
gameFinishBanner.setClickListner((button) => {
    onItemClick(button);
});

function onItemClick(button) {
    if(button == 'next'){
        ++level;
    }
    if(button == 'finish'){
        level = 0;
    }
    startGame();
}

const game = new Game(150);
game.setGameStopListener((reason) => {
    console.log(reason);
});