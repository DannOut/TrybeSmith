import IProduct from '../interfaces/IProduct';
import connection from '../models/connection';
import OrdersModel from '../models/orders.model';
import ProductsModel from '../models/products.model';

class ProductsService {
  private productsModel: ProductsModel;

  private orderModel: OrdersModel;

  constructor() {
    this.productsModel = new ProductsModel(connection);
    this.orderModel = new OrdersModel(connection);
  }

  public async create(product: IProduct): Promise<IProduct> {
    return this.productsModel.create(product);
  }

  public async getAll(): Promise<IProduct[]> {
    return this.productsModel.getAll();
  }

  //  prettier-ignore
  public async updateProductsByOrder(
    arrayProducts: number[],
    userId: number,
  ): Promise<void> {
    const orderId = await this.orderModel.create(userId);
    await Promise.all(
      arrayProducts.map((eachproduct) =>
        this.productsModel.updateProductsByOrder(eachproduct, orderId)),
    );
  }
}

export default ProductsService;
