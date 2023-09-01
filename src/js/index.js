const adviceUpdateButton = document.querySelector(".btn-update");
const adviceNumber = document.querySelector(".title");
const adviceDescription = document.querySelector(".descricao");

async function getAdvice() {
    const response = await fetch("https://api.adviceslip.com/advice");
    const adviceContent = await response.json();
    const adviceId = `Advice #${adviceContent.slip.id}`;
    const adviceText = `"${adviceContent.slip.advice}"`;

    adviceNumber.innerHTML = adviceId;
    adviceDescription.innerHTML = adviceText;

}

adviceUpdateButton.addEventListener("click", getAdvice);

getAdvice();