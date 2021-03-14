function countTimer(deadline = '31 march 2021'){
  let timerHours = document.querySelector('#timer-hours'),
      timerMinutes = document.querySelector('#timer-minutes'),
      timerSeconds = document.querySelector('#timer-seconds'),
      timerNumbers = document.querySelector('.timer-numbers'); 
    

function addZero(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

function getTimeRemaining() {
    let dateStop = new Date(deadline).getTime(),
      dateNow = new Date().getTime(),
      timeRemaining = (dateStop - dateNow) / 1000,
      seconds = addZero(Math.floor(timeRemaining % 60)),
      minutes = addZero(Math.floor((timeRemaining / 60) % 60)),
      hours = addZero(Math.floor(timeRemaining / 60 / 60));
      return {timeRemaining, hours, minutes, seconds};
}
 
function updateClock(){
  let timer = getTimeRemaining();
  timerHours.textContent = timer.hours;
  timerMinutes.textContent = timer.minutes;
  timerSeconds.textContent = timer.seconds;

  if(timer.timeRemaining > 0){
   setTimeout(updateClock, 1000);
   }else {
     clearTimeout(updateClock);
       timerHours.textContent = '';
       timerMinutes.textContent = '';
       timerSeconds.textContent = '';
       let span;
        span = document.createElement(span);
       span.innerHTML = "<h1>До новых акций</h1>";
       timerNumbers.append(span);

   }

  }
     updateClock();
}
export default countTimer;