window.addEventListener('DOMContentLoaded', function() {
  'use strict';
//Timer
function countTimer(deadline){
  let timerHours = document.querySelector('#timer-hours'),
      timerMinutes = document.querySelector('#timer-minutes'),
      timerSeconds = document.querySelector('#timer-seconds'),
     timerNumbers = document.querySelector('.timer-numbers');

  function addZero(num) {
	if (num >= 0 && num <= 9) {
		return '0' + num;
	} else {
		return num;
	}
}

function getTimeRemaining() {
    let dateStop = new Date(deadline).getTime(),
      dateNow = new Date().getTime(),
      timeRemaining = (dateStop - dateNow) / 1000,
      seconds = Math.floor(timeRemaining % 60),
      minutes = Math.floor((timeRemaining / 60) % 60),
      hours = Math.floor(timeRemaining / 60 / 60);
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
    countTimer('25 february 2021');

});

// меню
const toggleMenu = () => {
   const btnMenu = document.querySelector('.menu');
         menu = document.querySelector('menu');
         closeBtn = document.querySelector('.close-btn');
         menuItems = menu.querySelectorAll('ul>li');

const handlerMenu = () => {
    if(!menu.style.transform || menu.style.transform ==='translate(-100%)'){
           menu.style.transform =`translate(0)`;
         }else{
           menu.style.transform = `translate(-100%)`;
         }
        // menu.classList.toggle('active-menu');

    };
   btnMenu.addEventListener('click', handlerMenu);
   closeBtn.addEventListener('click', handlerMenu);
  
 
   menuItems.forEach((elem) => elem.addEventListener('click', handlerMenu));

};
toggleMenu();

// popup
togglePopUp = () => {
  const popup = document.querySelector('.popup'),
        popupBtn = document.querySelectorAll('.popup-btn'),
        popupClose = document.querySelector('.popup-close');
  let   count = 0;
  let slideInterval;
    
let slideAnimate = function () {
slideInterval = requestAnimationFrame(slideAnimate);
   count++;
if(count < 1000){
  popup.style.left = count + 'px';
} else {
  cancelAnimationFrame(slideInterval);
  }
};

  popupBtn.forEach((elem) => {
     let animate = false;
    elem.addEventListener('click', () => {
      popup.style.display = 'block';
      if(document.body.style.minWidth = '768px') {
      slideInterval = requestAnimationFrame(slideAnimate);
      animate = true;
      } else {
        animate = false;
        cancelAnimationFrame(flyInterval);
      } 
    });
  });

 popupClose.addEventListener('click', () => {
   popup.style.display = 'none';
 }) 
};
togglePopUp();
