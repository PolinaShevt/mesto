const setEventListeners = (formElement) => {
    //find all form's input
    const inputList = Array.from(formElement.querySelectorAll('.popup__form-text)'));
    //set eL for each input 
    inputList.forEach((inputElement) =>{
       console.log(inputElement);
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

