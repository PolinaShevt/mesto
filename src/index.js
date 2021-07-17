import UserInfo from "./scripts/UserInfo";
import PopupWithForm from "./scripts/PopupWithForm.js";
import PopupWithImage from "./scripts/PopupWithImage.js";
import Section from './scripts/Section.js';
import './styles/index.css';
import FormValidator from "./scripts/FormValidator.js";
import Card from "./scripts/Card.js";
import { config, initialCards, openEditModalButton, 
  openAddCardModal,  newPlaceName, 
  newPhotoLink } from './scripts/Constants.js';


//экзмепляр класса для попапа просмотра картинки
const imagePopup = new PopupWithImage('.popup_type_photoshow');
imagePopup.setEventListeners();



//функция создания экземпляра карточки
function generateCard(item) {
  const card = new Card(item, '.list-item-template', 
    () => {
      imagePopup.open(item.link, item.name);
    }
  );
  const cardList = card.createCard();
  return cardList;
}



//экземпляры классов валидации для двух форм
const profileEditFormValidator = new FormValidator(config, '#popup__form-type-edit');
profileEditFormValidator.enableValidation(); 

const addCardFormValidator = new FormValidator(config, '#popup__form-type-add');
addCardFormValidator.enableValidation();



//экземпляр класса для контейнера карточек
const cardsList = new Section({
  items: initialCards,
  renderer: (item) => {
    cardsList.addItem(generateCard(item));
  }
},
  '.cards'
)
cardsList.renderItems();



//экземпляры класса для форм
const editFormPopup = new PopupWithForm('.popup_type_edit', (data) => {
  submitEditModal(data);
});
editFormPopup.setEventListeners();
const addFormPopup = new PopupWithForm('.popup_type_add', (data) => {
  submitAddModal(data);
});
addFormPopup.setEventListeners();


const userInfo = new UserInfo('.profile__title', '.profile__subtitle');

function cardCreation(item) {
  const newCard = generateCard(item);
  cardsList.addItem(newCard);
}

function submitEditModal(data) {
  userInfo.setUserInfo(data);
  editFormPopup.close();
}

function submitAddModal(data) {
   const newCardItem = {
      name: data.name,
      link: data.link,
      alt: data.name,
   }
   cardCreation(newCardItem);
}

//открытие модальных окон
openEditModalButton.addEventListener('click', () => {
  editFormPopup.open();
  profileEditFormValidator.resetValidation();
  profileEditFormValidator.enableSubmitButton();//чтобы кнопка была активной при открытии
});
openAddCardModal.addEventListener('click', () => {
  addFormPopup.open();
  newPlaceName.value = '';
  newPhotoLink.value = '';
  addCardFormValidator.resetValidation();
  addCardFormValidator.disableSubmitButton();//чтобы кнопка была неактивной после ввода валидных данных и закрытия попапа
});
