var timeEl = document.querySelector(".timer");
var startButton = document.querySelector("#start");
var questionEl = document.querySelector('#questions');
var answerEl = document.querySelector('#answer');
var secondsLeft = 60;
var onGoing = false
var content = document.querySelector("header")
var questions;

// array of questions (5)
var questionsArray = [
    {
        Question: "0",
        Options: ["a", "b", "c"],
        Answer: 0
    }, 
    {
        Question: "1",
        Options: ["a", "b", "c"],
        Answer: 0
    },
    {
        Question: "2",
        Options: ["a", "b", "c"],
        Answer: 0
    },
    {
        Question: "3",
        Options: ["a", "b", "c"],
        Answer: 0
    },
    {
        Question: "4",
        Options: ["a", "b", "c"],
        Answer: 0
    }, 
    {
        Question: "5",
        Options: ["a", "b", "c"],
        Answer: 0
    }
]

startButton.addEventListener("click", startQuiz)

function startQuiz () {
    if(onGoing) {
        return
    }
    questions = [...questionsArray]
    hideEl()
    setTime()
    var shown = getQuestion()
    displayQuestion(shown.index, shown.shownQuestion)
    showQuestionEl()
}

function setTime() {

// timer
onGoing = true
  timeEl.textContent = secondsLeft
  var timerInterval = setInterval(function() {
    if(secondsLeft === 0) {
        timeEl.style.backgroundColor="none" 
        onGoing = false
        clearInterval(timerInterval); 
        secondsLeft = 60
        return
        }

    secondsLeft--;
    timeEl.textContent = secondsLeft;


  timeEl.style.backgroundColor="red"  

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
 content.style.opacity = "0"
}

// each question to be right or else wrong

// question to show up
function showQuestionEl() {
    questionEl.style.display="block"
}

function getQuestion() {
var index = Math.floor(Math.random() * questions.length)

var shownQuestion = questions[index]
return {
    index,
    shownQuestion
}
}

function displayQuestion(index, questionObject) {
var h1 = document.createElement('h1')


h1.textContent = questionObject.Question 
h1.setAttribute("data-question", index)
questionEl.appendChild(h1)
for (let i = 0; i < questionObject.Options.length; i++) {
    var displayOption = questionObject.Options[i]
    var li = document.createElement('li')
    li.textContent = displayOption
    li.setAttribute("data-option", i)
    questionEl.appendChild(li)
}
}


// add points together

// 