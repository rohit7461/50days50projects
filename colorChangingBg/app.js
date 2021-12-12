const body = document.querySelector("body");
const button = document.querySelector("button");
const colorCode = document.querySelector(".colorCode");

chngeColor = () => {
  let red = Math.floor(Math.random() * 255);
  let green = Math.floor(Math.random() * 255);
  let blue = Math.floor(Math.random() * 255);

  let color = `rgb(${red}, ${green}, ${blue})`;
  if (red < 127 || blue < 127 || green < 127) {
    colorCode.style.color = "rgba(256,256,256, 0.3)";
  } else {
    colorCode.style.color = "rgba(0,0,0,0.3)";
  }
  colorCode.innerText = color
  body.style.backgroundColor = color;
};

button.addEventListener("click", chngeColor);
chngeColor();
