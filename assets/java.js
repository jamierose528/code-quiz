var timeEl = document.querySelector(".timer");
var startButton = document.querySelector("#start");
var secondsLeft = 61;
var onGoing = false

startButton.addEventListener("click", setTime)

function setTime() {
if(onGoing) {
    return
}
onGoing = true
  var timerInterval = setInterval(function() {
    if(secondsLeft === 0) {
        timeEl.style.backgroundColor="none" 
        onGoing = false
        clearInterval(timerInterval); 
        secondsLeft = 61
        return
        }

    secondsLeft--;
    timeEl.textContent = secondsLeft;


  timeEl.style.backgroundColor="red"  

  }, 1000);
}
