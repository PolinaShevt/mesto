let popup = document.querySelector('.popup');
let openPopupBtn = document.querySelector('.profile__edit-button');
let closePopupBtn = document.querySelector('.popup__close-btn');
let currentName = document.querySelector('.profile__title');
let currentDescription = document.querySelector('.profile__subtitle');
let newName = document.getElementById('full-name_input')
let newDescription = document.getElementById('about-you__input');
let popupForm = document.querySelector('.popup__form');

function openPopup() {
    newName.value = currentName.textContent;
    newDescription.value = currentDescription.textContent;
    popup.classList.add('popup_opened');
}

function closePopup() {
    popup.classList.remove('popup_opened');
}

function formSubmitHandler (evt) {
    evt.preventDefault();
    currentName.textContent = newName.value;
    currentDescription.textContent = newDescription.value;
    closePopup()
}

openPopupBtn.addEventListener('click', openPopup)
closePopupBtn.addEventListener('click', closePopup)
popupForm.addEventListener('submit', formSubmitHandler)


