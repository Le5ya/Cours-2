window.addEventListener('DOMContentLoaded', function() {
  'use strict';
//Timer
function countTimer(deadline){
  let timerHours = document.querySelector('#timer-hours'),
      timerMinutes = document.querySelector('#timer-minutes'),
      timerSeconds = document.querySelector('#timer-seconds');
    

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
    countTimer('25 february 2021');



// меню
const toggleMenu = () => {
  let   menu = document.querySelector('menu'),
         btnMenu = document.querySelector('.menu'),
         menuItems = menu.querySelectorAll('ul>li');
const handlerMenu = () => {
    if(!menu.style.transform || menu.style.transform ==='translate(-100%)'){
           menu.style.transform =`translate(0)`;
         }else{
           menu.style.transform = `translate(-100%)`;
         }
    };
    btnMenu.addEventListener('click', handlerMenu);
 
  menu.addEventListener('click', (event) =>{
    let target = event.target;
    if(target !== menu){
          target = target.parentNode; 
       }
    if(target.classList.contains('close-btn')){
        handlerMenu();
    };
      menuItems.forEach((elem) => {
        if(target) {
           handlerMenu();  
        }
      });
    });
         
      
        





};
toggleMenu();

// popup
const togglePopUp = () => {
  const popup = document.querySelector('.popup'),
        popupBtn = document.querySelectorAll('.popup-btn');

 popupBtn.forEach((elem) => {
  elem.addEventListener('click', () => {
      popup.style.display = 'block';
        });
    });
    

 popup.addEventListener('click', (event) =>{  
   let target = event.target;

   if(target.classList.contains('popup-close')){
     popup.style.display = 'none';
   } else {
      target = target.closest('.popup-content');
     
   }
   
 });
};
togglePopUp();

//tabs
const tabs = () =>{
const tabHeader = document.querySelector('.service-header'),
      tab = tabHeader.querySelectorAll('.service-header-tab'),
      tabContent = document.querySelectorAll('.service-tab');

      const toggleTabContent = (index) => {
            for(let i = 0; i < tabContent.length; i++){
              if(index === i){
                tabContent[i].classList.remove('d-none');
              } else {
                tabContent[i].classList.add('d-none');

              }
            }
      };
 
      tabHeader.addEventListener('click', (event) => {
          let target = event.target;            
              target = target.closest('.service-header-tab');            
          if(target){
            tab.forEach((item, i) => {
              if(item === target){
                toggleTabContent(i);
              };
            });
         };
      });
         
       
};
tabs();




});// 'DOMContentLoaded'

