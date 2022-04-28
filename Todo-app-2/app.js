const formEl = document.querySelector("form");
const inputEl = document.querySelector("input");
const todos = document.querySelector(".todos");

formEl.addEventListener("submit", (e) => {
  e.preventDefault();
  const todo = inputEl.value;
  if (todo !== "" && todo !== null) {
    todos.innerHTML += `<li class="todo"><p>${todo}</p><div class="action"><i class="check ri-check-double-line"></i><i class="del ri-delete-bin-5-line"></i></div></li>
      `;
    inputEl.value = "";
  }
});

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
      console.log("remove")
      todo.remove();
    });
  }
});
