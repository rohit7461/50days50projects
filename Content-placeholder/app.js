const cardHeader = document.getElementById("cardHeader");
const title = document.getElementById("title");
const excerpt = document.getElementById("excerpt");
const profileImg = document.getElementById("profile-img");
const namer = document.getElementById("name");
const date = document.getElementById("date");

const animatedBg = document.querySelectorAll(".animated-bg");
const animatedTextBg = document.querySelectorAll(".animated-text-bg");

setTimeout(() => {
  cardHeader.innerHTML =
    '<img src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1331&q=80" alt="" />';
  title.innerText = "Lorem ipsum dolor sit";
  excerpt.innerText =
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis repellendus magnam";
  profileImg.innerHTML =
    "<img src='https://randomuser.me/api/portraits/men/45.jpg' alt='' />";
  namer.innerText = "John Doe";
  date.innerText = "Dec 28, 2021";

  animatedBg.forEach((bg) => {
    bg.classList.remove("animated-bg");
  });
  animatedTextBg.forEach((tbg) => {
    tbg.classList.remove("animated-text-bg");
  });
}, 3000);
