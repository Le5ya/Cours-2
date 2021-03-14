const sendFormModal = () => {
   const errorMessage = 'Что-то пошло не так...',
         loadMessage = 'Загрузка...',
         successMessage = 'Спасибо! Мы скоро с вами свяжемся!';

    const form = document.getElementById('form2');

    const statusMessage = document.createElement('div');
    statusMessage.style.cssText = 'font-size: 2rem';
     
    form.addEventListener('submit', (event) => {
       event.preventDefault();
       form.appendChild(statusMessage);

       const request = new XMLHttpRequest();
       request.addEventListener('readystatechange', () =>{
        statusMessage.textContent = loadMessage;
          if(request.readyState !== 4) {
                return;
            }
            if(request.status === 200) {
              statusMessage.textContent = successMessage;
            }else {
              statusMessage.textContent = errorMessage; 
              console.error(request.status);
        }
      });
       request.open('POST', './server.php');
       request.setRequestHeader('Content-Type', 'application/json');
       const formData = new FormData(form);
       let body = {};

       formData.forEach((val, key) => {
       body[key] = val;
       });

       request.send(JSON.stringify(body));

   
    });
 };
 export default sendFormModal;