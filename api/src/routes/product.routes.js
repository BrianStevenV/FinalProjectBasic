import {Router} from 'express'
import { postValidateProductStockFromColorAndSize, getByCategory, getByName, getByPrice, getCalculateToPay, createProduct } from '../controllers/product.controller.js';

const router = Router();

router.get('/product/category/:category', getByCategory);
router.get('/product/name/:name', getByName);
router.post('/product/stock/', postValidateProductStockFromColorAndSize);
router.get('/product/price/:price', getByPrice); // if ?
router.post('/product', createProduct);
router.post('/product/pay/', getCalculateToPay)

export default router;

