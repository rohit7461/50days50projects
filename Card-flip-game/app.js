const grid = document.querySelector(".grid-container");
const cards = document.querySelectorAll(".card-container");
const card = document.querySelectorAll(".card");
const form = document.querySelector(".form");
const cardsNo = document.getElementById("cardsNo");
const reset = document.getElementById("reset");

let prevCard = "";
let currCard = "";
let randomNo = 0;
const icons = [
  "bi-snow2",
  "bi-puzzle",
  "bi-piggy-bank",
  "bi-usb-plug",
  "bi-yin-yang",
  "bi-tornado",
  "bi-ticket-detailed",
  "bi-sunglasses",
  "bi-megaphone",
  "bi-layout-wtf",
];



function generateRandomNumber() {
  randomNo = Math.floor(Math.random() * 10);
  console.log(randomNo);
}

function setCards(cardNum) {}



reset.addEventListener("click", () => {
  generateRandomNumber();
});

window.addEventListener("DOMContentLoaded", () => {
  // startGame()
  form.addEventListener("change", () => {
    console.log(cardsNo.value);
    grid.innerHTML = `<div class="card-container">
    <div class="card">
      <div class="front"></div>
      <div class="back"><i class="bi bi-usb-plug"></i></div>
    </div>
  </div>`;
  for (let i = 0; i < cards.length; i++) {
    cards[i].addEventListener("click", () => {
      card[i].classList.toggle("flipped");
    });
  }
  });
  // setCards()
  // selectCard()
  //checkPair()
  // removeCard()
  // showResult()
});
