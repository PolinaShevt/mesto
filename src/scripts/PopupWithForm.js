import Popup from "./Popup.js"
class PopupWithForm extends Popup {
    constructor(popupSelector, submitForm){
        super(popupSelector);
        this._inputList = this._popupSelector.querySelectorAll('.popup__form-text');
        this._submitForm = submitForm;
        this._form = this._popupSelector.querySelector('.popup__form')

    }
    _getInputValues () {
        //создать пустой объект для значений инпутов
        this._formValues = {};
        //методом forEach  из инпутов перезаписать значения в объект 
        this._inputList.forEach(input => {
            this._formValues[input.name] = input.value;
        });
        //вернуть объект значений инпутов
        return this._formValues;
    }
    setEventListeners () {
        this._form.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._submitForm(this._getInputValues());
            this.close();
        })
        super.setEventListeners();
    }
    close (){
        //сбросит форму
        this._form.reset();
        //закрыть попап
        super.close();
    }
}
export default PopupWithForm;