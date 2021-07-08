import FormValidator from "./FormValidator.js";
import Card from "./Card.js";
import { config, initialCards, editModal, addCardModal, picModal, addForm, openEditModalButton, openAddCardModal, closeEditModalButton, closeAddCardModal, closePicModal, currentName, currentDescription, newName, newDescription, elementsTemplate,
  currentPlaceName,  currentPhotoLink, newPlaceName, newPhotoLink, editModalSubmitHandler, addModalSubmitHandler, picModalImage,
  picModalCaption, inputListEditModal, buttonElementEditModal, inputListAddModal, buttonElementAddModal, cardsContainer } from './Constants.js';
import { openPopup, closePopup, overlayHandler } from "../utils/utils.js";

const profileEditFormValidator = new FormValidator(config, '.popup_type_edit');
profileEditFormValidator.enableValidation();

const addCardFormValidator = new FormValidator(config, '.popup_type_add');
addCardFormValidator.enableValidation();


function addCard(item) {
  const card = new Card(item, '.list-item-template');
  const cardList = card.createCard();
  cardsContainer.prepend(cardList);
}

initialCards.forEach((item) => {
  addCard(item);
});

function submitEditModal(evt) {
  evt.preventDefault();
  currentName.textContent = newName.value;
  currentDescription.textContent = newDescription.value;
  closePopup(editModal);
}

function submitAddModal(evt) {
  evt.preventDefault();
   const newCardItem = {
      name: newPlaceName.value,
      link: newPhotoLink.value,
      alt: newPlaceName.value,
   }
  addCard(newCardItem);
  closePopup(addCardModal);
  addForm.reset();
}

addForm.addEventListener('submit', submitAddModal)

//открытие модальных окон
openEditModalButton.addEventListener('click', () => {
  openPopup(editModal);
  newName.value = currentName.textContent;  
  newDescription.value = currentDescription.textContent; 
  profileEditFormValidator.resetFormState();
  profileEditFormValidator.enableSubmitButton();//чтобы кнопка была активной при открытии
});
openAddCardModal.addEventListener('click', () => {
  openPopup(addCardModal)
  newPlaceName.value = '';
  newPhotoLink.value = '';
  addCardFormValidator.resetInputErrors();//скрывает сообщения об ошибке
  addCardFormValidator.disableSubmitButton();//чтобы кнопка была неактивной после ввода валидных данных и закрытия попапа
});

//закрытие модальных окон
closeEditModalButton.addEventListener('click',() => closePopup(editModal));
closeAddCardModal.addEventListener('click',() => closePopup(addCardModal));
closePicModal.addEventListener('click', () => closePopup(picModal));

//обработчики кликов для сохранения измнеений
editModalSubmitHandler.addEventListener('click', submitEditModal);
addModalSubmitHandler.addEventListener('submit', submitAddModal);

//обработчки кликов на оверлэй
editModal.addEventListener('mousedown', overlayHandler);
addCardModal.addEventListener('mousedown', overlayHandler);
picModal.addEventListener('mousedown', overlayHandler);



