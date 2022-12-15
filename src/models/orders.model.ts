import { Pool, ResultSetHeader, RowDataPacket } from 'mysql2/promise';
import IOrder from '../interfaces/IOrder';

export default class OrdersModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  // prettier-ignore
  public async getAll(): Promise<IOrder[]> {
    const [rows] = await this.connection.execute<IOrder[] & RowDataPacket[]>(
      `SELECT O.id, O.user_id as userId, JSON_ARRAYAGG(P.id) as productsIds 
      FROM Trybesmith.orders as O
      INNER JOIN Trybesmith.products as P ON O.id = P.order_id
      GROUP BY O.id`,
    );

    return rows;
  }

  // prettier-ignore
  public async create(userId:number): Promise<number> {
    const [{ insertId }] = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.orders(user_id) VALUES (?)',
      [userId],
    );
    return insertId;
  }
}
