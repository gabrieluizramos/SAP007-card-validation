import validator from './validator.js';

const form = document.querySelector('form');
const input = document.querySelector('input');
const div = document.querySelector('[data-valid]');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const value = input.value;
  const isValid = validator.isValid(value);
  // Usa o retorno da função isValid (true/false)
  // para colocar no data-valid="" do elemento com a mensagem
  div.dataset.valid = isValid;
});
