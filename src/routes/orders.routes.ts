import { Router } from 'express';
import OrdersController from '../controllers/orders.controller';
import AuthValidation from '../Auth/AuthValidation';
import productsArrayCheck from '../middlewares/validateOrder';
// import validateOrder from '../middlewares/validateOrder';

const router = Router();
const ordersController = new OrdersController();

router.get('/', ordersController.getAll);
router.post('/', AuthValidation, productsArrayCheck, ordersController.create);

export default router;
