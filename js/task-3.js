
const input = document.getElementById('name-input');
const span = document.getElementById('name-output');

const spanContent = () => {
  const inputValue = input.value.trim();
  span.textContent = inputValue ? inputValue : 'Anonymous';
}

input.addEventListener('input', spanContent)

