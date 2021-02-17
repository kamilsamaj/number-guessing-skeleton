// basic constants
const rndNumber = Math.round(Math.random() * 10);
const min = 0;
const max = 10;
let attempts = 3; // no. attempts to guess the right number

// UI elements
const guessButton = document.getElementById('guess-button');
const msgEl = document.querySelector('.message');
const inputEl = document.getElementById('number');

// remember original state for reset
const origGuessButton = {
  borderColor: guessButton.style.borderColor,
  value: guessButton.value
};

const origInput = {
  borderColor: inputEl.style.borderColor
};

guessButton.addEventListener('click', e => {
  // return UI back to default state for a new game
  if (guessButton.value === 'Start again') {
    resetUI();
    e.preventDefault();
    return;
  }

  // new game
  let guessedNumber = parseInt(inputEl.value);
  if (isNaN(guessedNumber) || guessedNumber < min || guessedNumber > max) {
    sendMessage('Your guessed number is not in the range from 1 to 10', 'red');
  } else {
    --attempts;
    if (attempts <= 0) {
      sendMessage('Game over, you ran out of attempts :-(');
      guessButton.value = 'Start again';
      guessButton.style.borderColor = 'green';

      inputEl.style.borderColor = 'red';
    } else if (guessedNumber === rndNumber) {
      sendMessage('Yes, you won!', 'green');
      inputEl.style.borderColor = 'green';
    } else if (guessedNumber < rndNumber) {
      sendMessage(`You are below, try a higher number. ${attempts} attempts left`, 'red');
      inputEl.style.borderColor = 'red';
    } else {
      sendMessage(`Your guess is over, try a lower number. ${attempts} attempts left`, 'red');
      inputEl.style.borderColor = 'red';
    }
  }
  e.preventDefault();
});

function resetUI() {
  // reset UI properties
  guessButton.style.borderColor = origGuessButton.borderColor;
  guessButton.value = origGuessButton.value;
  inputEl.style.borderColor = origInput.borderColor;
  inputEl.value = '';
  attempts = 3;
  sendMessage('', 'green');
}

function sendMessage(msg, color) {
  msgEl.style.color = color;
  msgEl.textContent = msg;
}

// little bit of cheating here
console.log(`random number: ${rndNumber}`);
