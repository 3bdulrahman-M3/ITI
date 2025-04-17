var questions = [
  {
    question: "What does DOM stand for?",
    options: [
      "Document Object Model",
      "Data Object Model",
      "Document Order Model",
      "Digital Object Mode",
    ],
    correctIndex: 0,
  },
  {
    question: "Which method is used to select an element by ID?",
    options: [
      "getElementByClassName",
      "querySelector",
      "getElementById",
      "getElementsByTagName",
    ],
    correctIndex: 2,
  },
  {
    question: "Which language runs in a web browser?",
    options: ["Python", "Java", "C++", "JavaScript"],
    correctIndex: 3,
  },
];
var currentQuestionIndex = 0;
var score = 0;
var totalQuestions = questions.length;
var questionElement = document.getElementById("question");
var progressElement = document.getElementById("progress");
// var resultElement = document.getElementById('result');
var optionsElement = document.getElementById("options");

loadQuestion();

function loadQuestion() {
  var currentQuestion = questions[currentQuestionIndex];
  questionElement.innerText = currentQuestion.question;
  progressElement.innerText = `Question ${
    currentQuestionIndex + 1
  } of ${totalQuestions}`;
  optionsElement.innerHTML = "";
  for (var index in currentQuestion.options) {
    var option = currentQuestion.options[index];
    var button = document.createElement("button");
    button.innerText = option;
    optionsElement.appendChild(button);

    button.setAttribute("data-index", index);

    button.onclick = function () {
      var selectedIndex = Number(this.getAttribute("data-index"));
      checkAnswer(selectedIndex);
    };
  }
  document.getElementById("nextBtn").style.display = "block";
  document.getElementById("result").innerText = "";
  if (currentQuestionIndex === totalQuestions - 1) {
    document.getElementById("nextBtn").innerText = "Finish";
  } else {
    document.getElementById("nextBtn").innerText = "Next Question";
  }
}

function checkAnswer(selectedIndex) {
  var currentQuestion = questions[currentQuestionIndex];
  var optionButtons = document
    .getElementById("options")
    .getElementsByTagName("button");

  if (selectedIndex === currentQuestion.correctIndex) {
    score++;
    optionButtons[selectedIndex].style.backgroundColor = "green";
  } else {
    optionButtons[currentQuestion.correctIndex].style.backgroundColor = "green";
    optionButtons[selectedIndex].style.backgroundColor = "red";
  }

  document.getElementById("nextBtn").style.display = "block";
}

function getNextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex < totalQuestions) {
    loadQuestion();
    document.getElementById("result").innerText = "";
    document.getElementById("nextBtn").style.display = "block";
  } else {
    document.getElementById("question").innerText =
      "Quiz Over thnks wich you best";
    document.getElementById("options").innerHTML = "";
    document.getElementById("progress").innerText = "";
    document.getElementById("result").innerText =
      " Your score is: " + score + "/" + totalQuestions;
    document.getElementById("nextBtn").style.display = "none";
  }
}
