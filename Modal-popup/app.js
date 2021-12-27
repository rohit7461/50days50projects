const modal = document.querySelector(".modal");
const closeBtn = document.querySelector(".bi");
const modalBtn = document.querySelector(".modal-btn");

modalBtn.addEventListener("click", () => {
  modal.classList.add("active");
});

closeBtn.addEventListener("click", () => {
  modal.classList.remove("active");
});
