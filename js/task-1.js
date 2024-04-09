const parseItem = (item) => {
  const titleText = item.querySelector('h2').textContent;
  const elementsNumber = item.querySelectorAll('ul > li').length.toString();

  console.log('Category:', titleText);
  console.log('Elements:', elementsNumber);
};

document.addEventListener('DOMContentLoaded', (event) => {
  const categories = document.querySelector('#categories');
  const categoriesItems = categories.querySelectorAll('.item');

  console.log('Number of categories:', categoriesItems.length.toString());

  categoriesItems.forEach(parseItem);
});