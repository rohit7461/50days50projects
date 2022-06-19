const signinBtn = document.getElementById("signin");
const signupBtn = document.getElementById("signup");
const container = document.querySelector(".container");
const containerSignin = document.querySelector(".container-signin");
const containerSignup = document.querySelector(".container-signup");
const forms = document.querySelectorAll(".form");

forms.forEach((form) => {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
  });
});

signupBtn.addEventListener("click", () => {
  console.log(container.classList);
  container.classList.add("right-panel-active");
});

signinBtn.addEventListener("click", () => {
  container.classList.remove("right-panel-active");
});
