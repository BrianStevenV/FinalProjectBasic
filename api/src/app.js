import express from "express";
import morgan from 'morgan';
import cors from 'cors'
import productRoutes from './routes/product.routes.js';
//Se utiliza para configurar express
const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use("/api",productRoutes);

export default app;