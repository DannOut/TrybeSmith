import { Request, Response } from 'express';
import UsersService from '../services/users.service';

class UsersController {
  constructor(private usersService = new UsersService()) {}

  public create = async (req: Request, res: Response) => {
    const userInfo = req.body;
    const token = await this.usersService.create(userInfo);
    res.status(201).json({ token });
  };
}

export default UsersController;
