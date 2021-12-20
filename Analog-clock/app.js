const hr = document.getElementById("hr");
const min = document.getElementById("min");
const sec = document.getElementById("sec");

const deg = 6;

setInterval(() => {
  const day = new Date();
  const hh = day.getHours() * 30;
  const mm = day.getMinutes() * deg;
  const ss = day.getSeconds() * deg;
  console.log(hh, mm, ss);

  hr.style.transform = `rotate(${hh + mm / 12}deg)`;
  min.style.transform = `rotate(${mm + ss / 60}deg)`;
  sec.style.transform = `rotate(${ss}deg)`;
}, 1000);
