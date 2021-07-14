'use strict';

export const Reason = Object.freeze({
    win : 'win',
    lose : 'lose',
    finish : 'finish'
})

export class GameBuilder{
    gameDuration(duration){
        this.gameDuration = duration;
        return this;
    }

    build() {
        return new Game(
            this.gameDuration
        )
    }
}

class Game{
    constructor(gameDuration){
        this.gameDuration = gameDuration;
        this.started = false;
        this.timer = undefined;
        this.level = 0;
    }
}