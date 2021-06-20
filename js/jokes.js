const url = "https://official-joke-api.appspot.com/random_ten";

const cardElement = document.querySelector(".card");
const cardContainer = document.querySelector(".col-lg-3");
const headerElement = document.querySelector("h1");
const loaderElement = document.querySelector(".loader");


async function getJokes() {


    try {

        let response = await fetch(url);
        let randomJokes = await response.json();

        loaderElement.style.display = "none";

        for (let i = 0; i < 5; i++) {

            const randomJoke = randomJokes[i];
            const { punchline, setup, type } = randomJoke;
    
            const cardClone = cardElement.cloneNode(true);
    
            const typeElement = cardClone.querySelector(".type");
            const setupElement = cardClone.querySelector(".setup");
            const punchlineElement = cardClone.querySelector(".punchline");
    
            typeElement.innerHTML = type;
            setupElement.innerHTML = setup;
            punchlineElement.innerHTML = punchline;
            
            cardContainer.appendChild(cardClone);
        }
    
        
        document.title = randomJokes[2].setup;
        cardElement.remove();

    }
    catch (e) {
        headerElement.innerHTML = "Something wrong happened! :(";
    }
}


getJokes();
