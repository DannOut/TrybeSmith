import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';

const secret = process.env.JWT_SECRET || 'secret';

export default (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: 'Token not found' });
  }
  try {
    const payload = jwt.verify(token, secret);
    // Manobra evasiva do zambelli
    req.body.user = payload;
  } catch (error) {
    return res.status(401).json({ message: 'Invalid token' });
  }

  next();
};
