const sliderContainer = document.querySelector(".slider-container");
const leftSlider = document.querySelector(".left-slide");
const rightSlider = document.querySelector(".right-slide");
const upButton = document.querySelector(".up-button");
const downButton = document.querySelector(".down-button");
const slidesCount = rightSlider.querySelectorAll("div").length;

let currentSlide = 0;

leftSlider.style.top = -(slidesCount - 1) * 100 + "vh";

upButton.addEventListener("click", () => {
  changeSlide("up");
});
downButton.addEventListener("click", () => {
  changeSlide("down");
});

function changeSlide(direction) {
  if (direction == "up") {
    ++currentSlide;
    if (currentSlide >= slidesCount) {
      currentSlide = 0;
    }
  }
  if (direction == "down") {
    --currentSlide;
    if (currentSlide < 0) {
      currentSlide = slidesCount - 1;
    }
  }
  rightSlider.style.top = -currentSlide * 100 + "vh";
  leftSlider.style.top = -(slidesCount - currentSlide - 1) * 100 + "vh";
}
