class FormValidator {
    constructor(config, form, popupSelector) {
        this._inputSelector = config.inputSelector;
        this._form = document.querySelector(form);
        //this._inputList = document.querySelectorAll(config.inputSelector)
        this._inputErrorClass = config.inputErrorClass;
        this._errorClass = config.errorClass;
        this._submitButtonSelector = this._form.querySelector(config.submitButtonSelector);
        this._submitButtonSelectorSelector = config.submitButtonSelector;
        this._disabledButtonClass = config.disabledButtonClass;
        this._element = document.querySelector(`${popupSelector}`);
    }
    _showInputError = (inputElement) => {
        const errorElement = document.querySelector(`#${inputElement.id}-error`);
        inputElement.classList.add(this._inputErrorClass);
        errorElement.textContent = inputElement.validationMessage;
        errorElement.classList.add(this._errorClass);
    }
    _hideInputError = (inputElement) => {
        const errorElement = document.querySelector(`#${inputElement.id}-error`);
        inputElement.classList.remove(this._inputErrorClass);
        errorElement.classList.remove(this._errorClass);
        errorElement.textContent = '';
    }
    _checkInputValidity = (inputElement) => {
        if (inputElement.validity.valid){
            this._hideInputError(inputElement);
        } else {
            this._showInputError(inputElement);
        }
    }
    _hasInvalidInput = () => {
        return Array.from(this._inputList).some((inputElement) => {
            return !inputElement.validity.valid;});
    }
    _toggleButtonState = () => {
        if(this._hasInvalidInput()) {
            this._submitButtonSelector.classList.add(this._disabledButtonClass);
            this._submitButtonSelector.setAttribute('disabled', true);
        } else {
            this._submitButtonSelector.classList.remove(this._disabledButtonClass);
            this._submitButtonSelector.removeAttribute('disabled', true);
        }
    }
    _setEventListeners = () => { 
        this._inputList = Array.from(this._element.querySelectorAll(this._inputSelector));
        this._buttonElement = this._element.querySelector(this._submitButtonSelectorSelector);
        this._inputList.forEach((inputElement) =>{
            inputElement.addEventListener('input', () =>{
                this._checkInputValidity(inputElement);
                this._toggleButtonState();
            })
         })
    }
    enableValidation = () => {
        this._setEventListeners();
    }
    resetValidation = () => {
        this._inputList.forEach((inputElement) => {
            this._hideInputError(inputElement)
        });
        this._toggleButtonState();
    }
    enableSubmitButton() {
        this._submitButtonSelector.classList.remove(this._disabledButtonClass);
        this._submitButtonSelector.removeAttribute('disabled', true);
    }
    disableSubmitButton() {
        this._submitButtonSelector.classList.add(this._disabledButtonClass);
        this._submitButtonSelector.setAttribute('disabled', true);
    }
}
export default FormValidator;