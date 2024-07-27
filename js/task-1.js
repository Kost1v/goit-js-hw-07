const listElements = document.getElementById('categories');

console.log(`Number of categories: ${listElements.children.length}`);

const listEl = document.querySelectorAll('.item');

const listElText = listEl.forEach((el) => {
  console.log(`Category: ${el.firstElementChild.textContent}`);

  console.log(`Elements ${el.lastElementChild.children.length}`);
})
