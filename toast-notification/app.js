const toasts = document.getElementById("toasts");
const button = document.querySelector("button");

const messages = ["Message One", "Message Two", "Message Three"];
const types = ["error", "success", "warning"];

button.addEventListener("click", () => {
  addToastNotification();
});

function addToastNotification(message = null, type = null) {
  const notif = document.createElement("div");
  notif.classList.add("toast");
  notif.classList.add(type ? type : getRandomType());
  notif.innerText = message ? message : getRandomMessage();

  toasts.appendChild(notif);

  setTimeout(() => {
    notif.remove();
  }, 3000);
}

function getRandomType() {
  return types[Math.floor(Math.random() * types.length)];
}
function getRandomMessage() {
  return messages[Math.floor(Math.random() * messages.length)];
}
