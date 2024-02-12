
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


async function createCartSection() {
  const productListString = sessionStorage.getItem('productList');
  const productList = JSON.parse(productListString);

  try {
    const totalPay = await fetchTotalPay();

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
            <p class="total__price--price">$${totalPay.totalToPay}</p>
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
  } catch (error) {
    console.error('Error in createCartSection:', error);
  }
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
                      <p>${product.amount.quantity}</p>
                  </article>
              </section>
          </figcaption>`;

      cartSection.innerHTML = addedProduct;
      htmlContent += cartSection.outerHTML;  
  });

  return htmlContent;   
}


const fetchTotalPay = () => {
  try {
    
    const productListString = sessionStorage.getItem('productList');
    const productList = JSON.parse(productListString);
    console.log(productList);
    const transformedList = productList.map(item => ({
      price: item.price,
      quantity: item.amount.quantity,
    }));
    console.log(transformedList);
    return fetch(`http://localhost:3000/api/product/pay/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(transformedList),
    })
      .then(responseApi => {
        if (responseApi.ok) {
          return responseApi.json();
        }
        throw new Error('Error in API response');
      })
      .catch(error => {
        console.error(error);
        return null;
      });
  } catch (error) {
    console.error(error);
    return null;
  }
};
