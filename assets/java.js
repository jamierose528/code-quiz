var timeEl = document.querySelector(".timer");


var secondsLeft = 60;

function setTime() {

  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft;

    if(secondsLeft === 0) {

      clearInterval(timerInterval);

      sendMessage();
    }

  }, 1000);
}

setTime()