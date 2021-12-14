const display = document.querySelector(".display");
const restartButton = document.querySelector(".restart");
const startButton = document.querySelector(".startGame");
const goose = document.querySelector(".goose");
let gameOver = false;
let score = 0;
let animate = null;

// startgame
//      score++
//      bird++
// gameOver
//   showScore

startButton.addEventListener("click", startGame);

function startGame() {
  animate = setInterval(() => {
    let posX = 10 * random(0, 60);
    let posY = 10 * random(0, 40);

    goose.style.top = posY + "px";
    goose.style.left = posX + "px";
    goose.style.transitionDuration = random(1, 4) + "s";
  }, 1000);

  display.addEventListener("click", (e) => {
    if (e.target === goose) {
      clearInterval(animate);
      goose.style.top = 600 + "px";
      goose.style.transform = "rotate(-95deg)";
      goose.style.transitionDuration = 3 + "s";
      goose.classList.add("dead");
      console.log("You hit..");
    }
  });
}



function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

window.addEventListener("load", () => {});
