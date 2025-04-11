// Questions for the quiz - each one has a question, options, answer, and image
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

// Keep track of current question and user score
let current = 0;
let score = 0;

// Loads a question and shows the image and options
function loadQuestion() {
  const q = questions[current]; // Get current question info

  // Show question and related image
  document.getElementById("question").innerText = q.question;
  document.getElementById("question-image").src = q.image;
  document.getElementById("question-image").alt = "Image for: " + q.question;

  // Create options as radio buttons
  const opts = q.options.map(opt => 
    `<label><input type="radio" name="option" value="${opt}"> ${opt}</label><br>`
  );

  // Add options to the page
  document.getElementById("options").innerHTML = opts.join("");
}

// This function runs when user clicks Submit
function submitAnswer() {
  // Get selected answer
  const selected = document.querySelector('input[name="option"]:checked');

  // If nothing is selected, show alert
  if (!selected) {
    alert("Please select an answer");
    return;
  }

  // Check if answer is correct
  const isCorrect = selected.value === questions[current].answer;

  // Show correct or wrong feedback
  document.getElementById("feedback").innerText = isCorrect ? "✅ Correct!" : "❌ Wrong!";

  // If correct, add 1 to score
  if (isCorrect) score++;

  // Move to next question
  current++;

  // If there are more questions, show the next one after a short pause
  if (current < questions.length) {
    setTimeout(() => {
      document.getElementById("feedback").innerText = ""; // Clear feedback
      loadQuestion(); // Load next
    }, 800);
  } else {
    // If quiz is finished, save score and go to results page
    localStorage.setItem("quizScore", score);
    window.location.href = "result.html";
  }
}

// Load the first question when the page opens
window.onload = loadQuestion;
