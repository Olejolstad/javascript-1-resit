const firstNameElement = document.querySelector("#firstName")
const firstNameError = document.querySelector("#firstNameError")
const lastNameElement = document.querySelector("#lastName")
const lastNameError = document.querySelector("#lastNameError")
const emailElement = document.querySelector("#email")
const emailError = document.querySelector("#emailError")
const subjectElement = document.querySelector("#subject")
const subjectError = document.querySelector("#subjectError")
const messageElement = document.querySelector("#message")
const messageError = document.querySelector("#messageError")

const submitButton = document.querySelector("#submit")




submitButton.addEventListener("click", (e) => {
    e.preventDefault();
    resetErrors();
    validateForm();
})



function resetErrors(){
    
    resetError(firstNameError);
    resetError(lastNameError);
    resetError(emailError);
    resetError(subjectError);
    resetError(messageError);
}       


function validateForm() {
    
    if (!firstNameElement.value.trim()){
        displayError(firstNameError);
    }
    
    if (lastNameElement.value.trim().length < 3) {
        displayError(lastNameError);
    }

    if (!validateEmail(emailElement.value)){
        displayError(emailError);
    }

    if (subjectElement.value.trim().length < 7) {
        displayError(subjectError);
    }

    if (messageElement.value.trim().length < 15) {
        displayError(messageError);
    }
}


function displayError(element) {
    element.style.display = "inline";
}


function resetError(element) {
    element.style.display = "none";
}


function validateEmail(email){
    const regex = /^\S+@\S+\.\S+$/;
    const patterMatches = regex.test(email)
    return patterMatches;
}
