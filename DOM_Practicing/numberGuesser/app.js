/* 
GAME RULES
1. The user should enter a number between min and max
2. If the number was equal to winningNumb, notify the user (WIN) and disable the input.
3. Else show the message (LOSE), and notify user.
4. Allow the user to play again according to guessesLeft value.
5. If guessesLeft expired, notify the user and display what was the winningNumb.
6. Show a button in place of submit, says 'play again'.
 */

// Define the game variables
let min = 1,
  max = 10,
  winningNumb = getRandomNum(min, max),
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

// Listen to play again button
game.addEventListener("mousedown", function (e) {
  if (e.target.className === "play-again") {
    window.location.reload();
  }
});

// Validate Game function
function validateGame() {
  let inputValue = parseInt(guessInput.value);

  // Check the game rules
  if (isNaN(inputValue) || inputValue < min || inputValue > max) {
    dynamicMessage(
      `Sorry, you have to enter a number between ${min} and ${max}`,
      "orange"
    );
    // Change the border color, to improve the Mr. user experience
    guessInput.style.borderColor = "orange";
  }

  // Check if the game over
  if (inputValue === winningNumb) {
    // Game Over - WON - Make the user happy
    gameOver(true, `CONGRATULATIONS! you win, ${winningNumb} is correct.`);
  } else {
    guessesLeft -= 1;

    if (guessesLeft === 0) {
      // Game Over -LOST- Make the user angry
      gameOver(false, `Sorry, you lost, the correct number was ${winningNumb}`);
    } else {
      // Give the user some hope
      dynamicMessage(
        `Sorry, that was wrong but you still have ${guessesLeft} guesses left`,
        "red"
      );
      // Change the border color
      guessInput.style.borderColor = "red";
      // Empty the field to enter a new value
      guessInput.value = "";
    }
  }
}

// Game over
function gameOver(won, msg) {
  let color;
  won === true ? (color = "green") : (color = "red");
  // Change the border color
  guessInput.style.borderColor = color;
  // Change the message color
  message.style.color = color;
  // Disable the input field
  guessInput.disabled = true;
  // Set the message
  dynamicMessage(msg);

  // Play Again
  submitBtn.value = "Play Again";
  submitBtn.className += "play-again";
}

// Get a random number
function getRandomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// message function
function dynamicMessage(phrase, color) {
  message.textContent = phrase;
  message.style.color = color;
}
