import IOrder from '../interfaces/IOrder';
import connection from '../models/connection';
import OrdersModel from '../models/orders.model';

class OrdersService {
  private model: OrdersModel;

  constructor() {
    this.model = new OrdersModel(connection);
  }

  public getAll = async (): Promise<IOrder[]> => this.model.getAll();

  public create = async (userId: number): Promise<number> => {
    const orderToCreate = await this.model.create(userId);
    return orderToCreate;
  };
}

export default OrdersService;
