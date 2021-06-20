const inputElement = document.querySelector("input")
const containerElement = document.querySelector(".dynamic-divs")
const resetButton = document.querySelector(".reset")



inputElement.addEventListener("change", (e) => {
    createDivs(e.target.value)
})

resetButton.addEventListener("click", () => {
    resetContainer();
})


function resetContainer() {
    containerElement.innerHTML = "";
}


function createDivs(number) {

    containerElement.innerHTML = "";

    for (let i = 1; i <= number; i++){

        const divElement = document.createElement("div")
        divElement.innerHTML = "Number " + i;
        
        containerElement.appendChild(divElement);
    }
}
