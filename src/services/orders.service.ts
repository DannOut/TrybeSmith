import IOrder from '../interfaces/IOrder';
import connection from '../models/connection';
import OrdersModel from '../models/orders.model';

class OrdersService {
  public model: OrdersModel;

  constructor() {
    this.model = new OrdersModel(connection);
  }

  public getAll(): Promise<IOrder[]> {
    return this.model.getAll();
  }
}

export default OrdersService;
