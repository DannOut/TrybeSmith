import { NextFunction, Request, Response } from 'express';
import { orderSchema } from '../util/schemas';
import errorMap, { TErrors } from '../util/errorMap';

//  prettier-ignore
const validateOrders = (
  req: Request,
  res: Response,
  next: NextFunction,
): Response | void => {
  const products = req.body;
  const value = orderSchema.validate(products.productsIds);
  // console.log('VALUE', value.error);
  const { error } = value;
  if (error) {
    const { type, message } = error.details[0];
    return res.status(errorMap(type as TErrors)).json({ message });
  }
  next();
};

export default validateOrders;
