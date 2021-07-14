'use strict';

export default class PopUp{
    constructor(){
        this.popup = document.querySelector('.pop-up');
        this.popupBtn = document.querySelector('.pop-up__button');
        this.icon = popupBtn.querySelector('.fas');
        this.popup__msg = document.querySelector('.pop__up__message');
        this.popupBtn.addEventListener('click', () => {
            this.onClick && this.onClick();
            hide();
        });
    }
    setClickListner(onClick){
        this.onClick= onClick;
    }

    hide(){
        this.popup.style.visibility = 'hidden';
    }

    showWithText(message, win){
        this.popup.style.visibility = 'visible';

        if(win){
            this.icon.classList.remove('fa-redo');
            this.icon.classList.add('fa-arrow-right');
        }
        
        if(lose){
            this.icon.classList.add('fa-redo');
            this.icon.classList.remove('fa-arrow-right');
        }
        if(finish){
            this.icon.classList.add('fa-redo');
            this.icon.classList.remove('fa-arrow-right');
        }
        this.popup__msg.innerHTML = `${message}`;
    }
}