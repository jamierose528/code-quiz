var timeEl = document.querySelector(".timer");
var startButton = document.querySelector("#start");
var questionEl = document.querySelector('#question');
var answerEl = document.querySelector('#answers');
var rightWrong = document.querySelector('#right-wrong');
var secondsLeft = 60;
var onGoing = false
var content = document.querySelector("header")
var questions;

// array of questions (5)
var questionsArray = [
    {
        question: "what is color",
        a: "blue",
        b: "green",
        c: "yellow",
        answer: "c"
    }, 
    {
        question: "what is color",
        a: "blue",
        b: "green",
        c: "yellow",
        answer: "b"
    },
    {
        question: "what is color",
        a: "blue",
        b: "green",
        c: "yellow",
        answer: "a"
    },
    {
        question: "what is color",
        a: "blue",
        b: "green",
        c: "yellow",
        answer: "b"
    },
    {
        question: "what is color",
        a: "blue",
        b: "green",
        c: "yellow",
        answer: "c"
    }, 
    {
        question: "what is color",
        a: "blue",
        b: "green",
        c: "yellow",
        answer: "a"
    }
]


function startQuiz () {
    // if(onGoing) {
    //     return
    // }
    questions = [...questionsArray]
    hideEl()
    setTime()
    var shown = getQuestion()
    displayQuestion(shown.index, shown.shownQuestionObject)
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
 content.style.display = 'none'
}

// each question to be right or else wrong


// question to show up
function showQuestionEl() {
    questionEl.style.display="block"
}

function getQuestion() {
var index = Math.floor(Math.random() * questions.length)

var shownQuestionObject = questions[index]
return {
    index,
    shownQuestionObject
}
}

function displayQuestion(index, questionObject) {
console.log(index, questionObject)
console.log(questionEl)
questionEl.textContent = questionObject.question 
questionEl.setAttribute("data-question", index)

var buttonA = document.createElement('button')
buttonA.textContent = questionObject.a
buttonA.setAttribute("data-btnAnswer", "a")
var buttonB = document.createElement('button')
buttonB.textContent = questionObject.b
buttonB.setAttribute("data-btnAnswer", "b")
var buttonC = document.createElement('button')
buttonC.textContent = questionObject.c
buttonC.setAttribute("data-btnAnswer", "c")

answerEl.append(buttonA)
answerEl.append(buttonB)
answerEl.append(buttonC)


}


// add points together
startButton.addEventListener("click", startQuiz)
// 