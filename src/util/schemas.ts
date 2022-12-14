import Joi from 'joi';

const loginSchema = Joi.object({
  username: Joi.string().required(),
  password: Joi.string().alphanum().required(),
});

const futureSchema = Joi.object({});

export { loginSchema, futureSchema };
