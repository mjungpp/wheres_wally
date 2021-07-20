'use strict';
import PopUp from './popup.js';
import * as sound from './sound.js';
import { GameBuilder,  Reason } from './game.js';

const gameFinishBanner = new PopUp();
const game = new GameBuilder()
.withGameDuration(150)
.build();

game.setGameStopListener((reason) => {
    let message;
    switch(reason){
        case Reason.win :
            message = `YOU WON🎉<br/>Next Level❓`;
            sound.playWin();
            break;
        case Reason.lose :
            message = `YOU LOST💩<br/>Replay❓`;
            sound.playAlert();
            break;
        case Reason.finish :
            message = `YOU FINISH!👍 REPLAY?`;
            sound.playWin();
            break;
        default :
            throw new Error('not valid reason');
    }
    gameFinishBanner.showWithText(reason, message);
});

gameFinishBanner.setClickListner((button) => {
    game.onItemClick(button);
});

