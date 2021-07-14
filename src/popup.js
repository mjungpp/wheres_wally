'use strict';

export default class PopUp {
    constructor() {
        this.popup = document.querySelector('.pop-up');
        this.popupBtn = document.querySelector('.pop-up__button');
        this.icon = popupBtn.querySelector('.fas');
        this.popup__msg = document.querySelector('.pop__up__message');
    }

    showWithText(text){
        this.popup__msg.innerText = `${text}`;
        this.popup.style.visibility = 'visible';
    }
}