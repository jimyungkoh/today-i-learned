const removerParagraphButtonElement = document.querySelector('button');
const addBlueBackgroundColorButton =
    document.getElementById('change-bg-button');

const removePreviousSibling = (e) => {
    e.target.previousSibling.remove();
}
const paintFirstParagraph = () => {
    /* 4번 문제 풀이*/
    pElements[0].style.backgroundColor = "dodgerblue";
    /* 5번 문제 풀이*/
    // pElements[0].classList.add('blue-background');
}

let pElements = document.getElementsByTagName("p");
const firstParagraphsContent = pElements[0].textContent;
const thirdParagraphsContent = pElements[2].textContent;

removerParagraphButtonElement
    .addEventListener('click', removePreviousSibling);
addBlueBackgroundColorButton
    .addEventListener('click', paintFirstParagraph);
