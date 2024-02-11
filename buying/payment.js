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

document.addEventListener("DOMContentLoaded", function() {
    var navToggleButton = document.getElementById("navToggleButton");
    var navButtons = document.getElementById("navButtons");

    navToggleButton.addEventListener("click", function() {
        if (navButtons.style.display === "none" || navButtons.style.display === "") {
            navButtons.style.display = "flex";
        } else {
            navButtons.style.display = "none";
        }
    });
});