import { validate } from './core';
import * as rules from './rules';
import * as utils from './utils';

class V4l1d {
  constructor() {
    this._rules = Object.assign({}, rules);
    this.validate = validate;
  }

  get rules() {
    return this._rules;
  }

  get utils() {
    return utils;
  }

  addRule(name, logic, defaultMessage) {
    this._rules[name] =
        (value, message) =>
          data =>
            logic(data, value)
            || message
            || defaultMessage;
  }
}

export default new V4l1d();