var timeEl = document.querySelector(".timer");
var startButton = document.querySelector("#start");
var questionEl = document.querySelector('#question');
var answerEl = document.querySelector('#answers');
var rightWrong = document.querySelector('#right-wrong');
var secondsLeft = 60;
var onGoing = false
var content = document.querySelector("header")
var qaWrapper = document.querySelector('#question-answer-wrapper')
var questions;

// array of questions (5)
var questionsArray = [
    {
        question: "Inside which HTML element do we put the JavaScript?",
        a: "<script>",
        b: "<js>",
        c: "<html>",
        answer: "a"
    }, 
    {
        question: "How to write an IF statement in JavaScript?",
        a: "if (i==5)",
        b: "if i=5",
        c: "if i==5 then",
        answer: "a"
    },
    {
        question: "How does a FOR loop start?",
        a: "for (i<=5; i++)",
        b: "for i=1 to 5",
        c: "yfor (i=0; i<=5; i++",
        answer: "a"
    },
    {
        question: "How do you declare a JavaScript variable?",
        a: "var carName;",
        b: "v carName;",
        c: "variablee carName;",
        answer: "a"
    },
    {
        question: "Which operator is used to assign a value to a variable?",
        a: "x",
        b: "=",
        c: "-",
        answer: "a"
    }, 
    {
        question: "Is JavaScript case-senstive?",
        a: "yes",
        b: "no",
        c: "depends",
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
// if a button is clicked inside the wrapper, 
// check the buttons data attribute var.dataset
// check value of dataset to equal questionObject.answer
// if does add points to points and local storage
// check to see if there are any more questions/or if time is up(game over)
// move on to next question
// if wrong, minus 10 seconds from timer
// display "wrong"
// save to local storage
// move on to next question

// qaWrapper.addEventListener("click", function(event){
//     if (event.target.matches("button"){
        
//     })
//     })
 }


// add points together
startButton.addEventListener("click", startQuiz)

