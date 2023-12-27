const productNameInputElement = document.getElementById("product-name");
const maxLength = productNameInputElement.maxLength;
let tmpRemainingLength = maxLength;

const remainingCharsElement = document.getElementById("remaining-chars");

const updateCharCount = (e) => {
  const enteredText = e.target.value;

  const remainingCharsLength = maxLength - enteredText.length;

  remainingCharsElement.textContent = remainingCharsLength;

  if (
    (tmpRemainingLength <= 10 && remainingCharsLength > 10) ||
    (tmpRemainingLength > 10 && remainingCharsLength <= 10)
  )
    toggleWarn(e);

  tmpRemainingLength = remainingCharsLength;
};

const toggleWarn = (e) => {
  e.target.classList.toggle("warning");
};

productNameInputElement.addEventListener("input", updateCharCount);
