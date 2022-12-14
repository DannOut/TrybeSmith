import { NextFunction, Request, Response } from 'express';
import { loginSchema } from '../util/schemas';

const validateLogin = (req: Request, res: Response, next: NextFunction) => {
  const loginInfo = req.body;
  const { error } = loginSchema.validate(loginInfo);
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }
  next();
};

export default validateLogin;
