

function printCartProducts(productObject){

    const productsContainer = document.querySelector('.purchase__objects');
    productsContainer.innerHTML='';

    productObject.forEach(product => {
        
        var productCard = document.createElement('figure')
        productCard.classList('purchase__objects--figure')

        var addProduct = `
        <img src="${product.images}" alt="Luxury Charms Ring" class="purchase__objects--img">
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
        

    });

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
