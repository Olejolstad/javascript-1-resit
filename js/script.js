const url = "https://official-joke-api.appspot.com/random_joke";

const headerElement = document.querySelector("h2")
const setupElement = document.querySelector(".setup")
const punchlineElement = document.querySelector(".punchline")

async function getJoke() {

    // fetch

    let response = null;
    let randomJoke = null;

    try {
        response = await fetch(url);
        randomJoke = await response.json();
    }
    catch(e) {
        headerElement.innerHTML = "Something wrong happened! :(";
    }

    const { punchline, setup, type } = randomJoke;

    headerElement.innerHTML = type + " Joke";
    setupElement.innerHTML = setup;
    punchlineElement.innerHTML = punchline;
    document.title = setup;
}


getJoke();
