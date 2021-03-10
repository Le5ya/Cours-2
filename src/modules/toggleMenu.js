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
export default toggleMenu;