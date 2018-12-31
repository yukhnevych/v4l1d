import isEmail from 'validator/lib/isEmail';
import isEmpty from 'validator/lib/isEmpty';
import { isNumber, isFunction, isEmptyArray, isEmptyObject } from './utils';
import { validateData } from './core';

class Rules {
  addRule(name, logic, defaultMessage) {
    Object.defineProperty(this, name, {
      value(value, message = isFunction(defaultMessage) ? defaultMessage(value) : defaultMessage) {
        return data => logic(data, value) || message;
      }
    });
  }

  all(...rules) {
    return data => validateData(1, rules, data);
  }

  bail(...rules) {
    return data => validateData(0, rules, data);
  }

  required(message = 'This field is required!') {
    return data => ((data || data === 0) && !isEmptyArray(data) && !isEmptyObject(data) && !isEmpty(data)) || message;
  }

  email(message = 'This field is should be an email!') {
    return data => isEmail(data) || message;
  }

  limit(limit, message = `The field length is greated than ${limit}!`) {
    if (!limit || !isNumber(limit)) {
      throw new TypeError(`Expection number as a first function argument but receiving ${typeof limit}!`);
    }

    return data => (data && data.length <= limit) || message;
  }
}

export const rules = new Rules;
