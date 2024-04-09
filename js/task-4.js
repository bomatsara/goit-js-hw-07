document.addEventListener('DOMContentLoaded', (event) => {
  const form = document.querySelector('.login-form');

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const inputsArray = Array.from(form.querySelectorAll('input'));
    const allFilledChecker = inputsArray.every(input => input.value.trim());

    if (!allFilledChecker) {
      alert('All form fields must be filled in');
    } else {
      inputsArray.forEach(input => console.log(`${input.name}: ${input.value}`));
    }
  });
});