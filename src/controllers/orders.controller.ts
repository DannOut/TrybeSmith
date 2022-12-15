import { Request, Response } from 'express';
import OrdersService from '../services/orders.service';
import ProductsService from '../services/products.service';

class OrdersController {
  //  prettier-ignore
  constructor(
    private ordersService = new OrdersService(),
    private productsService = new ProductsService(),
  ) {}

  public getAll = async (_req: Request, res: Response) => {
    const products = await this.ordersService.getAll();
    res.status(200).json(products);
  };

  public create = async (req: Request, res: Response) => {
    const { id } = req.body.user;
    const { productsIds } = req.body;
    await this.productsService.updateProductsByOrder(productsIds, id);
    res.status(201).json({ userId: id, productsIds });
  };
}

export default OrdersController;
