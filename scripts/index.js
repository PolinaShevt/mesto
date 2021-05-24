
const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
  ]; 

//модалки
const editModal = document.querySelector('.popup_type_edit');
const addCardModal = document.querySelector('.popup_type_add');
const picModal = document.querySelector('.popup_type_photoshow');

const addForm = document.querySelector('#popup__form-type-add');


//кнопки открытия модалок
const openEditModalButton = document.querySelector('.profile__edit-button');
const openAddCardModal = document.querySelector('.profile__rectangle');

//кнопки закрытия 
const closeEditModalButton = document.getElementById('close-btn_type_edit');
const closeAddCardModal = document.getElementById('close-btn_type_add');
const closePicModal = document.querySelector('#close-btn_type_photoshow');

//поля ввода для модалки редактирования
const currentName = document.querySelector('.profile__title');
const currentDescription = document.querySelector('.profile__subtitle');
const newName = document.getElementById('full-name_input');
const newDescription = document.getElementById('about-you__input');

//карточка места
const elementsTemplate = document.querySelector('.list-item-template').content.querySelector('.card');


const currentPlaceName = elementsTemplate.querySelector('.card__name'); 
const currentPhotoLink = elementsTemplate.querySelector('.card__image'); 
const newPlaceName = document.getElementById('input_place-name');
const newPhotoLink = document.getElementById('input_link');


const editModalSubmitHandler = document.getElementById('popup__submit-btn_type_edit');
const addModalSubmitHandler = document.getElementById('popup__submit-btn_type_add');


const cardsContainer = document.querySelector('.cards');

const picModalImage = picModal.querySelector('.popup__image');
const picModalCaption = picModal.querySelector('.popup__caption');
//список инпутов(ред)
const inputListEditModal = Array.from(editModal.querySelectorAll('.popup__form-text'));
//кнопка отправки(ред)
const buttonElementEditModal = editModal.querySelector('.popup__submit-btn');


//список инпутов(добавление)
const inputListAddModal = Array.from(addCardModal.querySelectorAll('.popup__form-text'));
//кнопка отправки(добавление)
const buttonElementAddModal = addCardModal.querySelector('.popup__submit-btn');

//закрытия по esc
function closePopupByEsc(evt) {
  if(evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup);
  }
}  

//функция открытия модального окна
function openPopup (modal) {
  modal.classList.add('popup_opened');
  document.addEventListener('keydown', closePopupByEsc);

}

//закрытия
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



//функция создания карточки 
function createCard (item) {
  const card = elementsTemplate.cloneNode(true);
  const cardPic = card.querySelector('.card__image');
  const cardTitle = card.querySelector('.card__name');
  const cardLikeBtn = card.querySelector('.card__like-btn');
  const cardDeleteBtn = card.querySelector('.card__delete-button');
  cardPic.src = item.link;
  cardTitle.textContent = item.name;

  cardPic.addEventListener('click', () =>{
    picModalImage.src = item.link;
    picModalCaption.textContent = item.name;
    picModalCaption.alt = item.name;
    openPopup(picModal);
  })
  
  cardLikeBtn.addEventListener('click', () => cardLikeBtn.classList.toggle('card__like-btn_active'));
  cardDeleteBtn.addEventListener('click', (item) => card.remove(item));

  return card
}

//добавление краточки в дом
function addCard(item) {
  cardsContainer.prepend(createCard(item));
}


//выполненеи функции addCard для каждого эл-та массива
initialCards.forEach(item => {
  addCard(item);
}); 



//функция сохранения изменение для редактирования
function saveChangesEditModal(evt) {
    evt.preventDefault();
    currentName.textContent = newName.value;
    currentDescription.textContent = newDescription.value;
    closePopup(editModal);
    editModal.reset();
}

function saveChangesAddModal(evt) {
   evt.preventDefault();
   const inputValue = newPlaceName.value
   const inputLink = newPhotoLink.value
   addCard({name: inputValue, link: inputLink});
   closePopup(addCardModal);
   addForm.reset();
}



//обработчик сохранения новой карточки
addForm.addEventListener('submit', saveChangesAddModal)
//открытие модальных окон
openEditModalButton.addEventListener('click',() => {
  toggleButtonState(buttonElementEditModal, inputListEditModal, config);
  openPopup(editModal);

  newName.value = currentName.textContent; 
  newDescription.value = currentDescription.textContent; 
});

openAddCardModal.addEventListener('click',() => {
  toggleButtonState(buttonElementAddModal, inputListAddModal, config);
  openPopup(addCardModal)

  newPlaceName.value = '';
  newPhotoLink.value = '';
});
//закрытие модальных окон
closeEditModalButton.addEventListener('click',() => closePopup(editModal));
closeAddCardModal.addEventListener('click',() => closePopup(addCardModal));
closePicModal.addEventListener('click', () => closePopup(picModal));
//обработчики кликов для сохранения измнеений
editModalSubmitHandler.addEventListener('click', saveChangesEditModal);
addModalSubmitHandler.addEventListener('submit', saveChangesAddModal);
//обработчки кликов на оверлэй
editModal.addEventListener('mousedown', overlayHandler);
addCardModal.addEventListener('mousedown', overlayHandler);
picModal.addEventListener('mousedown', overlayHandler);
 

const config = {
  formSelector: '.popup__form',
  inputSelector: '.popup__form-text',
  inputErrorClass: 'popup__form-text_error',
  errorClass: 'popup__input-error_avtive',
  submitButtonSelector: '.popup__submit-btn',
};

enableValidation(config);
