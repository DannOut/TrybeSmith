import { NextFunction, Request, Response } from 'express';
import { orderSchema } from '../util/schemas';

const validateOrder = (req: Request, res: Response, next: NextFunction) => {
  const orderInfo = req.body;
  const { error } = orderSchema.validate(orderInfo);
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }
  next();
};

export default validateOrder;
