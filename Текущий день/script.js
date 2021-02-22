let timeOfDay = document.querySelector('.time-of-day'),
    day = document.querySelector('.day'),
    clock = document.querySelector('.clock'),
    deadline = document.querySelector('.deadline');

    let date = new Date(),
       x = date.getHours();

   let timerId = setTimeout (function tabloid() {
          function sayHi() {
      if(x >0 && x <= 4){
        timeOfDay.textContent = "oй ночи";
      }else {
        if(x>4 && x<=11){
       timeOfDay.textContent = "ое утро" ;  
        }else {
          if(x>11&&x<=16){
         timeOfDay.textContent = "ый день" ;    
          }else{
         timeOfDay.textContent = "ый вечер" ;    
          }
        }
      }
    }
    sayHi();

   function todayIs(){
      let week = ['Воскресенье','Понедельник','Вторник', 'Среда','Четверг','Пятница','Суббота'];
    let i = date.getDay();

    day.textContent = week[i];
    clock.textContent = date.getHours()+':'+ date.getMinutes()+':'+ date.getSeconds()+ ' PM';
   }
   todayIs();
    function countDay(days) {
      let newYear = new Date(days).getTime();
      let dateNow = date.getTime();
    
        howDays = Math.floor(((((newYear - dateNow) / 1000) / 60) / 60) / 24);
        deadline.textContent = howDays;
      
       return deadline.textContent 
    }
    countDay('1 January 2022'); 

  }, 1000);     
        
if (date.getFullYear() > 2021) {
clearTimeout(timerID1);
}
  
  
