import { Pool, ResultSetHeader } from 'mysql2/promise';
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
}