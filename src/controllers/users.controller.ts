import { Request, Response } from 'express';
import UsersService from '../services/users.service';

class UsersController {
  constructor(private usersService = new UsersService()) {}

  public create = async (req: Request, res: Response) => {
    const userInfo = req.body;
    const token = await this.usersService.create(userInfo);
    res.status(201).json({ token });
  };

  public login = async (req: Request, res: Response) => {
    const loginInfo = req.body;
    const { type, message } = await this.usersService.login(loginInfo);
    if (type) {
      res.status(401).json({ message });
    }
    res.status(200).json({ token: message });
  };
}

export default UsersController;
