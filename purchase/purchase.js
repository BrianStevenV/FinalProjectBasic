

document.addEventListener("DOMContentLoaded", () => {
    
    createCartSection();
})

function printCartProducts(){

    const productListString = sessionStorage.getItem('productList');
    const productList = JSON.parse(productListString)

    const productsContainer = document.querySelector('.purchase__objects');
    productsContainer.innerHTML='';

    let htmlContent = '';
     
    productList.forEach(product => {
        console.log(`From for each product objetc`);
        var productCard = document.createElement('figure')
        productCard.classList.add('purchase__objects--figure')
        console.log(`From product card ${productCard}`);

        var addProduct = `
            <img src="${product.images[0]}" alt="${product.name}" class="purchase__objects--img">
                    <figcaption class="purchase__objects--figcaption">
                        <div class="purchase__objects__information">
                            <p class="purchase__objects--title">${product.name}</p>
                            <p class="purchase__objects--code">Code: ${product.code}</p>
                        </div>
                        <p class="purchase__objects--price">$${product.price}</p>
                        <div class="bx bx-trash" id="trash-icon"></div>
                    </figcaption>
        `;

        productCard.innerHTML = addProduct;
        htmlContent += productCard.outerHTML;
        console.log(`HtmlContent ${htmlContent}`);

    });
    return htmlContent;
}



function createCartSection() {
    const storedTotalPay = sessionStorage.getItem('totalPay');
    const productListString = sessionStorage.getItem('productList');
    

    const bodyCartSection = document.createElement('section');
    bodyCartSection.className = 'body__cart';

    const cartContainer = document.createElement('section');
    cartContainer.className = 'cart__container';

    var cartContent = `
        <section class="your__cart">
            <article class="your__cart--h1__p__container">
                <h1 class="h1__p__container--h1">Your cart</h1>
                <div class="bx bx-x" id="close-icon"></div>
            </article>

            <section class="cart__container">
                ${printCartProducts()}
            </section>

            <hr class="footer__hr" />

            <section class="cart__footer">
                <article class="cart__footer--total__price">
                    <p class="total__price--total">Total:</p>
                    <p class="total__price--price">$${storedTotalPay}</p>
                </article>
                <article class="cart__footer--button__container">
                    <button class="cart__footer--button__container--button">
                        <a href="../purchase/purchase.html" class="button--a">Continue to check out</a>
                    </button>
                </article>
            </section>
        </section>
    `;

    bodyCartSection.innerHTML = cartContent;

    
    
    const productsContainer = document.querySelector('.purchase__objects');
    productsContainer.innerHTML = printCartProducts();
}

const total = () => {
    const totalElement = document.querySelector('.purchase__payment--summary--total');
    const informationElement = document.querySelector('.purchase__payment--summary--information');

    document.addEventListener('DOMContentLoaded', () => {
        const storedTotalPay = sessionStorage.getItem('totalPay');
        if (storedTotalPay) {
            const formattedTotal = parseFloat(storedTotalPay).toFixed(2);
            totalElement.textContent = `Total: ${formattedTotal}`;
            informationElement.textContent = formattedTotal;
        }
    });
};

total();

