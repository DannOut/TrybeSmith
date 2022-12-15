import Joi from 'joi';

const loginSchema = Joi.object({
  username: Joi.string().required(),
  password: Joi.string().alphanum().required(),
});

const productsSchema = Joi.object({
  name: Joi.string().required().min(3),
  amount: Joi.string().required().min(3),
  order_id: Joi.number().required(),
});

const userSchema = Joi.object({
  username: Joi.string().required().min(3),
  vocation: Joi.string().required().min(3),
  level: Joi.number().required().min(1),
  password: Joi.string().required().min(8),
});

const orderSchema = Joi.object({
  productsIds: Joi.array().items(Joi.number().required()).required(),
});

export { loginSchema, productsSchema, userSchema, orderSchema };
