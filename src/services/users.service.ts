import IUsers from '../interfaces/IUsers';
import connection from '../models/connection';
import UsersModel from '../models/users.model';
import auth from '../Auth/AuthService';

class UsersService {
  public model: UsersModel;

  constructor() {
    this.model = new UsersModel(connection);
  }

  public async create(userInfo: IUsers): Promise<string> {
    const userCreated = await this.model.create(userInfo);
    return auth(userCreated);
  }
}

export default UsersService;
