const task = document.getElementById("task");
const taskButton = document.getElementById("taskButton");
const todoList = document.querySelector(".todo-list");
const status = document.getElementById("status");

taskButton.addEventListener("click", addTask);
todoList.addEventListener("click", dltChk)

function addTask(e) {
  e.preventDefault();
  // create todo-div
  const todoDiv = document.createElement("li");
  todoDiv.classList.add("todo-div");

  // create p tag
  const para = document.createElement("p");
  para.innerText = task.value;

  //create buttons
  const tickButton = document.createElement("button");
  tickButton.classList.add("tick");
  tickButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-circle-fill" viewBox="0 0 16 16"><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/></svg>`;
  const trashButton = document.createElement("button");
  trashButton.classList.add("trash");
  trashButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16" ><path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" /></svg>`;

  //add buttons to todo-item
  todoDiv.appendChild(para);
  todoDiv.appendChild(tickButton);
  todoDiv.appendChild(trashButton);

  //append child to ul
  todoList.appendChild(todoDiv);

  //clear input
  task.value = "";
}

function dltChk(e){
    const item = e.target;
    if()
}