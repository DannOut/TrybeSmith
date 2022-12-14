import { Router } from 'express';
import ProductsController from '../controllers/products.controller';
import validateProducts from '../middlewares/validateProducts';

const router = Router();
const productsController = new ProductsController();

router.post('/', validateProducts, productsController.create);
router.get('/', productsController.getAll);

export default router;
