const config = {
    formSelector: '.popup__form',
    inputSelector: '.popup__form-text',
    inputErrorClass: 'popup__form-text_error',
    errorClass: 'popup__input-error_avtive',
    submitButtonSelector: '.popup__submit-btn',
  };
    
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
    
    //инпуты
    const currentPlaceName = elementsTemplate.querySelector('.card__name'); 
    const currentPhotoLink = elementsTemplate.querySelector('.card__image'); 
    const newPlaceName = document.getElementById('input_place-name');
    const newPhotoLink = document.getElementById('input_link');
    
    //кнопки отправки
    const editModalSubmitHandler = document.getElementById('popup__submit-btn_type_edit');
    const addModalSubmitHandler = document.getElementById('popup__submit-btn_type_add');
    
    //содержимое модального окна картинки
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
    
    const cardsContainer = document.querySelector('.cards');

    export { config, initialCards, editModal, addCardModal, picModal, addForm, openEditModalButton, openAddCardModal, closeEditModalButton, closeAddCardModal, closePicModal, currentName, currentDescription, newName, newDescription, elementsTemplate,
        currentPlaceName,  currentPhotoLink, newPlaceName, newPhotoLink, editModalSubmitHandler, addModalSubmitHandler, picModalImage,
        picModalCaption, inputListEditModal, buttonElementEditModal, inputListAddModal, buttonElementAddModal, cardsContainer};

    