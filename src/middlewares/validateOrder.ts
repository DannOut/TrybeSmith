import { NextFunction, Request, Response } from 'express';
import { orderSchema } from '../util/schemas';
import errorMap, { TErrors } from '../util/errorMap';

//  prettier-ignore
const validateProducts = (
  req: Request,
  res: Response,
  next: NextFunction,
): Response | void => {
  const { productsIds } = req.body;
  console.log('TESTE', productsIds);
  const { error } = orderSchema.validate(productsIds);
  console.log('ERROR', error);
  if (error) {
    const { type, message } = error.details[0];
    return res.status(errorMap(type as TErrors)).json({ message });
  }
  next();
};

export default validateProducts;
