const togglePopUp = () => {
  const popup = document.querySelector('.popup'),
        popupBtn = document.querySelectorAll('.popup-btn'),
        popupContent = document.querySelectorAll('.popup-content'),
        width = document.documentElement.clientWidth;
        
     

let count = 0;
 
let popupSlide = function(){
 popupContent.forEach((elem) =>{
 elem.style.left = -350 + 'px';
  count++;
  elem.style.left = count * 3 +'px';
 if(count < 150) {
  setTimeout(popupSlide, 5); 
   }
 }); 
};      
 popupBtn.forEach((elem) => {
  elem.addEventListener('click', () => {
      popup.style.display = 'block';
       popupSlide();
        });
    
    });
 popup.addEventListener('click', (event) =>{  
   let target = event.target;
   if(target.classList.contains('popup-close')){
     popup.style.display = 'none';
     count = 0; 
   } else {
      target = target.closest('.popup-content');
     
   }
   
 });
};
export default togglePopUp;