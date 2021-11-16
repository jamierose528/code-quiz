var timeEl = document.querySelector(".timer");
var startButton = document.querySelector("#start");
var secondsLeft = 5;
var onGoing = false

startButton.addEventListener("click", setTime)

function setTime() {
if(onGoing) {
    return
}
onGoing = true
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft;

    if(secondsLeft === 0) {
    timeEl.style.backgroundColor="none" 
    onGoing = false
    clearInterval(timerInterval);
    }
  timeEl.style.backgroundColor="red"  

  }, 1000);
}
