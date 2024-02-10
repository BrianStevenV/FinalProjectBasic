const userData = sessionStorage.getItem('formData');
const userDataParse = JSON.parse(userData);

const productData = sessionStorage.getItem('productList');

const {cardName, cardMethod} = userDataParse;

const orderNumberRandom = () => {
    const numberOfDigits = 10; 
    let randomNumber = '';

    for (let i = 0; i < numberOfDigits; i++) {
        randomNumber += Math.floor(Math.random() * 10); 
    }

    return randomNumber;
}


const orderDate = () => {
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0'); 
    const yyyy = today.getFullYear();

    return `${mm}/${dd}/${yyyy}`;
}

const dateElement = document.getElementById("purchase__date");
const orderNumberElement = document.getElementById("purchase__orderNumber");
const nameElement = document.getElementById("purchase__name");
const methodElement = document.getElementById("purchase__method");
const productContainer = document.querySelectorAll(".product__card");


dateElement.textContent = orderDate();
orderNumberElement.textContent = orderNumberRandom();
nameElement.textContent = cardName;
methodElement.textContent = cardMethod

const printProducts = () => {
    console.log(`object`);
    productContainer.forEach(product => {
        product.innerHTML =""
    })
    const productListString = sessionStorage.getItem('productList');
    const productList = JSON.parse(productListString);
    let htmlContent = ''; 

    productList.forEach( product => {
        const createArticle = document.createElement('article');
        createArticle.classList.add('product__card');

        const addedProduct = `
                        <figure class="product__card--figure">
                            <img class="product__card--img" src="${product.images[0]}" alt="${product.name}">
                        </figure>

                        <article class="product__card--info">
                            <h1 class="product__card--info--h1">
                                ${product.name}
                            </h1>
                            <p class="product__card--info--p--code">
                                ${product.code}
                            </p>
                            <p class="product__card--info--p--quantity">
                                x1
                            </p>
                        </article>

                        <article class="product__card--price">
                            <p class="product__card--price--p">
                                $${product.price}
                            </p>
                        </article>
        `
        createArticle.innerHTML = addedProduct;
        htmlContent += createArticle;
        document.body.appendChild(createArticle);
    })

    return htmlContent;
}

document.addEventListener("DOMContentLoaded", () => {
    printProducts();
})


