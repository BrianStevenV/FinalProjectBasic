const typeAccesory = {
    Earring : 1,
    Ring : 2,
    Bracelet: 3,
    Collar: 4

}


let productList = [
    {
        name: 'Producto 1',
        code: 'P001',
        price: 29.99,
        accessory: typeAccesory.Earring,
        images: ['./assets/jewelry 1.png', './assets/jewelry 2.png'],
        description: 'Descripción del Producto 1',
        amount: [{ quantity: 30, color: 'Amarillo', size: 'M' }, { quantity: 5, color: 'Naranja', size: 'M' }]
    },
    {
        name: 'Producto 2',
        code: 'P001',
        price: 19.99,
        accessory: typeAccesory.Ring,
        images: ['./assets/products_img/Img 1-b page 2.png', './assets/products_img/Img 3-b page 2.png'],
        description: 'Descripción del Producto 1',
        amount: [{ quantity: 20, color: 'Verde', size: 'M' }]
    },
    {
        name: 'Producto 3',
        code: 'P001',
        price: 39.99,
        accessory: typeAccesory.Earring,
        images: ['./assets/products_img/Img 4-d page 2.png'],
        description: 'Descripción del Producto 1',
        amount: [{ quantity: 3, color: 'Negro', size: 'L' }]
    }
    ,{
        name: 'Producto 4',
        code: 'P001',
        price: 49.99,
        accessory: typeAccesory.Ring,
        images: ['./assets/products_img/Img 4-a page 2.png'],
        description: 'Descripción del Producto 4',
        amount: [{ quantity: 5, color: 'Amarillo', size: 'M' }, { quantity: 7, color: 'Verde', size: 'S' }]
    }
    ,{
        name: 'Producto 5',
        code: 'P001',
        price: 59.99,
        accessory: typeAccesory.Earring,
        images: [null],
        description: 'Descripción del Producto 5',
        amount: [{ quantity: 10, color: 'Rojo', size: 'M' }]
    }
]



const searchByName = (productList, productName) => {
    return productList.filter(product => {
        return product.name.toLowerCase().includes(productName.toLowerCase());
    });
};



const filterByType = (productList, productType) => {
    return productList.filter(product => product.accessory === productType);
};

const sortProductsByPrice = (productList, order) => {
    return productList.slice().sort((a, b) => {
        if (order === 'asc') {
            return a.price - b.price;
        } else if (order === 'desc') {
            return b.price - a.price;
        }
    });
}


let orderList = [
    {
        amount: 2,
        unitPrice: 500
    }, 
    {
        amount: 5,
        unitPrice: 100
    },
    {
        amount: 7,
        unitPrice: 70
    }
]

const calculateToPay = (orderList) => {
    return orderList.reduce((total, product) => {
        return total + (product.amount * product.unitPrice);
    }, 0);
};



const resultByName = searchByName(productList, 'Producto');
const resultByType = filterByType(productList, typeAccesory.Earring);
const sortedProductsAsc = sortProductsByPrice(productList, 'asc');
const sortedProductsDesc = sortProductsByPrice(productList, 'desc');
const resultCalculatePay = calculateToPay(orderList);


console.log("Productos ordenados ascendentemente:", sortedProductsAsc);
console.log("Productos ordenados descendentemente:", sortedProductsDesc);
console.log(resultByName);
console.log(resultByType);
console.log(resultCalculatePay);

//Probar en: https://playcode.io/javascript