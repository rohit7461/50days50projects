const textEl = document.querySelector(".text");
const speed = 150;
const text = "We have immense expertise in";
let idx = 1;
let word = "Computers...";

writeText();

function writeText() {
  textEl.innerText = `${text} ${word.slice(0, idx)}`;
  idx++;
  if (idx > word.length) {
    idx = 1;
  }
  setTimeout(writeText, speed);
}
