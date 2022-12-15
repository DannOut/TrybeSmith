import IOrder from '../interfaces/IOrder';
import connection from '../models/connection';
import OrdersModel from '../models/orders.model';

class OrdersService {
  private ordersModel: OrdersModel;

  constructor() {
    this.ordersModel = new OrdersModel(connection);
  }

  public getAll = async (): Promise<IOrder[]> => this.ordersModel.getAll();

  // public create = async (userId: number): Promise<number> => {
  //   const orderToCreate = await this.ordersModel.create(userId);
  //   return orderToCreate;
  // };
}

export default OrdersService;
