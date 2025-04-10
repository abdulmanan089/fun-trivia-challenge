const questions = [
  {
    question: "Which movie won Best Picture in 2020?",
    options: ["Joker", "Parasite", "1917", "Ford v Ferrari"],
    answer: "Parasite",
    image: "images/parasite.jpg"
  },
  {
    question: "Who played Iron Man in the MCU?",
    options: ["Chris Evans", "Robert Downey Jr.", "Mark Ruffalo", "Chris Pratt"],
    answer: "Robert Downey Jr.",
    image: "images/ironman.jpg"
  },
  {
    question: "What is the name of the hobbit played by Elijah Wood?",
    options: ["Bilbo", "Sam", "Frodo", "Pippin"],
    answer: "Frodo",
    image: "images/frodo.jpg"
  },
  {
    question: "Which movie features the quote: 'I'll be back'?",
    options: ["The Matrix", "Die Hard", "Terminator", "Robocop"],
    answer: "Terminator",
    image: "images/terminator.jpg"
  },
  {
    question: "Superman vs Thor — Who would win?",
    options: ["Superman", "Thor"],
    answer: "Superman",
    image: "images/superman_vs_thor_chart.png"
  }
];

let current = 0;
let score = 0;

function loadQuestion() {
  const q = questions[current];
  document.getElementById("question").innerText = q.question;
  document.getElementById("question-image").src = q.image;
  document.getElementById("question-image").alt = "Image for: " + q.question;
  const opts = q.options.map(opt => `<label><input type="radio" name="option" value="${opt}"> ${opt}</label><br>`);
  document.getElementById("options").innerHTML = opts.join("");
}

function submitAnswer() {
  const selected = document.querySelector('input[name="option"]:checked');
  if (!selected) {
    alert("Please select an answer");
    return;
  }

  const isCorrect = selected.value === questions[current].answer;
  document.getElementById("feedback").innerText = isCorrect ? "✅ Correct!" : "❌ Wrong!";
  if (isCorrect) score++;

  current++;
  if (current < questions.length) {
    setTimeout(() => {
      document.getElementById("feedback").innerText = "";
      loadQuestion();
    }, 800);
  } else {
    localStorage.setItem("quizScore", score);
    window.location.href = "result.html";
  }
}

window.onload = loadQuestion;
