// Questions for the quiz - each one has a question, options, answer, and image
const questions = [
  {
    question: "Which movie won Best Picture in 2020?",
    options: ["Joker", "Parasite", "1917", "Ford v Ferrari"],
    answer: "Parasite",
    image: "images/question1.jpg"
  },
  {
    question: "Who played Iron Man in the MCU?",
    options: ["Chris Evans", "Robert Downey Jr.", "Mark Ruffalo", "Chris Pratt"],
    answer: "Robert Downey Jr.",
    image: "images/question2.jpg"
  },
  {
    question: "What is the name of the hobbit played by Elijah Wood?",
    options: ["Bilbo", "Sam", "Frodo", "Pippin"],
    answer: "Frodo",
    image: "images/question3.jpg"
  },
  {
    question: "Which movie features the quote: 'I'll be back'?",
    options: ["The Matrix", "Die Hard", "Terminator", "Robocop"],
    answer: "Terminator",
    image: "images/question4.jpg"
  },
  {
    question: "Superman vs Thor — Who would win?",
    options: ["Superman", "Thor"],
    answer: "Superman",
    image: "images/question5.jpg"
  }
];

// Keep track of which question the user is on and the score
let current = 0;
let score = 0;

// Loads the current question, image, and all the options on the page
function loadQuestion() {
  const q = questions[current]; // get the current question object

  // show the question text
  document.getElementById("question").innerText = q.question;

  // set background image (instead of using <img> tag)
  document.getElementById("question-image").style.backgroundImage = `url('${q.image}')`;

  // hide image until the user submits their answer
  document.getElementById("question-image-container").style.display = "none";

  // make the options into radio buttons with labels
  const opts = q.options.map(opt => 
    `<label><input type="radio" name="option" value="${opt}"> ${opt}</label><br>`
  );

  // put the options in the HTML
  document.getElementById("options").innerHTML = opts.join("");
}

// This runs when the user clicks the "Submit" button
function submitAnswer() {
  // check if the user selected an answer
  const selected = document.querySelector('input[name="option"]:checked');

  if (!selected) {
    alert("Please select an answer"); // no answer selected
    return;
  }

  // check if the selected answer is right
  const isCorrect = selected.value === questions[current].answer;

  // show feedback based on the answer
  document.getElementById("feedback").innerText = isCorrect ? "✅ Correct!" : "❌ Wrong!";

  // show the image after submitting the answer
  document.getElementById("question-image-container").style.display = "block";

  // if correct, increase the score
  if (isCorrect) score++;

  // go to the next question
  current++;

  // if there are more questions, load the next one after a short pause
  if (current < questions.length) {
    setTimeout(() => {
      document.getElementById("feedback").innerText = ""; // clear feedback
      loadQuestion(); // load next question
    }, 800);
  } else {
    // quiz is done – save the score and move to the result page
    localStorage.setItem("quizScore", score);
    window.location.href = "result.html";
  }
}

// Load the first question when the page finishes loading
window.onload = loadQuestion;
