const sendForm = () => {
const
form1Name = document.getElementById('form1-name'),
form2Name = document.getElementById('form2-name'),
form3Name = document.getElementById('form3-name'),
form2Message = document.getElementById('form2-message'),
form1Phone = document.getElementById('form1-phone'),
form2Phone = document.getElementById('form2-phone'),
form3Phone = document.getElementById('form3-phone'),
form1Email = document.getElementById('form1-email'),
form2Email = document.getElementById('form2-email'),
form3Email = document.getElementById('form3-email');


form1Name.addEventListener('input', () =>form1Name.value = form1Name.value.replace(/\w/g, ''));
form2Name.addEventListener('input', () =>form2Name.value = form2Name.value.replace(/\w/g, ''));
form3Name.addEventListener('input', () =>form3Name.value = form3Name.value.replace(/\w/g, ''));

form1Name.addEventListener('blur', () => 
form1Name.value = form1Name.value.replace(/^[а-я]/g, (match) => match.toUpperCase()));
form2Name.addEventListener('blur', () => 
form2Name.value = form2Name.value.replace(/^[а-я]/g, (match) => match.toUpperCase()));
form3Name.addEventListener('blur', () => 
form3Name.value = form2Name.value.replace(/^[а-я]/g, (match) => match.toUpperCase()));

form1Phone.addEventListener('input', () => form1Phone.value = form1Phone.value.replace(/\D[^()-]/g, ''));
form1Email.addEventListener('input', () =>{ 
  form1Email.value = form1Email.value.replace(/[а-я][^\.-@)]/gi, '');
});

form2Message.addEventListener('input', () => form2Message.value = form2Message.value.replace(/[a-z]+/gi, ''));
form2Phone.addEventListener('input', () => form2Phone.value = form2Phone.value.replace(/\D[^()-]/g, ''));
form2Email.addEventListener('input', () =>{ 
  form2Email.value = form2Email.value.replace(/[а-я][^\.-@)]/gi, '');
});

form3Phone.addEventListener('input', () => form3Phone.value = form3Phone.value.replace(/\D[^()-]/g, ''));
form3Email.addEventListener('input', () =>{ 
  form3Email.value = form3Email.value.replace(/[а-я][^\.-@)]/gi, '');
});

const sendTopForm =() => {
   const errorMessage = 'Что-то пошло не так...',
         loadMessage = 'Загрузка...',
         successMessage = 'Спасибо! Мы скоро с вами свяжемся!';

    const form = document.getElementById('form1');

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
       form.reset();
   
    });
 }; 
 sendTopForm();

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
       form.reset();

   
    });
 };
sendFormModal();

  const sendFormFooter = () => {
   const errorMessage = 'Что-то пошло не так...',
         loadMessage = 'Загрузка...',
         successMessage = 'Спасибо! Мы скоро с вами свяжемся!';

    const form = document.getElementById('form3');

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
       form.reset();
   
    });
 }; 
 sendFormFooter();
};
 export default sendForm;
 