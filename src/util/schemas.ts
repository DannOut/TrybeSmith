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

export { loginSchema, productsSchema };
