const content = document.getElementById("content");
const likesCounter = document.getElementById("likesCounter");
let clickTime = 0;
let timesClicked = 0;

content.addEventListener("click", (e) => {
  if (clickTime === 0) {
    clickTime = new Date().getTime();
  } else {
    if (new Date().getTime() - clickTime < 800) {
      createHeart(e);
      clickTime = 0;
    } else {
      clickTime = new Date().getTime();
    }
  }
});

const createHeart = (e) => {
  const heart = document.createElement("i");
  heart.classList.add("bx");
  heart.classList.add("bxs-heart");

  const x = e.clientX;
  const y = e.clientY;

  const leftOffset = e.target.offsetLeft;
  const rightOffset = e.target.offsetTop;

  const posX = x - leftOffset;
  const posY = y - rightOffset;

  heart.style.top = posY + "px";
  heart.style.left = posX + "px";

  content.appendChild(heart);
  likesCounter.innerText = `${++timesClicked} Likes`;

  setTimeout(() => {
    heart.remove();
  }, 1000);
};
