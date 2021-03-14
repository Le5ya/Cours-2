const togglePopUp = () => {
  const popup = document.querySelector('.popup'),
        popupBtn = document.querySelectorAll('.popup-btn'),
        popupContent = document.querySelector('.popup-content'),
        width = document.documentElement.clientWidth;
        console.log(width);

 let count = 0;   
let popupSlide = function(){
  popupContent.style.left = -350 + 'px';
  count++;
  popupContent.style.left = count +'px';
 if(count < 450 && width > 768) {
  setTimeout(popupSlide, 5); 
 } 
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
   } else {
      target = target.closest('.popup-content');
     
   }
   
 });
};
export default togglePopUp;