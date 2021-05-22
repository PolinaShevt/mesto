
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

//поля ввода для модалки добавления карточки
const currentPlaceName = elementsTemplate.querySelector('.card__name');
const currentPhotoLink = elementsTemplate.querySelector('.card__image');
const newPlaceName = document.getElementById('input_place-name');

const newPhotoLink = document.getElementById('input_link');

const popupForm = document.getElementById('popup__form-type-edit');
const editModalSubmitHandler = document.getElementById('popup__submit-btn_type_edit');
const addModalSubmitHandler = document.getElementById('popup__submit-btn_type_add');


const cardsContainer = document.querySelector('.cards');

const picModalImage = picModal.querySelector('.popup__image');
const picModalCaption = picModal.querySelector('.popup__caption');


//функция открытия модалки
function openPopup (modal) {
  modal.classList.add('popup_opened');
}

//закрытия
function closePopup (modal) {
  modal.classList.remove('popup_opened');
}


//закрытия по esc
function closePopupWithEsc (modal) {
  document.addEventListener('keydown', (evt) => {
    if(evt.key === 'Escape'){
      closePopup(modal);
    }
  })
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
openEditModalButton.addEventListener('click',() => openPopup(editModal));
openAddCardModal.addEventListener('click',() => openPopup(addCardModal));
//закрытие модальных окон
closeEditModalButton.addEventListener('click',() => closePopup(editModal));
closeAddCardModal.addEventListener('click',() => closePopup(addCardModal));
closePicModal.addEventListener('click', () => closePopup(picModal));
//вызов ф-ии закрытия по esc для каждого модального окна
closePopupWithEsc(editModal);
closePopupWithEsc(addCardModal);
closePopupWithEsc(picModal);
//обработчики кликов для сохранения измнеений
editModalSubmitHandler.addEventListener('click', saveChangesEditModal);
addModalSubmitHandler.addEventListener('submit', saveChangesAddModal);
//закрытие по клику на оверлэй

const config = {
  formSelector: 'form',
  inputSelector: 'popup__form-text',
  inputErrorClass: 'popup__form-text_error',
  errorClass: 'popup__input-error_avtive',
  submitButtonSelector: 'popup__content',
};

enableValidation(config);
