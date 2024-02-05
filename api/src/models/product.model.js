import mongoose from "mongoose";

const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    }, 
    code: {
        type: String,
        required: true,
        trim: true,
        unique: true
    }, 
    price: {
        type: Number,
        required: true,
        trim: true
    },
    accesory: {
        type: String,
        required: true,
        trim: true
    },
    images: {
        type: [String],
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    }, 
    amount: [{
        quantity: {
            type: Number, 
            default: 0,
            trim: true
        }, 
        color: {
            type: String,
            trim: true
        }, 
        size: {
            type: String,
            trim: true
        },
    }],

});

export default mongoose.model('Product', productSchema);