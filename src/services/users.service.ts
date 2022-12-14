import IUsers from '../interfaces/IUsers';
import connection from '../models/connection';
import UsersModel from '../models/users.model';
import auth from '../Auth/AuthService';
import ILogin from '../interfaces/ILogin';

class UsersService {
  public model: UsersModel;

  constructor() {
    this.model = new UsersModel(connection);
  }

  public async create(userInfo: IUsers): Promise<string> {
    const userCreated = await this.model.create(userInfo);
    return auth(userCreated);
  }

  public async login(login: ILogin) {
    const findUser = await this.model.findUserToLogin(login);
    // quando não encontra retorna um array vazio
    // se deixar só uma verificação da erro
    if (!findUser) {
      return { type: 'INVALID', message: 'Username or password invalid' };
    }
    return { type: null, message: auth(findUser) };
  }
}

export default UsersService;
