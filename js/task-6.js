function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');
const inputNum = document.querySelector('#controls').firstElementChild;
const createBoxEl = document.querySelector('#boxes');

const createBoxes = amount => {

  createBoxEl.innerHTML = ""; 

  const boxes = [];
  
  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    const size = 30 + i * 10;
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxes.push(box);
  }
  
  createBoxEl.append(...boxes)
}

createBtn.addEventListener('click', () => {
  const amount = parseInt(inputNum.value.trim());
  
  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
    inputNum.value = "";
  }
})

destroyBtn.addEventListener('click', () => {
  createBoxEl.innerHTML = '';
})