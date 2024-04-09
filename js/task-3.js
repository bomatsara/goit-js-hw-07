document.addEventListener('DOMContentLoaded', (event) => {
  const nameInput = document.querySelector('#name-input');
  const nameSpan = document.querySelector('#name-output');
  const nameSpanDefaultContent = nameSpan.textContent;

  nameInput.addEventListener('input', (event) => {
    const inputValue = event.target.value.trim();
    nameSpan.textContent = inputValue ? inputValue : nameSpanDefaultContent;
  });
});