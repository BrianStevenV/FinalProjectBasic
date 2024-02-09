document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.form');

  form.addEventListener('submit', (event) => {
    event.preventDefault(); 

    
    const email = document.querySelector('.form__input').value;
    const cardName = document.querySelectorAll('.form__input')[1].value;
    const cardMethod = document.getElementById('card-select').value;
    const cardNumber = document.querySelector('.card__number--input').value;
    const expireDate = document.querySelector('.form__select').value;
    const cvv = document.querySelectorAll('.form__input')[2].value;

    const formData = {
      email,
      cardName,
      cardMethod,
      cardNumber,
      expireDate,
      cvv,
    };

   
    sessionStorage.setItem('formData', JSON.stringify(formData));

    window.location.href = '../buying/payment.html';
  });
});



