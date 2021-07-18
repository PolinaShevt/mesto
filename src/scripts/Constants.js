import arkhyz from "../images/arkhyz.png";
import chelyabinsk from "../images/chelyabinsk-oblast.png";
import ivanovo from "../images/ivanovo.png";
import kamchatka from "../images/kamchatka.png";
import kholmogorsky from "../images/kholmogorsky.png";
import baikal from "../images/baikal.png"

const config = {
    formSelector: '.popup__form',
    inputSelector: '.popup__form-text',
    inputErrorClass: 'popup__form-text_error',
    errorClass: 'popup__input-error_avtive',
    submitButtonSelector: '.popup__submit-btn',
    disabledButtonClass: 'popup__submit-btn_disabled',
  };
    
    const initialCards = [
        {
          name: 'Архыз',
          link: arkhyz
        },
        {
          name: 'Челябинская область',
          link: chelyabinsk
        },
        {
          name: 'Иваново',
          link: ivanovo
        },
        {
          name: 'Камчатка',
          link: kamchatka
        },
        {
          name: 'Холмогорский район',
          link: kholmogorsky
        },
        {
          name: 'Байкал',
          link: baikal
        }
      ]; 
    const openEditModalButton = document.querySelector('.profile__edit-button');
    const openAddCardModal = document.querySelector('.profile__rectangle');
    const newPlaceName = document.getElementById('input_place-name');
    const newPhotoLink = document.getElementById('input_link');
    const escape = 'Escape';
    const newName = document.getElementById('full-name_input'); 
    const newDescription = document.getElementById('about-you__input'); 
    
    export { config, initialCards, openEditModalButton, 
      openAddCardModal,  newPlaceName, 
      newPhotoLink, escape, newName, newDescription };

    