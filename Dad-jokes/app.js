const jokesList = document.querySelector(".jokes");
const button = document.querySelector("button");

button.addEventListener("click", () => {
  fetch("https://icanhazdadjoke.com/", {
    headers: { Accept: "application/json" },
  })
    .then((res) => res.json())
    .then((data) => {
        let joker = document.createElement("li")
        joker.innerText = data.joke;
        jokesList.appendChild(joker)
    });
});
