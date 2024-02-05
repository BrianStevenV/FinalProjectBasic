const containerTop = document.querySelector(".section__figure--top");
const containerBottom = document.querySelector(".section__figure--bottom");

const btnAll = document.getElementById("AllCategory");
const btnRings = document.getElementById("RingCategory");
const btnBracelets = document.getElementById("BraceletsCategory");
const btnNecklaces = document.getElementById("NecklaceCategory");
const btnEarrings = document.getElementById("EarringsCategory");
const btnPrice = document.getElementById("");

const categoryFilter = [btnRings, btnBracelets, btnNecklaces, btnEarrings];

document.addEventListener("DOMContentLoaded", () => {
    categoryFilter.forEach((button) => { 
        button.addEventListener("click", () => {
            const category = button.id.replace("Category", "");
            filterProductsByCategory(category);
        })
    })
})

const filterProductsByCategory = async (categoryName) => {
    const responseApi = await fetch(`http://localhost:3000/api/product/category/${categoryName}`);
    
    if(responseApi.ok) {
        const categoryData = await responseApi.json();
        containerTop.innerHTML = "";
        containerBottom.innerHTML = "";

        let htmlContent = "";  

        categoryData.forEach(product => {
            htmlContent += `<figure class="figure--top">
                <img src="${product.images}" alt="${product.name}" class="figure--top--img">
                <figcaption class="figure--top--figcaption">
                    <p class="figcaption__h1">${product.name}</p>
                    <p class="figcaption__p">$${product.price}</p>
                </figcaption>
            </figure>`;
        });

        
        containerTop.innerHTML = htmlContent;
    }   else {
        console.error("Error if");
    }
};



document.addEventListener("DOMContentLoaded", () => {

    const originalHTMLTop = document.querySelector('.section__figure--top').innerHTML;
    const originalHTMLBottom = document.querySelector('.section__figure--bottom').innerHTML;

    btnAll.addEventListener("click", () => {
        
        document.querySelector('.section__figure--top').innerHTML = originalHTMLTop;
        document.querySelector('.section__figure--bottom').innerHTML = originalHTMLBottom;
    });
});


