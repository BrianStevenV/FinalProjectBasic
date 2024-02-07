document.addEventListener("DOMContentLoaded", async () => {
    try {
        
        const storedProductTitle = sessionStorage.getItem('productTitle');
        console.log(storedProductTitle);

        if (storedProductTitle) {
            const responseApi = await fetch(`http://localhost:3000/api/product/name/${encodeURIComponent(storedProductTitle)}`);
            
            if (responseApi.ok) {
                const productData = await responseApi.json();
                console.log('Product Data:', productData);

                // Aquí puedes utilizar productData para actualizar la interfaz de usuario
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




