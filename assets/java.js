var timeEl = document.querySelector(".timer");
var startButton = document.querySelector("#start");
var questionEl = document.querySelector("#question");
var answerEl = document.querySelector("#answers");
var rightWrong = document.querySelector("#right-wrong");
var secondsLeft = 60;
var onGoing = false;
var content = document.querySelector("header");
var qaWrapper = document.querySelector("#question-answer-wrapper");
var questions;
var incorrectAnswer = 10;
var index = 0;
var timerInterval;
var nameContainer = document.querySelector(".name-container");

var highScoreName = localStorage.getItem("highScoreName");
var highScore = localStorage.getItem("highScore");
var currentScore = localStorage.getItem("currentScore");

// array of questions (5)
var questionsArray = [
  {
    question: "Inside which HTML element do we put the JavaScript?",
    a: "<script>",
    b: "<js>",
    c: "<html>",
    answer: "a",
  },
  {
    question: "How to write an IF statement in JavaScript?",
    a: "if (i==5)",
    b: "if i=5",
    c: "if i==5 then",
    answer: "a",
  },
  {
    question: "How does a FOR loop start?",
    a: "for (i<=5; i++)",
    b: "for i=1 to 5",
    c: "yfor (i=0; i<=5; i++",
    answer: "a",
  },
  {
    question: "How do you declare a JavaScript variable?",
    a: "var carName;",
    b: "v carName;",
    c: "variablee carName;",
    answer: "a",
  },
  {
    question: "Which operator is used to assign a value to a variable?",
    a: "x",
    b: "=",
    c: "-",
    answer: "b",
  },
  {
    question: "Is JavaScript case-senstive?",
    a: "yes",
    b: "no",
    c: "depends",
    answer: "a",
  },
];

nameContainer.style.display = "none";

function startQuiz() {
  // if(onGoing) {
  //     return
  // }
  questionsArray = questionsArray.sort(function () {
    return Math.random() - 0.5;
  });
  console.log(questionsArray);
  questions = [...questionsArray];
  hideEl();
  setTime();
  showNextQuestion();
}

function showNextQuestion() {
  //   var shown = getQuestion();
  displayQuestion();
  showQuestionEl();
}

function setTime() {
  // timer
  onGoing = true;
  timeEl.textContent = secondsLeft;
  timerInterval = setInterval(function () {
    if (secondsLeft === 0) {
      timeEl.style.backgroundColor = "none";
      onGoing = false;
      clearInterval(timerInterval);
      secondsLeft = 60;
      return;
    }

    secondsLeft--;
    timeEl.textContent = secondsLeft;

    timeEl.style.backgroundColor = "red";
  }, 1000);
}

// highscores
// function getHighscores() {
//     var storedWins = localStorage.getItem("winCount");
//     if (storedWins === null) {
//       winCounter = 0;
//     } else {

//       winCounter = storedWins;
//     }

//     win.textContent = winCounter;
//   }

//   startButton.addEventListener("click", startGame);

// start button to start first question and get rid of content
function hideEl() {
  content.style.display = "none";
  nameContainer.style.display = "none";
}

// each question to be right or else wrong

// question to show up
function showQuestionEl() {
  questionEl.style.display = "block";
}

// function getQuestion() {
//   var shownQuestionObject = questions[index];
//   return {
//     index,
//     shownQuestionObject,
//   };
// }

function displayQuestion() {
  var questionObject = questions[index];
  answerEl.textContent = "";
  questionEl.textContent = questionObject.question;
  questionEl.setAttribute("data-question", index);

  var buttonA = document.createElement("button");
  buttonA.classList.add("btn");
  buttonA.textContent = questionObject.a;
  buttonA.setAttribute("data-btnAnswer", "a");
  var buttonB = document.createElement("button");
  buttonB.classList.add("btn");
  buttonB.textContent = questionObject.b;
  buttonB.setAttribute("data-btnAnswer", "b");
  var buttonC = document.createElement("button");
  buttonC.classList.add("btn");
  buttonC.textContent = questionObject.c;
  buttonC.setAttribute("data-btnAnswer", "c");

  answerEl.append(buttonA);
  answerEl.append(buttonB);
  answerEl.append(buttonC);
  // if a button is clicked inside the wrapper,

  // check to see if there are any more questions/or if time is up(game over)
  // move on to next question
  // if wrong, minus 10 seconds from timer
  // display "wrong"
  // save to local storage
  // move on to next question
  var buttonEl = document.querySelectorAll(".btn");
  for (let i = 0; i < buttonEl.length; i++) {
    buttonEl[i].addEventListener("click", function (event) {
      if (event.target.matches("button")) {
        console.log(event.target.dataset.btnanswer);
        if (event.target.dataset.btnanswer === questionObject.answer) {
          rightWrong.textContent = "correct";
          console.log("correct");
        } else {
          rightWrong.textContent = "wrong";
          console.log("no");
        }
        console.log(index);
        index++;
        if (index < questions.length) {
          showNextQuestion();
        } else {
          qaWrapper.style.display = "none";
          nameContainer.style.display = "block";
          clearInterval(timerInterval);
        }
        // if does add points to points and local storage
        // localStorage.setItem('currentScore', score)}
      }
    });
  }
}

// function removeQuestion(index) {
//   questions.splice(index, 1);
// }
// add points together

startButton.addEventListener("click", startQuiz);
