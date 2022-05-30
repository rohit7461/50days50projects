const formEl = document.querySelector("form");
const inputEl = document.querySelector("input");
const todos = document.querySelector(".todos");
const currentYear = document.getElementById("year");
const currentDay = document.getElementById("day");
const currentMonth = document.getElementById("month");
const currentDate = document.getElementById("date");

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const minute = 1000 * 60;
const hr = minute * 60;
const day = hr * 24;
const month = day * 30;
const year = day * 365;

window.addEventListener("load", () => {
  const d = Date.now();
  const date = new Date(d);
  console.log(date);
  currentYear.innerHTML = date.getFullYear();
  currentMonth.innerHTML = months[date.getMonth()];
  currentDate.innerHTML = date.getDate();
  currentDay.innerHTML = days[date.getDay()];
});

// event on form submission
formEl.addEventListener("submit", (e) => {
  e.preventDefault();
  const todo = inputEl.value;
  if (todo !== "" && todo !== null) {
    todos.innerHTML += `<li class="todo"><p>${todo}</p><div class="action"><i class="check ri-check-double-line"></i><i class="del ri-delete-bin-5-line"></i></div></li>
      `;
    inputEl.value = "";
  }
});

// event on todo-items
todos.addEventListener("click", (e) => {
  const item = e.target;
  if (item.classList[0] == "check") {
    const todo = item.parentElement.parentElement;
    todo.classList.toggle("done");
  }
  if (item.classList[0] == "del") {
    const todo = item.parentElement.parentElement;
    todo.classList.add("fade");
    todo.addEventListener("animationend", () => {
      console.log("remove");
      todo.remove();
    });
  }
});
