'use strict';
import PopUp from './popup.js';
import GameBuilder from './game.js';

const gameFinishBanner = new PopUp();
const game = new GameBuilder()
.withGameDuration(150)
.build();

gameFinishBanner.setClickListner((button) => {
    game.onItemClick(button);
});

game.setGameStopListener((reason) => {
    console.log(reason);
    let message;
    switch(reason){
        case 'win' :
            message = `YOU WON🎉<br/>Next Level❓`;
            break;
        case 'lose' :
            message = `YOU LOST💩<br/>Replay❓`;
            break;
        case 'finish' :
            message = `YOU FINISH!👍 REPLAY?`;
            break;
        default :
            throw new Error('not valid reason');
    }
    gameFinishBanner.showWithText(reason, message);
});
