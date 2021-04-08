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

//поля ввода для модалки добавления карточки
const currentPlaceName = document.querySelector('.card__name');
const currentPhotoLink = document.querySelector('.card__image');
const newPlaceName = document.getElementById('input_place-name');
const newPhotoLink = document.getElementById('input_link');

const popupForm = document.getElementById('popup__form-type-edit');
const editModalSubmitHandler = document.getElementById('popup__submit-btn_type_edit');
const addModalSubmitHandler = document.getElementById('popup__submit-btn_type_add');

const cardsContainer = document.querySelector('.cards');

//функция открытия и закрытия попапа
function toggleModalWindow(modal) {
    modal.classList.toggle('popup_opened');
}

//функция создания карточки 
function createCard (item) {
  const elementsTemplate = document.querySelector('.list-item-template').content;
  const card = elementsTemplate.cloneNode(true);
  const cardPic = card.querySelector('.card__image');
  const cardTitle = card.querySelector('.card__name');
  const cardLikeBtn = card.querySelector('.card__like-btn');
  const cardDeleteBtn = card.querySelector('.card__delete-button');
  console.log(cardDeleteBtn);
  
  

  cardLikeBtn.addEventListener('click', () => cardLikeBtn.classList.toggle('card__like-btn_active'));
  cardDeleteBtn.addEventListener('click', (item) => card.remove(item));


  cardPic.src = item.link;
  cardTitle.textContent = item.name;

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
    editModal.classList.remove('popup_opened');
}

//функция сохранения изменений для добавления 
function saveChangesAddModal(evt) {
    evt.preventDefault();
    currentPlaceName.textContent = newPlaceName.value;
    currentPlaceName.textContent = newPlaceName.value;
    addCardModal.classList.remove('popup_opened');
}




//обработчики кликов закрытия и открытия модалок
openEditModalButton.addEventListener('click',() => toggleModalWindow(editModal));
openAddCardModal.addEventListener('click',() => toggleModalWindow(addCardModal));
closeEditModalButton.addEventListener('click',() => toggleModalWindow(editModal));
closeAddCardModal.addEventListener('click',() => toggleModalWindow(addCardModal));
closePicModal.addEventListener('click', () => toggleModalWindow(picModal));

//обработчики кликов для сохранения измнеений
editModalSubmitHandler.addEventListener('click', saveChangesEditModal);
addModalSubmitHandler.addEventListener('click', saveChangesAddModal);


// function makeCard(link, name){
//     const cardItem = cardTemplate.querySelector('.card').cloneNode(true);

//     const cardImage = cardItem.querySelector('.card__image');
//     cardImage.src = src
//     cardImage.alt = 
//     cardItem.querySelector('.card__name').textContent = name;

//     const deleteButton = cardItem.querySelector('.card__delete-button');

//     deleteButton.addEventListener('click', (evt) => {
//       cardItem.remove();
//     });

//     return cardItem;
    
// }

// initialCards.forEach((item) => {
//     cardsContainer.append(makeCard(link, name))
// });




// initialCards.forEach(item => {
//     const listItemTemplate = document.querySelector('.list-item-template').content.querySelector('.card');
//     const listItem = listItemTemplate.cloneNode(true)
//     const listItemTitle = listItem.querySelector('.card__name')
//     const listItemPhoto = listItem.querySelector('.card__image')
//     listItemTitile.textContent = item.name
//     cards.append(card);
    
// })

// likeBtn.forEach(function(e){
//     e.addEventListener('click', function (evt) {
//         evt.target.classList.toggle('card__like-btn_active')
//     });
// })


// function toggleModalWindow(modal) {
//     modal.classList.toggle('popup_opened');
// }

// function saveChangesEditModal(evt) {
//     evt.preventDefault();
//     currentName.textContent = newName.value;
//     currentDescription.textContent = newDescription.value;
//     editModal.classList.remove('popup_opened');
// }
// function saveChangesAddModal(evt) {
//     evt.preventDefault();
//     currentPlaceName.textContent = newPlaceName.value;
//     currentPlaceName.textContent = newPlaceName.value;
//     addCardModal.classList.remove('popup_opened');
// }



// editModalSubmitHandler.addEventListener('click', saveChangesEditModal);
// addModalSubmitHandler.addEventListener('click', saveChangesAddModal);
// openEditModalButton.addEventListener('click',() => toggleModalWindow(editModal));
// openAddCardModal.addEventListener('click',() => toggleModalWindow(addCardModal));
// closeEditModalButton.addEventListener('click',() => toggleModalWindow(editModal));
// closeAddCardModal.addEventListener('click',() => toggleModalWindow(addCardModal));