import Product from '../models/product.model.js'

export const postValidateProductStockFromColorAndSize = async (req, res) => {
    try {
        
        const {id, quantity, color, size} = req.body;
        
        const productFound = await Product.findById(id);

        if(!productFound) {
            return res.status(404).json({error: 'Product not found'})
        }

        const matchingStock = productFound.amount.find(
            item => item.color == color && item.size == size
        );

        if (!matchingStock) {
            return res.status(404).json({
                error: 'Stock not found for the specified color and size',
            });
        }

        if (matchingStock.quantity < quantity) {
            return res.status(400).json({ error: 'Insufficient stock' });
        }
        console.log(`Finish`);
        res.status(200).json({ message: 'Stock available for purchase' });
        
    } catch (error) {
        console.error({error: `Internal Server Error`});
    }
}

export const getByCategory = async (req, res) => {
    try {

        const searchCategory = req.params.category;

        const productsFound = await Product.find({ 
            accesory: searchCategory })
                                           .limit(10)
                                           .exec();

        res.status(200).json(productsFound);

    } catch (error) {

        console.error("Error searching products by category:", error);
        res.status(500).json({ error: "Error Internal Server" });

    }
};

export const getByName = async (req, res) => {
    const searchName = req.params.name.trim();
    res.set({
        "Allow-acces-Allow-Origin":"*"
    })

    try {
        
        const productsFound = await Product.findOne({ name: searchName });

        console.log("Products found by name:", productsFound);

        res.status(200).json(productsFound);

    } catch (error) {

        console.error("Error searching products by name", error);
        res.status(500).json({ error: "Error Internal Server" });

    }

}
export const getByPrice = async (req, res) => {
    const searchPrice = req.params.price.trim();

    const limit = 10;
    const page = 1;

    try {
        if(searchPrice === 'asc'){
    
            const products = await Product.find({})
            .sort({ price: 1 })
            .skip((page - 1) * limit)
            .limit(limit);
            return res.send(products);
    
        }   else if (searchPrice === 'desc'){
            
            const products = await Product.find({})
            .sort({ price: -1 })
            .skip((page - 1) * limit)
            .limit(limit);
            return res.send(products);
            
        }   else{
            console.error("Error");
        }
    } catch (error) {
        throw new Error(error.message);
    }
}

export const getCalculateToPay = (req, res) => {
        
    const priceUniteProducts = req.body;

    console.log('From', priceUniteProducts);

    let totalToPay = 0;

    priceUniteProducts.forEach(element => {
        const totalPrice = element.price * element.quantity;
        totalToPay += totalPrice;
        console.log(totalToPay);

    });

    res.status(200).json({totalToPay});

    
}

export const createProduct = async (req, res) => {
    const {name, code, price, accesory, images, description, amount} = req.body

    try {

        const newProduct = new Product({
            name,
            code,
            price,
            accesory,
            images,
            description,
            amount
        })

        await newProduct.save()
        res.status(200).json(`Product was created ${newProduct}`);

    } catch (error) {

        console.log(error);
    }
}




const handleConsulta = (results, typeQuery) => {
    console.log(`Resultados de la consulta ${typeQuery}:`, results);
    
  };




