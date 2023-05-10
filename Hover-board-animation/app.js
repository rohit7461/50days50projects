const container = document.querySelector(".box-container");

const boxCount = 644;
const colors = ["#f04b4b", "#95f04b", "#4beaf0", "#f04bbf"];

for (let i = 0; i < boxCount; i++) {
  const box = document.createElement("div");
  box.classList.add("box");
  box.addEventListener("mouseenter", () => addColor(box));
  box.addEventListener("mouseleave", () => removeColor(box));
  container.appendChild(box);
}

const addColor = (box) => {
  box.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
};

const removeColor = (box) => {
  box.style.backgroundColor = "#232323";
};
