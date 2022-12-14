import { Pool, ResultSetHeader } from 'mysql2/promise';
import IUsers from '../interfaces/IUsers';

export default class UsersModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  // prettier-ignore
  public async create(users: IUsers): Promise<IUsers> {
    const { username, vocation, level, password } = users;
    const [{ insertId }] = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.users (username, vocation, level, password) VALUES (?,?,?,?)',
      [username, vocation, level, password],
    );

    return { id: insertId, ...users };
  }
}
