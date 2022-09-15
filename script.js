const pixelBoard = document.querySelector('#pixel-board');
const clearButton = document.querySelector('#clear-board');
const pixels = document.querySelectorAll('.pixel');
const colorPalette = document.querySelector('#color-palette');
const inputNumber =document.querySelector('#entrada');


// function generateBoard(size) {
//   const lines
//   const columns
// // }

// generateBoard()
function selectColor() {
  colorPalette.addEventListener('click', (event) => {
    if (event.target !== colorPalette) {
      const selected = document.querySelector('.selected');
      selected.classList.remove('selected');
      event.target.classList.add('selected');
    }
  });
}
selectColor();

pixelBoard.addEventListener('click', (event) => {
  const selectedColor = document.querySelector('.selected');
  const computedStyle = getComputedStyle(selectedColor);
  const color = computedStyle.getPropertyValue('background-color');

  if (event.target.classList.contains('pixel')) {
    event.target.style.backgroundColor = color;
  }
});

clearButton.addEventListener('click', () => {
for (let i of pixels) {
  i.style.backgroundColor = 'white';
}
});
