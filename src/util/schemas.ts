import Joi from 'joi';

const loginSchema = Joi.object({
  username: Joi.string().required(),
  password: Joi.string().alphanum().required(),
});

const productsSchema = Joi.object({
  name: Joi.string().required().min(3),
  amount: Joi.string().required().min(3),
});

const userSchema = Joi.object({
  username: Joi.string().required().min(3),
  vocation: Joi.string().required().min(3),
  level: Joi.number().required().min(1),
  password: Joi.string().required().min(8),
});

const orderSchema = Joi.array()
  .items(Joi.number().required())
  .required()
  .messages({
    'number.base': '"productsIds" must include only numbers',
    'any.required': '"productsIds" is required',
    'array.base': '"productsIds" must be an array',
    'array.includesRequiredUnknowns':
      '"productsIds" must include only numbers',
  });

export { loginSchema, productsSchema, userSchema, orderSchema };
