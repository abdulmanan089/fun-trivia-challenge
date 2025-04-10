// Array of quiz questions, options, correct answers, and related images
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

// Track the current question index and user's score
let current = 0;
let score = 0;

// Function to load a question and display its image and options
function loadQuestion() {
  const q = questions[current]; // Get current question object
  document.getElementById("question").innerText = q.question; // Display question text
  document.getElementById("question-image").src = q.image; // Set image for the question
  document.getElementById("question-image").alt = "Image for: " + q.question; // Set alt text

  // Create radio button options dynamically
  const opts = q.options.map(opt => 
    `<label><input type="radio" name="option" value="${opt}"> ${opt}</label><br>`
  );
  document.getElementById("options").innerHTML = opts.join(""); // Display options
}

// Function to handle answer submission
function submitAnswer() {
  const selected = document.querySelector('input[name="option"]:checked'); // Get selected option

  if (!selected) {
    alert("Please select an answer"); // Alert if nothing is selected
    return;
  }

  // Check if selected answer is correct
  const isCorrect = selected.value === questions[current].answer;

  // Show feedback message
  document.getElementById("feedback").innerText = isCorrect ? "✅ Correct!" : "❌ Wrong!";

  // Increase score if answer is correct
  if (isCorrect) score++;

  current++; // Move to next question

  // If there are more questions, load the next one after short delay
  if (current < questions.length) {
    setTimeout(() => {
      document.getElementById("feedback").innerText = ""; // Clear feedback
      loadQuestion(); // Load next question
    }, 800); // Wait 800ms before loading next
  } else {
    // End of quiz: save score and go to result page
    localStorage.setItem("quizScore", score);
    window.location.href = "result.html";
  }
}

// Load the first question when the page loads
window.onload = loadQuestion;
