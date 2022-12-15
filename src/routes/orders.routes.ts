import { Router } from 'express';
import OrdersController from '../controllers/orders.controller';
import AuthValidation from '../Auth/AuthValidation';
import validateOrders from '../middlewares/validateOrder';

const router = Router();
const ordersController = new OrdersController();

router.get('/', ordersController.getAll);
router.post('/', AuthValidation, validateOrders, ordersController.create);

export default router;
