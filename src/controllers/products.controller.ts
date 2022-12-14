import { Request, Response } from 'express';
import ProductsService from '../services/products.service';

class ProductsController {
  constructor(private productsService = new ProductsService()) {}

  public create = async (req: Request, res: Response) => {
    const product = req.body;
    const newProduct = await this.productsService.create(product);
    console.log('NEW PRODUCT', newProduct);
    res.status(201).json(newProduct);
  };
}

export default ProductsController;
