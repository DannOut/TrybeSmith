import { NextFunction, Request, Response } from 'express';
import { userSchema } from '../util/schemas';
import errorMap, { TErrors } from '../util/errorMap';

//  prettier-ignore
const validateUser = (
  req: Request,
  res: Response,
  next: NextFunction,
): Response | void => {
  const userInfo = req.body;
  const { error } = userSchema.validate(userInfo);
  if (error) {
    const { type, message } = error.details[0];
    return res.status(errorMap(type as TErrors)).json({ message });
  }
  next();
};

export default validateUser;
