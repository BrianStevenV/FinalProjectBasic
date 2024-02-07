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


const btnAddToBag = document.querySelector("#btn-add");
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
            const productData = await responseApi.json();
            containerProductNav.innerHTML = "";
            containerProductCard.innerHTML = "";
            containerProductDescription.innerHTML = "";

            let htmlContent = "";

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
            <img src="${product.images}" alt="" class="card__product__main card__product__main--img">
            <figcaption class="card__product__main--figcaption">
                <section class="card__product__main--information">
                    <p class="card__product__main--title">${product.name}</p>
                    <p class="card__product__main--code">Code: ${product.code}</p>
                    <p class="card__product__main--price">$${product.price}</p>
                    <p class="card__product__main--color--name">Color - ${product.color}</p>
                    <div class="choose__color">
                        <input type="radio" name="color" class="color--name--white">
                        <input type="radio" name="color" class="color--name--rosegold">
                    </div>
                </section>
                <section class="card__product__main--size">
                    <p class="card__product__main--size card__product__main--size--text">Size - ${product.amount[0].size}</p>
                    <p class="card__product__main--size card__product__main--size--question">What is my size?</p>
                </section>
                <ul class="card__product__main--ul">
                    ${product.amount.map(size => `<li class="card__product__main--li">${size.color}</li>`).join('')}
                </ul>
                <section class="card__product__main--quantity">
                        <p class="card__product__main--quantity--title">Quantity</p>
                        <ul class="card__product__main--quantity--ul">
                            <li class="card__product__main--quantity--li">-</li>
                            <li class="card__product__main--quantity--li">1</li>
                            <li class="card__product__main--quantity--li">+</li>
                        </ul>
                    </section>
                    <section class="card__product__main--btn--actions">
                        <article class="card__product__main--btn--actions--container">

                            <button class="card__product__main--btn--add" id="btn-add">Add to bag</button>

                        </article>

                        <article class="card__product__main--btn--actions--container">
                            <button class="card__product__main--btn--buy" id="btn--buy">Buy now</button>


                        </article>
                    </section>
                    <section class="card__product__main--more">
                        <article class="card__product__main--more--container">
                            <select name="Delivery" id="" class="card__product__main--select">
                                <option value="delivery">Delivery</option>
                            </select>
                            <select name="" id="" class="card__product__main--select">
                                <option value="payment">Payment</option>
                            </select>
                        </article>
                        
                            
                        </article>
                        <article class="card__product__main--more--container">
                            <select name="Delivery" id="" class="card__product__main--select">
                                <option value="delivery">Warranty</option>
                            </select>
                            <select name="" id="" class="card__product__main--select">
                                <option value="payment">Care</option>
                            </select>
                        </article>
                        
                    </section>
            </figcaption>
        </figure>
        </section>

       
        
    `;
    console.log(detailsContainer);

    
}



function createProductDescription(productObject) {
    // Crear el contenido HTML dinámico
    const product = productObject;

    const productDescriptionContainer = document.querySelector('.card__product__description')
    productDescriptionContainer.innerHTML = '';


    productDescriptionContainer.innerHTML = `
    <p class="description--p">Description</p>
            <figure class="card__product__description__figure">
                <img src="${product.images}" alt="" class="card__product__description__img">
                <figcaption class="card__product__description__figure card__product__description__figure--figcaption">
                    <p class="card__product__description__figure card__product__description__figure--title">${product.name}</p>
                    <p class="card__product__description__figure card__product__description__figure--text">${product.description}</p>
                </figcaption>
            </figure>
            `;

    console.log(productDescriptionContainer);
    

    

//     const descriptionContainer = document.createElement('div');
//     descriptionContainer.innerHTML = productDescriptionHTML;

//     const existingProductDescription = document.querySelector('.card_product_description');

//     if (existingProductDescription) {
//         existingProductDescription.replaceWith(descriptionContainer);
//     } else {
//         document.body.appendChild(descriptionContainer);
//     }
}


