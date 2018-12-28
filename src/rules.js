import { isEmail, isEmpty } from 'validator';
import { isNumber, isEmptyArray, isEmptyObject } from './utils';
import { validateData } from './core';

const bail = (...args) => _rules(0, args);
const all = (...args) => _rules(1, args);
const _rules = (all, rules) => data => validateData(all, rules, data);

const required =
    message =>
      data =>
        ((data || data === 0)
          && !isEmptyArray(data)
          && !isEmptyObject(data)
          && !isEmpty(data))
        || message
        || 'This field is required!';

const email =
    message =>
      data =>
        isEmail(data)
        || message
        || 'This field is should be an email!';

const limit =
    (limit, message) => {
      if (!limit || !isNumber(limit)) {
        throw new TypeError(`Expection number as a first function argument but receiving ${typeof limit}!`);
      }

      return data =>
        (data && data.length <= limit)
        || message
        || `The field length is greated than ${limit}!`;
    };

export {
  bail,
  all,
  required,
  email,
  limit
};
