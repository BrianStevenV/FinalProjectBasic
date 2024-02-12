
document.addEventListener("DOMContentLoaded", async () => {
    try {
        
        const storedProductTitle = sessionStorage.getItem('productTitle');
        console.log(storedProductTitle);

        if (storedProductTitle) {
            const responseApi = await fetch(`http://localhost:3000/api/product/name/${encodeURIComponent(storedProductTitle)}`);
            
            if (responseApi.ok) {
                const productData = await responseApi.json();
                createProductDetailsSection(productData)
                createProductDescription(productData);
                printNavBar(productData);
                const btnAddToBag = document.getElementById("btn-add");
                btnAddToBag.addEventListener('click', () => addProductBag(productData))
                init();
                captureColorClick();
                captureSizeClick();
        
            } else {
                console.error('Error en la solicitud:', responseApi.status, responseApi.statusText);
            }
        } else {
            console.error('No se encontró el título del producto en sessionStorage');
        }
    } catch (error) {
        console.error('Error durante la solicitud Fetch:', error);
    }
});

const fetchProductData = async (productTitle) => {
    try {
        const responseApi = await fetch(`http://localhost:3000/api/product/name/${encodeURIComponent(storedProductTitle)}`);
        if(responseApi.ok){
            return await responseApi.json();
        }   else{
            console.error("Error", responseApi.status, responseApi.statusText);
            return null;
        }
    } catch (error) {
        console.error("Fetch error", error);
        return null
    }
}

const btnBuyNow = document.querySelector("#btn--buy");

const containerProductNav = document.querySelector(".ul__product--nav");
const containerProductCard = document.querySelector(".card__product__container");
const containerProductDescription = document.querySelector(".card__product__description");

const listProducts = [];

const addToCart = () => {

}

const fetchDataAndRenderProduct = async (name) => {
    try {
        const responseApi = await fetch(name);

        if(responseApi.ok) {
            containerProductNav.innerHTML = "";
            containerProductCard.innerHTML = "";
            containerProductDescription.innerHTML = "";

            

            const product = responseApi;

            containerProductNav.innerHTML = `
            <ul class="ul__product--nav">
            <li class="li__product--nav">
                <a href="../home/home.html" class="li__product--nav li__product--nav--a">Home</a>
            </li>
            <li class="li__product--separator">
                >
            </li>
            <li class="li__product--nav">
                <a href="../products/product.html" class="li__product--nav li__product--nav--a">Shop</a>
            </li>
            <li class="li__product--separator">
                >
            </li>
            <li class="li__product--nav">
                <a href="" class="li__product--nav li__product--nav--a">${product.name}</a>
            </li>
        </ul>`

            containerProductCard.innerHTML = ``
        }
    } catch (error) {
        
    }
}


function createProductDetailsSection(productObject) {
    

    const detailsContainer = document.querySelector(".card__product__container");
    detailsContainer.innerHTML= ''; 
    const product = productObject;


    detailsContainer.innerHTML = `
    <figure class="card__product__aside--left">
                <img src="../assets/details_img/Img 1 aside.png" alt="Ring 1" class="card__product__aside--img">
                <img src="../assets/details_img/Img 2 aside.png" alt="Ring 2" class="card__product__aside--img">
                <img src="../assets/details_img/Img 3 aside.png" alt="RIng 3" class="card__product__aside--img">
                <img src="../assets/details_img/Img 4 aside.png" alt="Ring 4" class="card__product__aside--img">
            </figure>
            <figure class="card__product__main">
                <img src="${product.images}" alt="${product.name}"
                    class="card__product__main__card__product__main--img">
            </figure>
            <section class="card__product__main--figcaption">
                <article class="card__product__main--information">
                    <p class="card__product__main--title">${product.name}</p>
                    <p class="card__product__main--code">Code:${product.code}</p>
                    <p class="card__product__main--price">$${product.price}</p>
                    <p class="card__product__main--color--name">Color - ${product.amount.map(color => color.color).join(' - ')}</p>

                    <div class="choose__color">
                        ${createChooseColor(product)}
                    </div>
                </article>
                <article class="card__product__main--size">
                    <p class="card__product__main--size__card__product__main--size--text">Size ${product.amount[0].size}</p>
                    <p class="card__product__main--size__card__product__main--size--question">What is my size?</p>
                </article>
                <article class="card__product__main--ul__container">

                    <ul class="card__product__main--ul">
                    ${product.amount.map(size => `<li class="card__product__main--li" alt="${size.size}">${size.size}</li>`).join('')}
                    </ul>

                </article>

                <article class="card__product__main--quantity">

                    <article>
                        <p class="card__product__main--quantity--title">Quantity</p>
                    </article>
                    <article class="card__product__main--quantity__container">
                        <p class="card__product__main--quantity--p decrease">-</p>
                        <p class="card__product__main--quantity--p quantity">1</p>
                        <p class="card__product__main--quantity--p increase">+</p>

                    </article>                    
                </article>

                <article class="card__product__main--btn--actions">
                    <article class="card__product__main--btn--actions--container">

                        <button class="card__product__main--btn--add" id="btn-add">Add to bag</button>
                        <article class="card__product__main--more--container">
                            <select name="Delivery" id="" class="card__product__main--select">
                                <option value="delivery">Delivery</option>
                                <option value="delivery">Sample porpouse</option>
                                <option value="delivery">Sample porpouse</option>
                                <option value="delivery">Sample porpouse</option>
                            </select>
                            <select name="Payment" id="" class="card__product__main--select">
                                <option value="payment">Payment</option>
                                <option value="delivery">Sample porpouse</option>
                                <option value="delivery">Sample porpouse</option>
                                <option value="delivery">Sample porpouse</option>
                            </select>
                        </article>
                    </article>

                    <article class="card__product__main--btn--actions--container">
                        <button class="card__product__main--btn--buy" id="btn--buy">Buy now</button>

                        <article class="card__product__main--more--container">
                            <select name="Warranty" id="" class="card__product__main--select">
                                <option value="delivery">Warranty</option>
                                <option value="delivery">Sample porpouse</option>
                                <option value="delivery">Sample porpouse</option>
                                <option value="delivery">Sample porpouse</option>

                                
                            </select>
                            <select name="Care" id="" class="card__product__main--select">
                                <option value="payment">Care</option>
                                <option value="delivery">Sample porpouse</option>
                                <option value="delivery">Sample porpouse</option>
                                <option value="delivery">Sample porpouse</option>
                            </select>
                        </article>
                    </article>
                </article>
    
    `
    
}


let selectedColor = null;

const captureColorClick = () => {
  const colorElements = document.querySelectorAll('.color--name');

  colorElements.forEach(colorElement => {
    colorElement.addEventListener('click', function() {
      selectedColor = this.style.backgroundColor;
      
      selectedColor = selectedColor.charAt(0).toUpperCase() + selectedColor.slice(1);
      console.log('Clicked color:', selectedColor);
    });
  });

  return selectedColor;
};

let selectedSize = null;

const captureSizeClick = () => {
  const sizeElements = document.querySelectorAll('.card__product__main--li');

  sizeElements.forEach(sizeElement => {
    sizeElement.addEventListener('click', function() {
      selectedSize = this.getAttribute('alt');
      console.log(`Clicked size:`, selectedSize);
    });
  });

  return selectedSize;
};



const createChooseColor = (productObject) => {
    let htmlContent = '';

    const mapColorProduct = productObject.amount.map(color => color.color)
    console.log(mapColorProduct);


    mapColorProduct.forEach(color => {
        const inputChooseColorSection = document.createElement('input');
        inputChooseColorSection.className = 'color--name';
        inputChooseColorSection.style.backgroundColor = color;
        inputChooseColorSection.alt = color;
        inputChooseColorSection.type="radio"

        console.log(`From choos ecolor ${inputChooseColorSection.alt}`);

        htmlContent += inputChooseColorSection.outerHTML;


    })

    
    return htmlContent

}

function createProductDescription(productObject) {
    
    const product = productObject;

    const productDescriptionContainer = document.querySelector('.card__product__description')
    productDescriptionContainer.innerHTML = '';

    productDescriptionContainer.innerHTML = `
    <article class="card__product__description__figure__card__product__description__figure--figcaption">
                <p class="card__product__description__figur_card__product__description__figure--title">
                    ${product.name}</p>
                <p 
                class="card__product__description__figure__card__product__description__figure--text">
                ${product.description}</p>
            </article>
            <figure class="card__product__description__figure">
                <img src="${product.images}" alt=""
                    class="card__product__description__img">
            </figure>
    
    `;
    
}

let productList = [];
const validateStock = async (id, quantity, color, size) => {
    try {
        console.log(`I'm inside!`);

        const bodyData = {
            id: id,
            quantity: quantity,
            color: color,
            size: size
        }

        console.log(bodyData.id);
        console.log(bodyData.quantity);
        console.log(bodyData.color);
        console.log(bodyData.size);

        const responseApi = await fetch('http://localhost:3000/api/product/stock/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(bodyData),
        });

        console.log(responseApi);
        if(responseApi.ok){
            return await responseApi.json();
        }   else{
            console.error("Error", responseApi.status, responseApi.statusText);
            return null;
        }
        
    } catch (error) {
        console.log({error: error});
    }
}


const addProductBag = async (productData) => {
    const amountElement = document.querySelector('.quantity');
    let amount = parseInt(amountElement.textContent);
    const idProduct = productData._id;

    try {
        const validate = await validateStock(idProduct, amount, selectedColor, selectedSize);

        if (validate && validate.message === "Stock available for purchase") {
            const storedProductList = sessionStorage.getItem('productList');
            const productList = storedProductList ? JSON.parse(storedProductList) : [];
            
            productList.push(productData);
            
            sessionStorage.setItem('productList', JSON.stringify(productList));
            
            console.log('Product added to the bag:', productList);
        } else {
            console.error("Error from addProductbag Else");
            alert("Product doesn't available.")
        }
    } catch (error) {
        console.error("Error from addProductbag Catch", error);
    }
};

function printNavBar(productObject){
    console.log(`From begin function print nav`);

    const storedProductTitle = sessionStorage.getItem('productTitle');
    console.log(storedProductTitle);

    const navContainer = document.querySelector('.ul__product--nav');
    navContainer.innerHTML='';

    const navToPrint =  `
    <li class="li__product--nav">
                <a href="../home/home.html" class="li__product--nav li__product--nav--a">Home</a>
            </li>
            <li class="li__product--separator">
                >
            </li>
            <li class="li__product--nav">
                <a href="../products/product.html" class="li__product--nav li__product--nav--a">Shop</a>
            </li>
            <li class="li__product--separator">
                >
            </li>
            <li class="li__product--nav">
                <a href="" class="li__product--nav li__product--nav--a">${storedProductTitle}</a>
            </li>
        </ul>

    `;

    navContainer.innerHTML = navToPrint;


}


let quantity = 1;
console.log(`From quantity is now: ${quantity}`);

function handleDecrease() {
    const quantityElement = document.querySelector('.quantity');
    let quantity = parseInt(quantityElement.textContent);
    if (quantity > 1) {
        quantity--;
        quantityElement.textContent = quantity;
    }
    
}

function handleIncrease() {
    const quantityElement = document.querySelector('.quantity');
    let quantity = parseInt(quantityElement.textContent);
    quantity++;
    quantityElement.textContent = quantity;
    
}

function init() {
    const quantityElement = document.querySelector('.quantity');
    
    
    const decreaseButton = document.querySelector('.decrease');
    const increaseButton = document.querySelector('.increase');

    decreaseButton.addEventListener('click', handleDecrease);
    increaseButton.addEventListener('click', handleIncrease);
    
}

document.addEventListener('click', (event) => {
    const { target } = event;

    if (target.id === "shop" ||   target.id === "collections") {
        window.location.href = "../products/product.html";
    } else if(target.id === "about" || target.id === "contact" ){
        window.scrollTo(0, document.body.scrollHeight);
    }else if(target.id === "home"){
        window.location.href = "../home/home.html";
    
      }
});
