import jwt from 'jsonwebtoken';
import IUsers from '../interfaces/IUsers';

require('dotenv/config');

const jwtConfig: object = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

const secret = process.env.JWT_SECRET || 'secret';

const auth = (info: IUsers): string => {
  const { password, ...data } = info;
  const token = jwt.sign(data, secret, jwtConfig);
  return token;
};

export default auth;
