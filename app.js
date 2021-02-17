const rndNumber = Math.round(Math.random() * 10);
console.log(`random number: ${rndNumber}`);
const guessButton = document.getElementById('guess-button');
const msgEl = document.querySelector('.message');
const inputEl = document.getElementById('number');

guessButton.addEventListener('click', e => {
  let guessedNumber = parseInt(inputEl.value);
  if (guessedNumber === rndNumber) {
    msgEl.textContent = 'Yes, you won!';
  } else if (guessedNumber < rndNumber) {
    msgEl.textContent = 'You are below';
  } else {
    msgEl.textContent = 'You are over';
  }
  e.preventDefault();
});
