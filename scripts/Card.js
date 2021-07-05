import { elementsTemplate, picModal, picModalImage, picModalCaption, cardsContainer } from './Constants.js';
import { openPopup } from './index.js';
class Card {
    constructor(cardData, cardSelector) {
      this._cardName = cardData.name;
      this._cardAlt = cardData.alt;
      this._cardImgLink = cardData.link;
      this._cardSelector = cardSelector;
    }
    _getCard = () => {
        const cardItem = elementsTemplate.cloneNode(true);
        return cardItem;
    }
    createCard = () => {
        this._cardItem = this._getCard();
        this._cardItem.querySelector('.card__name').innerText = this._cardName;
        const cardImg = this._cardItem.querySelector('.card__image');
        cardImg.src = this._cardImgLink;
        cardImg.alt = this._cardAlt;
        this._setEventListeners();
        return this._cardItem;
    }
    _setEventListeners = () => {
        this._cardItem.querySelector('.card__delete-button').addEventListener('click',() => this._deleteCard());
        this._cardItem.querySelector('.card__like-btn').addEventListener('click', () => this._toggleLikeBtn());
        this._cardItem.querySelector('.card__image').addEventListener('click', () => this._openImgPopup());    
    }
    _openImgPopup = () => {
        picModalImage.src = this._cardImgLink;
        picModalCaption.textContent = this._cardName;
        picModalCaption.alt = this._cardName;
        openPopup(picModal);
    }
    _toggleLikeBtn = () => {
        this._cardItem.querySelector('.card__like-btn').classList.toggle('card__like-btn_active');
    }
    _deleteCard = () => {
        this._cardItem.remove();
    }
};

export default Card;