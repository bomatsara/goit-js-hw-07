function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

document.addEventListener('DOMContentLoaded', (event) => {
  const buttonCreate = document.querySelector('button[data-create]');
  const buttonDestroy = document.querySelector('button[data-destroy]');
  const boxes = document.querySelector('#boxes');
  const inputNumber = document.querySelector('input[type="number"]');
  const inputNumberMin = inputNumber.min;
  const inputNumberMax = inputNumber.max;

  function createBoxes(amount) {
    let size = 30;
    let boxesHtml = '';

    for (let i = 0; i < amount; i += 1) {
      boxesHtml += `<div style="width: ${size}px; height: ${size}px; background-color: ${getRandomHexColor()}"></div>`;
      size += 10;
    }

    boxes.innerHTML = boxesHtml;
  }

  function handleCreate() {
    const inputNumberValue = parseInt(inputNumber.value);

    if (inputNumberValue >= inputNumberMin && inputNumberValue <= inputNumberMax) {
      createBoxes(inputNumberValue);
      inputNumber.value = '';
    }
  }

  buttonCreate.addEventListener('click', handleCreate);

  inputNumber.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      handleCreate();
    }
  });

  buttonDestroy.addEventListener('click', (event) => {
    boxes.innerHTML = '';
  });
});
