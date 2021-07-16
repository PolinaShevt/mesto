import { picModal, picModalImage, picModalCaption } from './Constants.js';
import { openPopup } from '../utils/utils.js';
class Card {
    constructor(cardData, cardSelector, handleCardClick) {
      this._cardName = cardData.name;
      this._cardAlt = cardData.alt;
      this._cardImgLink = cardData.link;
      this._cardSelector = cardSelector;
      this._handleCardClick = handleCardClick;
    }
    _getCard = () => {
        const cardItem = document.querySelector(this._cardSelector).content.querySelector('.card').cloneNode(true);
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
        this._cardItem.querySelector('.card__image').addEventListener('click', () => this._handleCardClick());
    }
    _toggleLikeBtn = () => {
        this._cardItem.querySelector('.card__like-btn').classList.toggle('card__like-btn_active');
    }
    _deleteCard = () => {
        this._cardItem.remove();
    }
};

export default Card;
