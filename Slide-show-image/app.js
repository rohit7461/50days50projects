const prevButton = document.querySelector(".bi-arrow-left-circle-fill");
const nextButton = document.querySelector(".bi-arrow-right-circle-fill");

const images = document.querySelectorAll("img");
let count = 0;

function showImage(index) {
  images.forEach((image) => {
    image.classList.remove("active");
  });
  images[index].classList.add("active");
}

prevButton.addEventListener("click", showPrev);

nextButton.addEventListener("click", showNext);

function showPrev() {
  count--;
  if (count < 0) {
    count = images.length - 1;
  }
  showImage(count);
}

function showNext() {
  count++;
  if (count >= images.length) {
    count = 0;
  }
  showImage(count);
}

showImage(count);

setInterval(()=>{
    showNext();
},2000)

