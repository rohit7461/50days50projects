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

form.addEventListener("change", () => {
  console.log(cardsNo.value);
});

function generateRandomNumber() {
  randomNo = Math.floor(Math.random() * 10);
  console.log(randomNo);
}

function setCards(cardNum) {}

for (let i = 0; i < cards.length; i++) {
  cards[i].addEventListener("click", () => {
    card[i].classList.toggle("flipped");
  });
}

reset.addEventListener("click", () => {
  generateRandomNumber();
});


window.addEventListener("DOMContentLoaded", ()=>{
    // startGame()
    // setCards()
    // selectCard()
    //checkPair()
    // removeCard()
    // showResult()
})