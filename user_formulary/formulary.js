document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.form');
  form.id = 'myForm';

  // Función para validar que solo se ingresen números en los campos de entrada
  function validateNumericInput(event) {
    const input = event.target;
    const value = input.value.trim();

    if (!/^\d*$/.test(value)) {
      input.value = value.replace(/\D/g, '');
    }
  }

  const cvvInput = document.querySelectorAll('.form__input')[2];
  cvvInput.addEventListener('input', validateNumericInput);

  const cardNumberInput = document.querySelector('.card__number--input');
  cardNumberInput.addEventListener('input', validateNumericInput);

  form.addEventListener('submit', (event) => {
    event.preventDefault(); 

    const email = document.querySelector('.form__input').value.trim();
    const cardName = document.querySelectorAll('.form__input')[1].value.trim();
    const cardMethod = document.getElementById('card-select').value;
    const cardNumber = cardNumberInput.value.trim();
    const expireDate = document.querySelector('.form__select').value;
    const cvv = cvvInput.value.trim();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Please enter a valid email address.'); 
      return; 
    }

    if (email === '' || cardName === '' || cardMethod === '' || cardNumber === '' || expireDate === '' || cvv === '') {
      alert('Please fill in all fields.');
      return; 
    }

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


document.addEventListener("DOMContentLoaded", function() {
  var navToggleButton = document.getElementById("navToggleButton");
  var navButtons = document.getElementById("navButtons");

  navToggleButton.addEventListener("click", function() {
      if (navButtons.style.display === "none" || navButtons.style.display === "") {
          navButtons.style.display = "flex";
      } else {
          navButtons.style.display = "none";
      }
  });
});


document.addEventListener('click', (event) => {
  const { target } = event;

  if (target.id === "shop" ||   target.id === "collections") {
      window.location.href = "../products/product.html";
  } else if(target.id === "about" || target.id === "contact" ){
      window.scrollTo(0, document.body.scrollHeight);
  }else if(target.id === "home" || target.id === "darling"){
    window.location.href = "../home/home.html";

  }
});

