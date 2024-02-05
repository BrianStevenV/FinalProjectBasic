import {Router} from 'express'
import { getByCategory, getByName, getByPrice, createProduct } from '../controllers/product.controller.js';

const router = Router();

router.get('/product/category/:category', getByCategory);
router.get('/product/name/:name', getByName);
router.get('/product/price/:price', getByPrice); // if ?
router.post('/product', createProduct);

export default router;

//Get Filter by category
//Get Filter by name
//Get Paginaiton orderby asc / and desc
//