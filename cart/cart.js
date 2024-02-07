document.addEventListener('DOMContentLoaded', function() {
  const detailsContainer = document.querySelector(".card__product__container");

  detailsContainer.addEventListener('click', function(event) {
      const purchaseButton = event.target.closest('.card__product__main--btn--buy');

      if (purchaseButton) {
          console.log('Purchase button clicked');
          // Agrega aquí el código que deseas ejecutar cuando se hace clic en el botón "Buy now"
          createCartSection();
      }
  });
});

  

  

  function createCartSection() {
    console.log(`Hola`);
    // innerHTML='';
    const bodyCartSection = document.createElement('section');
    bodyCartSection.className = 'body__cart';
  
    var cartContent = `
      <section class="body__cart">
        <section class="your__cart">
          <article class="your__cart--h1__p__container">
            <h1 class="h1__p__container--h1">Your cart</h1>
            <div class="bx bx-x" id="close-icon"></div>
          </article>

          <section class="cart__container">
            <figure class="cart">
              <img class="cart__img" src="../assets/products_img/Img 2-b page 2.png" alt="img" />
              <figcaption class="cart__figcaption">
                <section class="cart__info">
                  <p class="title__container">Luxury Charms Ring</p>

                  <p  class="code__container">Code:239847</p>

                  <p class="price__container">$678.71</p>
                </section>

                <section class="cart__misc">
                  <article class="edit__container">
                    <p>✏</p>
                  </article>

                  <article class="quantity__container">
                    <p>x1</p>
                  </article>
                </section>
              </figcaption>
            </figure>

            <figure class="cart">
              <img class="cart__img" src="../assets/products_img/Img 2-b page 2.png" alt="img" />
              <figcaption class="cart__figcaption">
                <section class="cart__info">
                  <p class="title__container">Luxury Charms Ring</p>

                  <p  class="code__container">Code:239847</p>

                  <p class="price__container">$678.71</p>
                </section>

                <section class="cart__misc">
                  <article class="edit__container">
                    <p>✏</p>
                  </article>

                  <article class="quantity__container">
                    <p>x1</p>
                  </article>
                </section>
              </figcaption>
            </figure>

            <figure class="cart">
              <img class="cart__img" src="../assets/products_img/Img 2-b page 2.png" alt="img" />
              <figcaption class="cart__figcaption">
                <section class="cart__info">
                  <p class="title__container">Luxury Charms Ring</p>

                  <p  class="code__container">Code:239847</p>

                  <p class="price__container">$678.71</p>
                </section>

                <section class="cart__misc">
                  <article class="edit__container">
                    <p>✏</p>
                  </article>

                  <article class="quantity__container">
                    <p>x1</p>
                  </article>
                </section>
              </figcaption>
            </figure>

            <figure class="cart">
              <img class="cart__img" src="../assets/products_img/Img 2-b page 2.png" alt="img" />
              <figcaption class="cart__figcaption">
                <section class="cart__info">
                  <p class="title__container">Luxury Charms Ring</p>

                  <p  class="code__container">Code:239847</p>

                  <p class="price__container">$678.71</p>
                </section>

                <section class="cart__misc">
                  <article class="edit__container">
                    <p>✏</p>
                  </article>

                  <article class="quantity__container">
                    <p>x1</p>
                  </article>
                </section>
              </figcaption>
            </figure>
        
          <hr class="footer__hr" />
          <section class="cart__footer">
            <article class="cart__footer--total__price">
              <p class="total__price--total">Total:</p>
              <p class="total__price--price">$621.75</p>
            </article>
            <article class="cart__footer--button__container">
              <button class="cart__footer--button__container--button">
                Continue to check out
              </button>
            </article>
          </section>
        </section>
      </section>
    `;
  
    bodyCartSection.innerHTML = cartContent;
  
    const print = document.body.appendChild(bodyCartSection);
    console.log(`prtin print print ${print}`);

  }

//averiguar como hacer que se aplique el estilo brightness/contrast al fondo al abrir el carrito
   const printProducts = (listProducts, container) =>{

    console.log(`From print product`);
    container.innerHTML = '';
    listProducts.foreach(Product => {

      var cartSection = document.createElement('figure')
      cartSection.classList.add('card')
  
      var addedProduct = `
            <img src="${Product.image}" alt="img" />
            <figcaption class="card__figcaption">
              <section class="card__info">
                  <p class="title__container">${Product.name}</p>

                  <p  class="code__container">Code:${Product.code}</p>

                  <p class="price__container">$${Product.price}</p>
              </section>
              <section class="card__misc">
                <article class="edit__ccontaine">
                  <p>✏</p>
                </article>

                <article class="cuantity__container">
                  <p>x1</p>
                </article>
              </section>
            </figcaption>`;

        cartSection.innerHTML = addedProduct;
        container.appendChild(figure)

    })

    

}


