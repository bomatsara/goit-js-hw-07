function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

document.addEventListener('DOMContentLoaded', (event) => {
  const widget = document.querySelector('.widget');
  const button = widget.querySelector('button.change-color');
  const body = document.querySelector('body');
  const colorSpan = document.querySelector('.color');

  button.addEventListener('click', (event) => {
    const randomColor = getRandomHexColor();

    body.style.backgroundColor = randomColor;
    colorSpan.textContent = `${randomColor}`;
  });
});
