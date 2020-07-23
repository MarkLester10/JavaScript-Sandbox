/*
  GAME FUNCTION:
  -Player must guess a number between a min and max
  -Player gets a certain amount of guesses
  -Notify player of guesses remaining
  -Notify the player of the correct answer if loose
  -Let player choose to play again
*/

//Game values
let min = 1,
  max = 10,
  winningNumber = getRandomNum(min, max),
  guessesLeft = 3;

//UI Elements
const game = document.getElementById("game"),
  minNum = document.querySelector(".min-num"),
  maxNum = document.querySelector(".max-num"),
  guessBtn = document.querySelector("#guess-btn"),
  guessInput = document.querySelector("#guess-input"),
  message = document.querySelector(".message");

//Asssign UI min and max
minNum.textContent = min;
maxNum.textContent = max;

//Play Again event listener
game.addEventListener("mousedown", function (e) {
  if (e.target.className === "play-again") window.location.reload();
});

//Listen for guess
guessBtn.addEventListener("click", function () {
  let guess = parseInt(guessInput.value);

  //validate input
  //use isNan to test if a number is NaN
  if (isNaN(guess) || guess < min || guess > max) {
    setMessage(`Please Enter a number between ${min} and ${max}`, "red");
  } else {
    //check if won
    if (guess === winningNumber) {
      //Game over - won
      gameOver(true, `${winningNumber} is correct, You Win!`);
    } else {
      //Wrong number
      guessesLeft -= 1;

      if (guessesLeft === 0) {
        //Game Over - lost
        gameOver(
          false,
          `Game Over, you lost. The correct number is ${winningNumber}`
        );
        guessInput.disabled = true;
        guessBtn.value = "Play Again";
        guessBtn.className += "play-again";
      } else {
        //Game continues - answer is wrong
        gameOver(false, `${guess} is not correct, ${guessesLeft} guesses left`);
      }
    }
  }
});

//Game Over
function gameOver(isWon, msg) {
  let color;
  isWon === true ? (color = "green") : (color = "red");

  //disable or enable input
  guessInput.disabled = isWon ? true : false;
  //change border color
  guessInput.style.borderColor = color;
  //set message
  setMessage(msg, color);
  //clear input
  guessInput.value = "";

  //Play Again
  if (isWon) {
    guessBtn.value = "Play Again";
    guessBtn.className += "play-again";
  }
}

//get new winning number
//hoisted function
function getRandomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);

  //Math.random() * 10 will give 0-9 random number
}

//Set message
function setMessage(msg, color) {
  message.style.color = color;
  message.textContent = msg;
}
