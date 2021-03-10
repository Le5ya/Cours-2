const calc = (price = 100) => {
const calcBlolck = document.querySelector('.calc-block'),
      calcType = document.querySelector('.calc-type'),
      calcSquare = document.querySelector('.calc-square'),
      calcDay = document.querySelector('.calc-day'),
      calcCount = document.querySelector('.calc-count'),
      totalValue = document.getElementById('total');

  const countSum = () => {
    let total = 0,
    countValue = 1,
    dayValue = 1;
    const typeValue=calcType.options[calcType.selectedIndex].value,
          squareValue = +calcSquare.value;

      if(calcCount.value > 1){
        countValue += (calcCount.value - 1) / 10;
      }
      if(calcDay.value &&  calcDay.value < 5){
        dayValue *= 2;
      }else if(calcDay.value &&  calcDay.value < 10){
        dayValue *= 1.5;
      }
      if(typeValue && squareValue){
        total = price * typeValue * squareValue*countValue*dayValue;
      } 


    totalValue.textContent = total;
  };

     calcBlolck.addEventListener('change', (event) =>{
        const target = event.target;
         if (target.matches('select') || target.matches('input')){
        countSum();
    }
   });
let 
calcItem = document.querySelectorAll('.calc-item'), 
topForm = document.querySelectorAll('.top-form'),
form3Name = document.getElementById('form3-name'),
form2Name = document.getElementById('form2-name'),
form2Message = document.getElementById('form2-message'),
form2Phone = document.getElementById('form2-phone'),
form2Email = document.getElementById('form2-email');


calcItem.forEach((item) => {
  item.addEventListener('input', () => item.value = item.value.replace(/\D/g, ''));
});
form3Name.addEventListener('input', () => form3Name.value = form3Name.value.replace(/\w/g, ''));
form2Name.addEventListener('input', () => form2Name.value = form2Name.value.replace(/\w/g, ''));
form2Name.addEventListener('blur', () => form2Name.value = form2Name.value.replace(/^[а-я]/g, (match) => match.toUpperCase));
form2Message.addEventListener('input', () => form2Message.value = form2Message.value.replace(/\w/g, ''));
form2Phone.addEventListener('input', () => form2Phone.value = form2Phone.value.replace(/\D[^()-]/g, ''));
form2Email.addEventListener('input', () =>form2Email.value =  
form2Email.value.replace(/[^w\.@]/gi, ''));

topForm.forEach((item) => {
  item.addEventListener('blur', () => 
topForm.value = topForm.value.replace(/(^\s)(\s\s)()/g, '(^\S)(\s)'));
})
 };
 export default calc;