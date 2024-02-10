
document.addEventListener('DOMContentLoaded', function() {
  const detailsContainer = document.querySelector(".card__product__container");

  detailsContainer.addEventListener('click', function(event) {
      const purchaseButton = event.target.closest('.card__product__main--btn--buy');

      if (purchaseButton) {
          console.log('Purchase button clicked');
          
          createCartSection();
      }
  });
});

  

function createCartSection() {

  const productListString = sessionStorage.getItem('productList');
  const productList = JSON.parse(productListString);
  
  const bodyCartSection = document.createElement('section');
  bodyCartSection.className = 'body__cart';

  var cartContent = `
    <section class="your__cart">
      <article class="your__cart--h1__p__container">
        <h1 class="h1__p__container--h1">Your cart</h1>
        <div class="bx bx-x" id="close-icon"></div>
      </article>

      <section class="cart__container">
          ${printProducts(productList)}
      </section>
      
      <hr class="footer__hr" />
      
      <section class="cart__footer">
        <article class="cart__footer--total__price">
          <p class="total__price--total">Total:</p>
          <p class="total__price--price">$621.75</p>
        </article>
        <article class="cart__footer--button__container">
          <a href="../purchase/purchase.html" class="button--a">
            <button class="cart__footer--button__container--button">
            Continue to check out
            
            </button>
          </a>
        </article>
      </section>
    </section>
  `;

  bodyCartSection.innerHTML = cartContent;

  document.body.appendChild(bodyCartSection);
  
}



const printProducts = (listProduct) => {
  let htmlContent = '';  

  listProduct.forEach(product => {

      var cartSection = document.createElement('figure')
      cartSection.classList.add('cart')

      var addedProduct = `
          <img class="cart__img" src="${product.images[0]}" alt="img" />
          <figcaption class="cart__figcaption">
              <section class="cart__info">
                  <p class="title__container">${product.name}</p>
                  <p class="code__container">Code:${product.code}</p>
                  <p class="price__container">$${product.price}</p>
              </section>
              <section class="cart__misc">
                  <article class="edit__container">
                      <p>✏</p>
                  </article>
                  <article class="quantity__container">
                      <p>x1</p>
                  </article>
              </section>
          </figcaption>`;

      cartSection.innerHTML = addedProduct;
      htmlContent += cartSection.outerHTML;  
  });

  return htmlContent;   
}



