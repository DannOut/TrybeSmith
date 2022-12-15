import { Pool, ResultSetHeader, RowDataPacket } from 'mysql2/promise';
import IProduct from '../interfaces/IProduct';

export default class ProductsModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  // prettier-ignore
  public async create(product: IProduct): Promise<IProduct> {
    const { name, amount } = product;
    const [{ insertId }] = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.products (name, amount) VALUES (?,?)',
      [name, amount],
    );
    return { id: insertId, ...product };
  }

  // prettier-ignore
  public async getAll(): Promise<IProduct[]> {
    const [rows] = await this.connection.execute<RowDataPacket[] & IProduct[]>(
      'SELECT * FROM Trybesmith.products',
    );
    return rows;
  }

  // prettier-ignore
  public async updateProductsByOrder(productId:number, orderId:number): Promise<void> {
    await this.connection.execute(
      'UPDATE Trybesmith.products SET order_id = ? WHERE id = ?',
      [orderId, productId],
    );
  }
}
