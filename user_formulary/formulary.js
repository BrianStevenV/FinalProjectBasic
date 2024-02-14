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

