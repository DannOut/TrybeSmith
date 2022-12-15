import { Router } from 'express';
import OrdersController from '../controllers/orders.controller';
import AuthValidation from '../Auth/AuthValidation';
// import validateOrder from '../middlewares/validateOrder';

const router = Router();
const ordersController = new OrdersController();

router.get('/', ordersController.getAll);
router.post('/', AuthValidation, ordersController.create);

export default router;
