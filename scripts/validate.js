const showInputError = (formElement, inputElement) => {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.add('popup__form-text_error');
    errorElement.textContent = inputElement.validationMessage;
    errorElement.classList.add('popup__input-error_avtive');
}

const hideInputError = (formElement, inputElement) => {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.remove('popup__form-text_error');
    errorElement.classList.remove('popup__input-error_avtive');
    errorElement.textContent = '';
}


const checkInputValidity = (formElement, inputElement) =>{
    //check input validity(if..else)
    if (inputElement.validity.valid){
        hideInputError(formElement, inputElement);
    } else {
        showInputError(formElement, inputElement);
    }
    
}

const setEventListeners = (formElement) => {
    //find all form's input
    const inputList = Array.from(formElement.querySelectorAll('.popup__form-text'));
    //set eL for each input 
    inputList.forEach((inputElement) =>{
       inputElement.addEventListener('input', () =>{
           checkInputValidity(formElement, inputElement);
       })
    })
}


// check form validation 
const enableValidation = () => {
    //make array from all froms
    const formList = Array.from(document.querySelectorAll('.popup'));
    // set eL for each form
    formList.forEach((formElement) =>{
        setEventListeners(formElement);
    })
}

