const isArray = arr => Array.isArray(arr);
const isObject = obj => !!obj && typeof obj === 'object';
const isNumber = i => typeof i !== 'boolean' && !isArray(i) && (typeof i === 'number' || !Number.isNaN(+i));
const isFunction = func => !!func && func instanceof Function;
const isEmptyArray = arr => isArray(arr) && arr.length === 0;
const isEmptyObject = obj => isObject(obj) && Object.keys(obj).length === 0 && obj.constructor === Object;

export {
  isNumber,
  isArray,
  isObject,
  isFunction,
  isEmptyArray,
  isEmptyObject
};
