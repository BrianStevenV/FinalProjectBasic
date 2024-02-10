const userData = sessionStorage.getItem('formData');
const userDataParse = JSON.parse(userData);
console.log(userDataParse);

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

dateElement.textContent = orderDate();
orderNumberElement.textContent = orderNumberRandom();
nameElement.textContent = cardName;



