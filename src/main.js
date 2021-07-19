'use strict';
import PopUp from './popup.js';
import Game from './game.js';

const gameFinishBanner = new PopUp();
const game = new Game(150);

gameFinishBanner.setClickListner((button) => {
    game.onItemClick(button);
});

game.setGameStopListener((reason) => {
    console.log(reason);
});