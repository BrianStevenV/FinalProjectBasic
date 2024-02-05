import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost/finalbasicdb');
        console.log(`I'm MongoDB`);
    } catch (error) {
        console.log(error);
    };
}
