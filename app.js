const rndNumber = Math.round(Math.random() * 10);
console.log(`random number: ${rndNumber}`);
const guessButton = document.getElementById('guess-button');
const msgEl = document.querySelector('.message');
const inputEl = document.getElementById('number');

guessButton.addEventListener('click', e => {
  let guessedNumber = parseInt(inputEl.value);
  if (isNaN(guessedNumber) || guessedNumber < 1 || guessedNumber > 10) {
    sendMessage('Your guessed number is not in the range from 1 to 10', 'red');
  } else if (guessedNumber === rndNumber) {
    sendMessage('Yes, you won!', 'green');
  } else if (guessedNumber < rndNumber) {
    sendMessage('You are below', 'red');
  } else {
    sendMessage('You are over', 'red');
  }
  e.preventDefault();
});

function sendMessage(msg, color) {
  msgEl.style.color = color;
  msgEl.textContent = msg;
}
