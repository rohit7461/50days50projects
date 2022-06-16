const signinBtn = document.getElementById("signin");
const signupBtn = document.getElementById("signup");
const container = document.querySelector(".container");
const containerSignin = document.querySelector(".container-signin");
const containerSignup = document.querySelector(".container-signup");

signupBtn.addEventListener("click", () => {
    console.log(container.classList)
  container.classList.add("active");
});

signinBtn.addEventListener("click", ()=>{
    container.classList.remove("active")
})