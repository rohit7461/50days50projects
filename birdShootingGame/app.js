const display = document.querySelector(".display");
const restartButton = document.querySelector(".restart");
const startButton = document.querySelector(".startGame");
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
  const gooses = document.querySelectorAll(".goose");
  gooses.forEach((goose) => {
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
        goose.style.top = 800 + "px";
        goose.style.transform = "rotate(-95deg)";
        goose.style.transitionDuration = 3 + "s";
        goose.classList.add("dead");
        console.log("You hit..");

        setTimeout(() => {
          goose.remove();
          const bird = document.createElement("img");
          bird.src = "goose.png";
          bird.classList.add("goose");
          display.appendChild(bird);
          // startGame();
        }, 1000);
      }
    });
  });
}

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

window.addEventListener("load", () => {});
