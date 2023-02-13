const firstColor = document.getElementById('black');
const secondColor = document.getElementById('red');
const threeColor = document.getElementById('blue');
const fourColor = document.getElementById('green');

const createdElementAndSquare = () => {
  const quantity = 5;

  for (let i = 0; i < quantity; i += 1) {
    for (let j = 0; j < quantity; j += 1) {
      const getParentElement = document.getElementById('id-pixel-board');
      const createElement = document.createElement('ol');
      createElement.className = 'pixel';
      createElement.id = 'pixel-board';

      getParentElement.appendChild(createElement);
    }
  }
};

const eventSelectedColor = () => {
  const colorSelected = ({ target }) => {
    const getSelected = document.querySelector('.selected');

    getSelected.classList.remove('selected');
    target.classList.add('selected');
  };
  firstColor.addEventListener('click', colorSelected);
  secondColor.addEventListener('click', colorSelected);
  threeColor.addEventListener('click', colorSelected);
  fourColor.addEventListener('click', colorSelected);
};

const eventSelectedColorInBoard = async () => {
  const getPixelId = document.getElementById('id-pixel-board');
  const getPixelBoard = ({ target }) => {
    const param = target;
    const getSelected = document.querySelector('.selected');
    param.style.backgroundColor = getSelected.style.backgroundColor;
  };
  getPixelId.addEventListener('click', getPixelBoard);
};

const clearBoardPixel = () => {
  const deleteButton = document.getElementById('clear-board');
  const board = document.getElementsByClassName('pixel');

  const eventClear = () => {
    for (let i = 0; i <= board.length; i += 1) {
      board[i].style.backgroundColor = 'white';
    }
  };
  deleteButton.addEventListener('click', eventClear);
};

const genetareteBoard = () => {
  let valueInput = document.querySelector('#board-size').value;
  if (valueInput === '') window.alert('Board inválido!');
  if (valueInput < 5) {
    valueInput = 5;
  } else if (valueInput > 50) {
    valueInput = 50;
  }
  for (let i = 0; i < valueInput; i += 1) {
    for (let j = 0; j < valueInput; j += 1) {
      const getParentElement = document.getElementById('id-pixel-board');
      const createElement = document.createElement('ol');
      createElement.className = 'pixel';
      createElement.id = 'pixel-board';
      getParentElement.appendChild(createElement);
    }
  }
};

const buttonGenerate = document.getElementById('generate-board');
buttonGenerate.addEventListener('click', genetareteBoard);

window.onload = () => {
  createdElementAndSquare();
  eventSelectedColor();
  eventSelectedColorInBoard();
  clearBoardPixel();
};
