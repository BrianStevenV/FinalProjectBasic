import {Router} from 'express'
import { postValidateProductStockFromColorAndSize, getByCategory, getByName, getByPrice, createProduct } from '../controllers/product.controller.js';

const router = Router();

router.get('/product/category/:category', getByCategory);
router.get('/product/name/:name', getByName);
router.post('/product/stock/', postValidateProductStockFromColorAndSize);
router.get('/product/price/:price', getByPrice); // if ?
router.post('/product', createProduct);

export default router;
