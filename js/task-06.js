//Напиши скрипт, который при потере фокуса на инпуте (событие blur), 
//проверяет его содержимое на правильное количество введённых символов.



const inputElement = document.querySelector('input[data-length="6"]');

 const inputValidation = () => {
    if (inputElement.value.length === Number(inputElement.getAttribute('data-length'))) {
     inputElement.classList.remove('invalid');
     inputElement.classList.add('valid');
   } else {
     inputElement.classList.remove('valid');
     inputElement.classList.add('invalid');
   }
 };
 inputElement.addEventListener('blur', inputValidation);