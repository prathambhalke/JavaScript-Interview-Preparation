const input = document.getElementById("user-input");
const startAgain = document.querySelector(".start-btn");
const submit = document.querySelector(".submitBtn");
const message = document.querySelector("#message");
const guess = document.querySelector("#guess");

const randomNumber = Math.floor(Math.random() * 100);
const guesses = [];

let guessNumber;

input.addEventListener("input", (e) => {
  guessNumber = parseInt(e.target.value);
});

console.log("you found it🥲!", randomNumber);

submit.addEventListener("click", (e) => {
  e.preventDefault();

  if (isNaN(guessNumber)) {
    message.innerHTML = "Please enter a valid number!";
    return;
  }

  if (guessNumber < randomNumber) {
    message.innerHTML = "Too low!";
  } else if (guessNumber > randomNumber) {
    message.innerHTML = "Too high!";
  } else {
    message.innerHTML = "You got it! Congrats";
    startAgain.disabled = false;
    submit.disabled = true;
    input.disabled = true;
  }

  if (guesses.length === 9 && guessNumber !== randomNumber) {
    message.innerHTML = `You lost! The number was ${randomNumber}`;
    startAgain.disabled = false;
    submit.disabled = true;
    input.disabled = true;
  } else if (!isNaN(guessNumber) && guessNumber !== null) {
    guesses.push(guessNumber);
    guess.innerHTML = `Your guesses: ${guesses.join(", ")}`;
  }

  // Reset the input field and guessNumber
  input.value = "";
  guessNumber = null;
});

startAgain.addEventListener("click", (e) => {
  e.preventDefault();
  guesses.length = 0;
  message.innerHTML = "";
  guess.innerHTML = "";
  startAgain.disabled = true;
  submit.disabled = false;
  input.disabled = false;
  input.value = "";
  guessNumber = null;
});
