let popup = document.querySelector('.popup');
let openPopupBtn = document.getElementById('edit-btn');
let closePopupBtn = document.querySelector('.popup__close-btn');
let currentName = document.querySelector('.profile__title');
let currentDescription = document.querySelector('.profile__subtitle');
let newName = document.querySelector('.popup__full-name-input');
let newDescription = document.querySelector('.popup__about-you-input');
let popupForm = document.querySelector('.popup__form');

function openPopup() {
    newName.value = currentName.textContent;
    newDescription.value = currentDescription.textContent;
    popup.classList.add('popup__opened');
}

function closePopup() {
    popup.classList.remove('popup__opened');
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


