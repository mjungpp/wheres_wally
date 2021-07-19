'use strict';
import PopUp from './popup.js';
import { GameBuilder,  Reason } from './game.js';

const gameFinishBanner = new PopUp();
const game = new GameBuilder()
.withGameDuration(3)
.build();

game.setGameStopListener((reason) => {
    console.log(reason);
    let message;
    switch(reason){
        case Reason.win :
            message = `YOU WON🎉<br/>Next Level❓`;
            break;
        case Reason.lose :
            message = `YOU LOST💩<br/>Replay❓`;
            break;
        case Reason.finish :
            message = `YOU FINISH!👍 REPLAY?`;
            break;
        default :
            throw new Error('not valid reason');
    }
    gameFinishBanner.showWithText(reason, message);
});

gameFinishBanner.setClickListner((button) => {
    game.onItemClick(button);
});

