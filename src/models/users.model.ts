import { Pool, ResultSetHeader, RowDataPacket } from 'mysql2/promise';
import ILogin from '../interfaces/ILogin';
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

  // prettier-ignore
  public async findUserToLogin(login: ILogin): Promise<IUsers | null> {
    const { username, password } = login;
    const [[rows]] = await this.connection.execute<RowDataPacket[] & IUsers[]>(
      'SELECT * FROM Trybesmith.users WHERE username = ? AND password = ?',
      [username, password],
    );
    return rows;
  }
}
