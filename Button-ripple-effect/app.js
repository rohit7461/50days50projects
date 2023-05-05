const button = document.querySelector("button");

button.addEventListener("click", (e) => {
  const x = e.offsetX;
  const y = e.offsetY;
  const circle = document.createElement("span");
  circle.classList.add("circle");
  circle.style.top = y + "px";
  circle.style.left = x + "px";

  button.appendChild(circle)
  setTimeout(() => {circle.remove()},1600)
});
