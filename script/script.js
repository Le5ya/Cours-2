window.addEventListener('DOMContentLoaded', function() {
  'use strict';
//Timer
function countTimer(deadline){
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
    countTimer('25 february 2021');




// меню
const toggleMenu = () => {
   const btnMenu = document.querySelector('.menu'),
         menu = document.querySelector('menu'),
         closeBtn = document.querySelector('.close-btn'),
         menuItems = menu.querySelectorAll('ul>li');
        //  anchors = document.querySelectorAll('a.scroll-to');

const handlerMenu = () => {
    if(!menu.style.transform || menu.style.transform ==='translate(-100%)'){
           menu.style.transform =`translate(0)`;
         }else{
           menu.style.transform = `translate(-100%)`
         }
        // menu.classList.toggle('active-menu');
      //   for (let anchor of anchors) {
      //  anchor.addEventListener('click', function (event) {
      // event.preventDefault();
      // const sectionID = anchor.getAttribute('href')
      // document.querySelector(sectionID).scrollIntoView({
      // behavior: 'smooth',
      // block: 'start'
      //     })
      //   })
      // }
    };
   btnMenu.addEventListener('click', handlerMenu);
  //  closeBtn.addEventListener('click', handlerMenu);
  //  menuItems.forEach((elem) => elem.addEventListener('click', handlerMenu));

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
// slider

const slider=() => {
const slide = document.querySelectorAll('.portfolio-item'),
      btn = document.querySelectorAll('.portfolio-btn'),
      dot = document.querySelectorAll('.dot'),
      slider = document.querySelector('.portfolio-content');

     let currentSlide = 0,
         interval;
        

     const prevSlide = (elem, index, strClass) => {
       elem[index].classList.remove(strClass);
     };
     const nextSlide = (elem, index, strClass) => {
       elem[index].classList.add(strClass);
     };
     const dotVisible = (elem, index, strClass) => {
      elem[index].classList.remove(strClass); 
     };
     const dotInvisible = (elem, index, strClass) => {
      elem[index].classList.add(strClass); 
     };
     const autoPlaySlide = () => {
      
        prevSlide(slide, currentSlide, 'portfolio-item-active');
        prevSlide(dot, currentSlide, 'dot-active');
      
        currentSlide++;

        if(currentSlide >= slide.length){  
          currentSlide = 0;
        }
        nextSlide(slide, currentSlide, 'portfolio-item-active');
        dotVisible(dot, currentSlide, 'd-none');
        nextSlide(dot, currentSlide, 'dot-active');
     };
     const startSlide = (time = 1500) => {
       interval = setInterval(autoPlaySlide, time);
     };
     const stopSlide = () => {
       clearInterval(interval);
     };
    
       slider.addEventListener('click', (event) => {
         event.preventDefault();

        let target = event.target;

        prevSlide(slide, currentSlide, 'portfolio-item-active');
        prevSlide(dot, currentSlide, 'dot-active');

        if(!target.matches('.portfolio-btn, .dot')){
          return;
        }
        if(target.matches('#arrow-right')){
          currentSlide++;
        }else if(target.matches('#arrow-left')){  
          currentSlide--;
        }else if(target.matches('.dot')){
          dot.forEach((elem, index) => {
            if(elem === target){
              currentSlide = index;
            };
          });
        };
         if(currentSlide >= slide.length){
           currentSlide = 0;
         }
         if(currentSlide < 0) {
           currentSlide = slide.length - 1;
         }
         nextSlide(slide, currentSlide, 'portfolio-item-active');
        nextSlide(dot, currentSlide, 'dot-active'); 
    });
     slider.addEventListener('mouseover', (event) => {
        if(event.target.matches('.portfolio-btn') ||
        event.target.matches('.dot')){
          
           stopSlide();
        }
     });
     slider.addEventListener('mouseout', (event) => {
      if(event.target.matches('.portfolio-btn') ||
        event.target.matches('.dot')){
         
          startSlide();
        } 
     });
     startSlide();

};
slider();

});// 'DOMContentLoaded'

