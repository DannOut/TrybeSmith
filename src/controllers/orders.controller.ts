import { Request, Response } from 'express';
import OrdersService from '../services/orders.service';

class OrdersController {
  constructor(private ordersService = new OrdersService()) {}

  public getAll = async (_req: Request, res: Response) => {
    const products = await this.ordersService.getAll();
    res.status(200).json(products);
  };
}

export default OrdersController;
