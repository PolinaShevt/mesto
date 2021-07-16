import Popup from './Popup.js';
class PopupWithImage extends Popup{
    constructor(popupSelector){
        super(popupSelector);
        this._cardPicture = this._popupSelector.querySelector('.popup__image');
        this._cardCaption = this._popupSelector.querySelector('.popup__caption');
    }
    open(link, caption) {
        super.open();
        this._cardPicture.src = link;
        this._cardCaption.textContent = caption;
    }

}
export default PopupWithImage;