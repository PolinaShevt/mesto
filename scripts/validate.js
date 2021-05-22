const showInputError = (formElement, inputElement, config) => {
    const { inputErrorClass, errorClass } = config;
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.add(inputErrorClass);
    errorElement.textContent = inputElement.validationMessage;
    errorElement.classList.add(errorClass);
}

const hideInputError = (formElement, inputElement, config) => {
    const { inputErrorClass, errorClass } = config;
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.remove(inputErrorClass);
    errorElement.classList.remove(errorClass);
    errorElement.textContent = '';
}


const checkInputValidity = (formElement, inputElement, config) =>{
    //check input validity(if..else)
    if (inputElement.validity.valid){
        hideInputError(formElement, inputElement, config);
    } else {
        showInputError(formElement, inputElement, config);
    }
    
}


const hasInvalidInput = (inputList) => {
    return inputList.some(inputElement => !inputElement.validity.valid)
}

const toggleButtonState = (buttonElement, inputList) => {
    //if form is valid - active button, invalid- add disabled button class
    // form is valid when all inputs are valid
    if(hasInvalidInput(inputList)) {
        //disable
        buttonElement.disabled = true;
    } else {
        //enable
        buttonElement.disabled = false;
    }

}

const setEventListeners = (formElement, config) => {
    const {inputSelector,submitButtonSelector, ...restConfig} = config
    //switch off page reload
    formElement.addEventListener('submit', (evt) => {
        evt.preventDefault();
    })

    //find button 
    const buttonElement = formElement.querySelector(submitButtonSelector)
    //find all form's input
    const inputList = Array.from(formElement.querySelectorAll(inputSelector));
    //set eL for each input 
    inputList.forEach((inputElement) =>{
       inputElement.addEventListener('input', () =>{
           checkInputValidity(formElement, inputElement, restConfig);
           toggleButtonState(buttonElement, inputList);
       })
    })
    toggleButtonState(buttonElement, inputList);
 }


// check form validation 
const enableValidation = (config) => {
    const {formSelector, ...restConfig} = config
    //make array from all froms
    const formList = Array.from(document.querySelectorAll(formSelector));
    // set eL for each form
    formList.forEach((formElement) =>{
        setEventListeners(formElement, restConfig);
    })
}

