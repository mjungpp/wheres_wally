'use strict';

export default class PopUp{
    constructor(){
        this.popup = document.querySelector('.pop-up');
        this.popupBtn = document.querySelector('.pop-up__button');
        this.icon = this.popupBtn.querySelector('.fas');
        this.popup__msg = document.querySelector('.pop__up__message');
        this.popupBtn.addEventListener('click', (event) => {
            this.onClick && this.onClick(event);
            this.hide();
        });
    }
    setClickListner(onClick){
        this.onClick= onClick;
    }

    hide(){
        this.popup.style.visibility = 'hidden';
    }

    onClick(event){

    }

}