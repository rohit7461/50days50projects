const hamburger = document.getElementById("hamburger");
const links = document.querySelector(".links");
const linkItem = document.querySelectorAll(".link-items");

hamburger.addEventListener("click", () => {
  links.classList.toggle("show");
});

links.addEventListener("click",()=>{
    links.classList.toggle("show")
})