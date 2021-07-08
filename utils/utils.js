function openPopup (modal) {
    modal.classList.add('popup_opened');
    document.addEventListener('keydown', closePopupByEsc);
  
}
function closePopupByEsc(evt) {
    if(evt.key === 'Escape') {
      const openedPopup = document.querySelector('.popup_opened');
      closePopup(openedPopup);
    }
  }  

function closePopup (modal) {
    modal.classList.remove('popup_opened');
    document.removeEventListener('keydown', closePopupByEsc);
}

function overlayHandler (evt) {
    if(evt.target.classList.contains('popup') || evt.target.classList.contains('popup__close-btn')){
      const popupOpened = document.querySelector('.popup_opened');
      closePopup(popupOpened);
    }
  }

export { openPopup, closePopupByEsc, closePopup, overlayHandler };