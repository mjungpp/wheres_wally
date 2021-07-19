'use strict';

export default class PopUp{
    constructor(){
        this.popup = document.querySelector('.pop-up');
        this.popupBtn = document.querySelector('.pop-up__button');
        this.icon = this.popupBtn.querySelector('.fas');
        this.popup__msg = document.querySelector('.pop__up__message');
        this.popupBtn.addEventListener('click', () => {
            this.hide();
            if(this.icon.classList.contains('fa-step-forward')){
                this.onItemClick && this.onItemClick('next');
            }
            if(this.icon.classList.contains('fa-redo')){
                this.onItemClick && this.onItemClick('replay');
            }
            if(this.icon.classList.contains('fa-fast-backward')){
                this.onItemClick && this.onItemClick('finish');
            }
        });
    }
    setClickListner(onItemClick){
        this.onItemClick = onItemClick;
    }

    showWithText(reason, message){
        this.popup.style.visibility = 'visible';

        if(reason == 'win'){
            this.icon.classList.add('fa-step-forward');
            this.icon.classList.remove('fa-redo');
        }
        if(reason == 'lose') {
            this.icon.classList.add('fa-redo');
            this.icon.classList.remove('fa-step-forward');
        }
        
        if(reason == 'finish'){
            this.icon.classList.add('fa-fast-backward');
            this.icon.classList.remove('fa-step-forward');
        }
        this.popup__msg.innerHTML = `${message}`;
    }

    hide(){
        this.popup.style.visibility = 'hidden';
    }
}