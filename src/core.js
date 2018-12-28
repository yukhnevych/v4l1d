import { isArray, isObject, isFunction } from './utils';

const validate = (shape, data) => {
  if (isFunction(shape)) {
    return shape(data);
  }

  if (isArray(shape)) {
    return _validateArray(shape, data);
  }

  if (isObject(shape)) {
    return _validateObject(shape, data);
  }
};

const validateData = (all, rules, data) => {
  const method = all ? 'forEach' : 'every';
  const errors = [];

  rules[method](rule => {
    const isValid = rule(data);

    if (isValid === true) {
      return true;
    }

    errors.push(isValid);

    return false;
  });

  if (errors.length) {
    return all ? errors : errors[0];
  }
};

const _validateArray = (shape, data = []) => data.reduce((result, value, i) => {
  const rules = shape.length === 1 ? shape[0] : shape[i];
  const errors = validate(rules, value);

  if (errors) {
    result = result || [];
    result.push(errors);
  }

  return result;
}, undefined);

const _validateObject = (shape, data = {}) => Object.keys(shape).reduce((result, key) => {
  const errors = validate(shape[key], data[key]);

  if (errors) {
    result = result || {};
    result[key] = errors;
  }

  return result;
}, undefined);

export {
  validate,
  validateData
};
