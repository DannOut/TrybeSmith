import IOrder from '../interfaces/IOrder';
import connection from '../models/connection';
import OrdersModel from '../models/orders.model';
import ProductsModel from '../models/products.model';

class OrdersService {
  private ordersModel: OrdersModel;

  private productsModel: ProductsModel;

  constructor() {
    this.ordersModel = new OrdersModel(connection);
    this.productsModel = new ProductsModel(connection);
  }

  public getAll = async (): Promise<IOrder[]> => this.ordersModel.getAll();

  public create = async (userId: number): Promise<number> => {
    const orderToCreate = await this.ordersModel.create(userId);
    return orderToCreate;
  };

  // public async updateProductsByOrder(arrayProducts: number[], orderId: number): Promise<void> {
  //   await Promise.all(
  //     arrayProducts.map((eachproduct) =>
  //       this.productsModel.updateProductsByOrder(eachproduct, orderId)),
  //   );
  // }
}

export default OrdersService;
