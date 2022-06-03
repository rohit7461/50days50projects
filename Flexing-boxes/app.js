const boxContainer = document.querySelector(".box-container");
const allBoxes = document.querySelectorAll(".box");

allBoxes.forEach((box) => {
  box.addEventListener("click", () => {
    allBoxes.forEach((box) => {
      box.classList.remove("active");
    });
    box.classList.add("active");
  });
});

window.addEventListener("load", ()=>{
    allBoxes[0].classList.add("active")
})
