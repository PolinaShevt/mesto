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


//функция открытия и закрытия попапа
function toggleModalWindow(modal) {
    modal.classList.toggle('popup_opened');
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
    toggleModalWindow(picModal);
  })
  
  cardLikeBtn.addEventListener('click', () => cardLikeBtn.classList.toggle('card__like-btn_active'));
  cardDeleteBtn.addEventListener('click', (item) => card.remove(item));

  return card
}

//добавление краточки в дом
function addCard(item) {
  cardsContainer.append(createCard(item));
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
    toggleModalWindow(editModal);
    
}

function saveChangesAddModal(evt) {
   evt.preventDefault();
   const inputValue = newPlaceName.value
   const inputLink = newPhotoLink.value
   
}

//обработчик сохранения новой карточки
addForm.addEventListener('submit', saveChangesAddModal)

//обработчики кликов закрытия и открытия модалок
openEditModalButton.addEventListener('click',() => toggleModalWindow(editModal));
openAddCardModal.addEventListener('click',() => toggleModalWindow(addCardModal));
closeEditModalButton.addEventListener('click',() => toggleModalWindow(editModal));
closeAddCardModal.addEventListener('click',() => toggleModalWindow(addCardModal));
closePicModal.addEventListener('click', () => toggleModalWindow(picModal));
addModalSubmitHandler.addEventListener('submit', saveChangesAddModal);
//обработчики кликов для сохранения измнеений
editModalSubmitHandler.addEventListener('click', saveChangesEditModal);


