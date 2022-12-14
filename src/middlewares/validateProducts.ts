import { NextFunction, Request, Response } from 'express';
import { productsSchema } from '../util/schemas';
import errorMap, { TErrors } from '../util/errorMap';

//  prettier-ignore
const validateProducts = (
  req: Request,
  res: Response,
  next: NextFunction,
): Response | void => {
  const productsInfo = req.body;
  const { error } = productsSchema.validate(productsInfo);
  if (error) {
    const { type, message } = error.details[0];
    return res.status(errorMap(type as TErrors)).json({ message });
  }
  next();
};

export default validateProducts;
