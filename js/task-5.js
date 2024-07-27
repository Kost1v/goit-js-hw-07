function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const bgColorButton = document.querySelector('.change-color');

const bgColorSpan = document.querySelector('.color');

bgColorButton.addEventListener("click", () => {
  bgColorSpan.textContent = getRandomHexColor();
  document.body.style.backgroundColor = getRandomHexColor();
});


