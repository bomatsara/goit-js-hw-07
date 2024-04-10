document.addEventListener('DOMContentLoaded', (event) => {
  const form = document.querySelector('.login-form');

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const inputsArray = Array.from(form.querySelectorAll('input'));
    const allFilledChecker = inputsArray.every(input => input.value.trim());

    if (!allFilledChecker) {
      alert('All form fields must be filled in');
    } else {
      const objValues = inputsArray.reduce((ac, input) => {
        ac[input.name] = input.value;
        return ac;
      }, {});

      console.log(objValues);
      form.reset();
    }
  });
});