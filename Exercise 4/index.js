// Hide a given element
function hide(element) {
  element.style.display = "none";
}

// Display a given element
function show(element) {
  element.style.display = "block";
}

const passwordView = document.getElementById("passwordView");
const lostView = document.getElementById("lostView");
const wonView = document.getElementById("wonView");
const passwordInput = document.getElementById("passwordInput");
const checkButton = document.getElementById("checkButton");
const tryAgainButton = document.getElementById("tryAgainButton");

const instruction = document.getElementById("instructionLabel");
const tryAgain = document.getElementById("tryAgainButton");
tryAgain.style.color = "white";
tryAgain.style.fontSize = "1.5rem";
tryAgain.style.fontWeight = "bold";

const secret = "Hi";
var chanceRemaining = 3;

checkButton.addEventListener("click", () => {
  hide(passwordView);
  if (passwordInput.value != secret) {
    chanceRemaining--;
    show(lostView);
    tryAgain.innerHTML = `Try again ! (${chanceRemaining} chances left)`;
    if (chanceRemaining == 0) {    
      tryAgain.remove();
      hide(tryAgain);
    }
  } else {
    show(wonView);
  }
});

tryAgainButton.addEventListener("click", () => {
  if (chanceRemaining > 0) {
    hide(lostView);
    instruction.innerHTML = `Enter your code (You only have ${chanceRemaining} tries left!)`;
    show(passwordView);
  }
});