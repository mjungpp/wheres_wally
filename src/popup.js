'use strict';

export default class PopUp{
    constructor(){
        this.popup = document.querySelector('.pop-up');
        this.popupBtn = document.querySelector('.pop-up__button');
        this.icon = this.popupBtn.querySelector('.fas');
        this.popup__msg = document.querySelector('.pop__up__message');

        this.popupBtn.addEventListener('click', () => {
            this.hide();
            if(this.icon.classList.contains('fa-arrow-right')){
                this.onItemClick && this.onItemClick('next');
            }
            if(this.icon.classList.contains('fa-redo')){
                this.onItemClick && this.onItemClick('replay');
            }
        });
    }
    setClickListner(onItemClick){
        this.onItemClick = onItemClick;
    }

    showWithText(win){
        this.popup.style.visibility = 'visible';
        let message;

        if(win == 'win'){
            this.icon.classList.add('fa-arrow-right');
            this.icon.classList.remove('fa-redo');
            message = `YOU WON🎉<br/>Next Level❓`;
        }
        if(win == 'lose') {
            this.icon.classList.add('fa-redo');
            this.icon.classList.remove('fa-arrow-right');
            message = `YOU LOST💩<br/>Replay❓`;
        }
        
        if(win == 'finish'){
            this.icon.classList.add('fa-redo');
            this.icon.classList.remove('fa-arrow-right');
            message = `YOU FINISH!👍 REPLAY?`;
        }
        this.popup__msg.innerHTML = `${message}`;
    }

    hide(){
        this.popup.style.visibility = 'hidden';
    }
}