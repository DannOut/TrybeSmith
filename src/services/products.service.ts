import IProduct from '../interfaces/IProduct';
import connection from '../models/connection';
import ProductsModel from '../models/products.model';
import OrdersService from './orders.service';

class ProductsService {
  private productsModel: ProductsModel;

  private orderService: OrdersService;

  constructor() {
    this.productsModel = new ProductsModel(connection);
    this.orderService = new OrdersService();
  }

  public create(product: IProduct): Promise<IProduct> {
    return this.productsModel.create(product);
  }

  //* Verificar o por que não precisa do async
  public getAll(): Promise<IProduct[]> {
    return this.productsModel.getAll();
  }

  //  prettier-ignore
  public async updateProductsByOrder(
    arrayProducts: number[],
    userId: number,
  ): Promise<void> {
    const orderId = await this.orderService.create(userId);
    await Promise.all(
      arrayProducts.map((eachproduct) =>
        this.productsModel.updateProductsByOrder(eachproduct, orderId)),
    );
  }
}

export default ProductsService;
