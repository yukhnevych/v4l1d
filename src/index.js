import { validate } from './core';
import * as rules from './rules';
import * as utils from './utils';

class V4l1d {
  constructor(rules, utils) {
    this._rules = Object.assign({}, rules);
    this._utils = Object.assign({}, utils);
    this.validate = validate;
  }

  get rules() {
    return this._rules;
  }

  get utils() {
    return this._utils;
  }

  addRule(name, logic, defaultMessage) {
    this.rules[name] =
        (value, message) =>
          data =>
            logic(data, value)
            || message
            || defaultMessage;
  }
}

export const v4l1d = new V4l1d(rules, utils);
