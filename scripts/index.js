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

//modals
const editModal = document.querySelector('.popup_type_edit');
const addCardModal = document.querySelector('.popup_type_add');

//open modal button
const openEditModalButton = document.querySelector('.profile__edit-button');
const openAddCardModal = document.querySelector('.profile__rectangle');

//close modal button
const closeEditModalButton = document.getElementById('close-btn_type_edit');
const closeAddCardModal = document.getElementById('close-btn_type_add');

//input
const currentName = document.querySelector('.profile__title');
const currentDescription = document.querySelector('.profile__subtitle');
const currentPlaceName = document.querySelector('.card__name');
const currentPhotoLink = document.querySelector('.card__image');

const newName = document.getElementById('full-name_input');
const newDescription = document.getElementById('about-you__input');
const newPlaceName = document.getElementById('input_place-name');
const newPhotoLink = document.getElementById('input_link');

const popupForm = document.getElementById('popup__form-type-edit');
const editModalSubmitHandler = document.getElementById('popup__submit-btn_type_edit');



function openEditModal() {
    newName.value = currentName.textContent;
    newDescription.value = currentDescription.textContnet;
    editModal.classList.add('popup_opened');
}

function closeEditModal() {
    editModal.classList.remove('popup_opened');
}

function formSubmitHandler(evt) {
    evt.preventDefault();
    currentName.textContent = newName.value;
    currentDescription.textContent = newDescription.value;
    closeEditModal();
}

openEditModalButton.addEventListener('click', openEditModal);
closeEditModalButton.addEventListener('click', closeEditModal);
editModalSubmitHandler.addEventListener('click', formSubmitHandler);

// let popup = document.querySelector('.popup');
// let openPopupBtn = document.querySelector('.profile__edit-button');
// let closePopupBtn = document.querySelector('.popup__close-btn');
// let currentName = document.querySelector('.profile__title');
// let currentDescription = document.querySelector('.profile__subtitle');
// let newName = document.getElementById('full-name_input')
// let newDescription = document.getElementById('about-you__input');
// let popupForm = document.querySelector('.popup__form');

// function openPopup() {
//     newName.value = currentName.textContent;
//     newDescription.value = currentDescription.textContent;
//     popup.classList.add('popup_opened');
// }

// function closePopup() {
//     popup.classList.remove('popup_opened');
// }

// function formSubmitHandler (evt) {
//     evt.preventDefault();
//     currentName.textContent = newName.value;
//     currentDescription.textContent = newDescription.value;
//     closePopup()
// }

// openPopupBtn.addEventListener('click', openPopup)
// closePopupBtn.addEventListener('click', closePopup)
// popupForm.addEventListener('submit', formSubmitHandler)


