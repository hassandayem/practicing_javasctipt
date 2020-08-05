/* 
GAME RULES
1. The user should enter a number between min and max
2. If the number was equal to winningNumb, notify the user (WIN) and disable the input.
3. Esle show the message (LOSE), and notify user.
4. Allow the user to play again according to guessesLeft value.
5. If guessesLeft expired, notify the user and display what was the winningNumb.
6. Show a button in place of submit, says 'play again'.
 */

// Define the game variables
let min = 1,
  max = 10,
  winningNumb = 2,
  guessesLeft = 3;

// The UI
const game = document.getElementById("game"),
  minNum = document.querySelector(".min-num"),
  maxNum = document.querySelector(".max-num"),
  guessInput = document.querySelector("#guess-input"),
  submitBtn = document.querySelector("#guess-value"),
  message = document.querySelector(".message");

// Listen to the submit button
submitBtn.addEventListener("click", validateGame);

// Validate Game function
function validateGame() {
  let inputValue = parseInt(guessInput.value);

  // Check the game rules
  if (isNaN(inputValue) || inputValue < min || inputValue > max) {
    dynamicMessage(
      `Sorry, you have to enter a number between ${min} and ${max}`,
      "red"
    );
    // Change the border color, to improve the Mr. user experience
    guessInput.style.borderColor = "red";
  }

  // Check if Won
  if (inputValue === winningNumb) {
    // Make the user happy
    dynamicMessage(
      `CONGRATULATIONS! you win, ${winningNumb} is correct.`,
      "green"
    );
    // Change the border color
    guessInput.style.borderColor = "green";
    // Disable the input field
    guessInput.disabled = true;
  } else {
    // Make the user angyry
    dynamicMessage(
      `Sorry, that was wrong but you still have ${guessesLeft} guesses left`,
      "red"
    );
    // Change the border color
    guessInput.style.borderColor = "red";
  }
}

// message function
function dynamicMessage(phrase, color) {
  message.textContent = phrase;
  message.style.color = color;
}
