const grid = document.querySelector(".grid-container");
const cards = document.querySelectorAll(".card-container");
const card = document.querySelector(".card");
const form = document.querySelector(".form");
const cardsNo = document.getElementById("cardsNo");

// const

form.addEventListener("change", () => {
  console.log(cardsNo.value);
});

cards.forEach((cardi) => {
  cardi.addEventListener("click", () => {
    card.classList.toggle("flipped");
  });
});
