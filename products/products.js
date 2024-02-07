const containerTop = document.querySelector(".section__figure--top");
const containerBottom = document.querySelector(".section__figure--bottom");

const searchBar = document.querySelector("#search-bar");

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

document.addEventListener("DOMContentLoaded", () => {

    const originalHTMLTop = document.querySelector('.section__figure--top').innerHTML;
    const originalHTMLBottom = document.querySelector('.section__figure--bottom').innerHTML;

    btnAll.addEventListener("click", () => {
        
        document.querySelector('.section__figure--top').innerHTML = originalHTMLTop;
        document.querySelector('.section__figure--bottom').innerHTML = originalHTMLBottom;
    });
});



const fetchDataAndRenderProducts = async (url) => {
    try {
        const responseApi = await fetch(url);

        if (responseApi.ok) {
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
        } else {
            console.error("Error fetching data");
        }
    } catch (error) {
        console.error("Error:", error);
    }
};

const getValueFromSelect = async () => {
    const select = document.querySelector("#select");
    const optionSelect = select.options[select.selectedIndex];
    const value = optionSelect.value;
    const url = `http://localhost:3000/api/product/price/${value}`;

    await fetchDataAndRenderProducts(url);
};

const filterProductsByCategory = async (categoryName) => {
    const url = `http://localhost:3000/api/product/category/${categoryName}`;
    await fetchDataAndRenderProducts(url);
};


const containerFigureTops = document.querySelectorAll(".figure--top");
const containerFigureBottoms = document.querySelectorAll(".figure--bottom");
const containerFigurePrimary = document.querySelector(".figure__primary--bottom");

containerFigurePrimary.addEventListener('click', () => {
    const redirectURL = '../details/details.html';
    window.location.href = redirectURL;
})

containerFigureTops.forEach(containerFigureTop => {
    containerFigureTop.addEventListener('click', () => {
        const redirectURL = '../details/details.html';
        window.location.href = redirectURL;
        captureFigcaptionH1(containerFigureTop);

    });
});

containerFigureBottoms.forEach(containerFigureBottom => {
    containerFigureBottom.addEventListener('click', () => {
        const redirectURL = '../details/details.html';
        window.location.href = redirectURL;
        captureFigcaptionH1(containerFigureBottom)
    });
});

const captureFigcaptionH1 = (element) => {
    const h1Element = element.querySelector('.figcaption__h1');
    const valueOnly = h1Element.textContent.trim();
    
    const storage = sessionStorage.setItem('productTitle', valueOnly);
    
}

