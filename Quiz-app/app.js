const quizData = [
  {
    question: "1. How did Joffrey die?",
    a: "Poisoned at his own wedding feast",
    b: "Struck by an errant crossbow shot",
    c: "Thrown by the walls of the Red Keep",
    d: "Stabbed by a horde of small children",
    answer: "a",
  },
  {
    question:
      "2. Which of the following was Sansa never married or engaged to?",
    a: "Joffrey Baratheon",
    b: "Tyrion Lannister",
    c: "Ramsay Bolton",
    d: "Loras Tyrell",
    answer: "b",
  },
  {
    question: "3. Which of the following is NOT one of Daenerys's dragons?",
    a: "Aegon",
    b: "Viserion",
    c: "Rhaegal",
    d: "Drogon",
    answer: "a",
  },
  {
    question: "4. Which of the following is NOT one of Daenerys's titles?",
    a: "Breaker of Chains",
    b: "Mother of Dragons",
    c: "Khaleesi",
    d: "The Unsullied",
    answer: "d",
  },
  {
    question:
      "5. Which of the following kingdoms is, on average, furthest south?",
    a: "The Riverlands",
    b: "Dorne",
    c: "The Vale",
    d: "The Reach",
    answer: "b",
  },
  {
    question: "6. What is the sigil of house Baratheon?",
    a: "Rose",
    b: "Stag",
    c: "Moon",
    d: "Unicorn",
    answer: "b",
  },
  {
    question: "7. How are Jon and Daenerys related to each other?",
    a: "Brother / Sister",
    b: "Aunt / Nephew",
    c: "Cousins",
    d: "They aren't",
    answer: "b",
  },
  {
    question:
      "8. Where would you find the Citadel, the headquarters of the order of the maesters?",
    a: "Oldtown",
    b: "Braavos",
    c: "Qarth",
    d: "Lannisport",
    answer: "a",
  },
  {
    question:
      "9. Which of these characters never served as hand to a king (or queen)?",
    a: "Jorah Mormont",
    b: "Ser Davos Seaworth",
    c: "Ned Stark",
    d: "Tyrion Lannister",
    answer: "a",
  },
  {
    question: "10. Who brought Jon Snow back from the dead?",
    a: "Brandon Stark",
    b: "Jaqen H'ghar",
    c: "Melisandre",
    d: "The Children of the Forest",
    answer: "c",
  },
];

const quizForm = document.getElementById("quizForm");
const quiz = document.getElementById("quiz");
const aText = document.getElementById("a_text");
const bText = document.getElementById("b_text");
const cText = document.getElementById("c_text");
const dText = document.getElementById("d_text");
const option1 = document.getElementById("option1");
const option2 = document.getElementById("option2");
const option3 = document.getElementById("option3");
const option4 = document.getElementById("option4");
let score = 0;
let count = 0;

// load quiz data serially
// check answer
//   score++
// next quiz
// at end show score

window.addEventListener("load", () => {
  serveQuiz();
});

function serveQuiz() {
  if (count >= 10) return;
  quiz.option1.setAttribute("")
  quiz.innerText = quizData[count].question;
  aText.innerText = quizData[count].a;
  bText.innerText = quizData[count].b;
  cText.innerText = quizData[count].c;
  dText.innerText = quizData[count].d;
  count++;
}

quizForm.addEventListener("submit", (e) => {
  e.preventDefault();
  serveQuiz();
});
