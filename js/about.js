const aboutElement = document.querySelector(".about")


function reverseParagraphs() {

    const paragraphElements = aboutElement.children;
    const paragraphs = []

    for (let i = 0; i < paragraphElements.length; i++){

        const paragraph = paragraphElements[i];
        paragraphs.push(paragraph);
    }


    aboutElement.innerHTML = "";
    paragraphs.reverse();


    for (let i = 0; i < paragraphs.length; i++){

        const paragraph = paragraphs[i];
        aboutElement.appendChild(paragraph);
    }
}


reverseParagraphs();
