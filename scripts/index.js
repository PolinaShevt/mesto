import FormValidator from "./FormValidator.js";
import Card from "./Card.js";
import { config, initialCards, editModal, addCardModal, picModal, addForm, openEditModalButton, openAddCardModal, closeEditModalButton, closeAddCardModal, closePicModal, currentName, currentDescription, newName, newDescription, elementsTemplate,
  currentPlaceName,  currentPhotoLink, newPlaceName, newPhotoLink, editModalSubmitHandler, addModalSubmitHandler, picModalImage,
  picModalCaption, inputListEditModal, buttonElementEditModal, inputListAddModal, buttonElementAddModal, cardsContainer} from './Constants.js';

const profileEditFormValidator = new FormValidator(config, '.popup_type_edit');
profileEditFormValidator.enableValidation();

const addCardFormValidator = new FormValidator(config, '.popup_type_add');
addCardFormValidator.enableValidation();

function addCard(item) {
  const card = new Card(item, 'list-item-template');
  const cardsList = card.createCard();
  cardsContainer.prepend(cardsList);
}

initialCards.forEach((item) => {
  addCard(item);
});

//закрытиe по esc
function closePopupByEsc(evt) {
  if(evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup);
  }
}  

 //функция открытия модального окна
export function openPopup (modal) {
  modal.classList.add('popup_opened');
  document.addEventListener('keydown', closePopupByEsc);

}

//закрытие
function closePopup (modal) {
  modal.classList.remove('popup_opened');
  document.removeEventListener('keydown', closePopupByEsc);
}

//закрытие по клику на оверлэй
function overlayHandler (evt) {
  if(evt.target.classList.contains('popup') || evt.target.classList.contains('popup__close-btn')){
    const popupOpened = document.querySelector('.popup_opened');
    closePopup(popupOpened);
  }
}

//функция сохранения изменение для редактирования
function saveChangesEditModal(evt) {
    evt.preventDefault();
    currentName.textContent = newName.value;
    currentDescription.textContent = newDescription.value;
    closePopup(editModal);
}

function saveChangesAddModal(evt) {
   evt.preventDefault();
   const newCardItem = {
      name: newPlaceName.value,
      link: newPhotoLink.value,
   }
   addCard(newCardItem);
   closePopup(addCardModal);
   addForm.reset();
}



//обработчик сохранения новой карточки
addForm.addEventListener('submit', saveChangesAddModal)


//открытие модальных окон
openEditModalButton.addEventListener('click',() => {
  openPopup(editModal);
  profileEditFormValidator.repeatEnableValidation();
  newName.value = currentName.textContent;  
  newDescription.value = currentDescription.textContent;  
});
openAddCardModal.addEventListener('click',() => {
  openPopup(addCardModal)
  newPlaceName.value = '';
  newPhotoLink.value = '';
  addCardFormValidator.repeatEnableValidation();
});

//закрытие модальных окон
closeEditModalButton.addEventListener('click',() => closePopup(editModal));
closeAddCardModal.addEventListener('click',() => closePopup(addCardModal));
closePicModal.addEventListener('click', () => closePopup(picModal));

//обработчики кликов для сохранения измнеений
editModalSubmitHandler.addEventListener('submit', saveChangesEditModal);
addModalSubmitHandler.addEventListener('submit', saveChangesAddModal);

//обработчки кликов на оверлэй
editModal.addEventListener('mousedown', overlayHandler);
addCardModal.addEventListener('mousedown', overlayHandler);
picModal.addEventListener('mousedown', overlayHandler);



