export type Errors = 'any.required' | 'string.base' | 'string.min';

const errorMap = {
  'array.base': 422,
  'string.base': 422,
  'string.min': 422,
  'number.base': 422,
  'number.min': 422,
  'any.required': 400,
};

export default (error: Errors): number => errorMap[error] || 422;
