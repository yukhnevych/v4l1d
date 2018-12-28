import { expect } from 'chai';
import { v4l1d } from '../dist/index';

const { isNumber, isArray, isObject, isFunction, isEmptyArray, isEmptyObject } = v4l1d.utils;

describe('Utils', () => {
  describe('#isNumber', () => {
    it('Should return `true`, when number is passed!', () => expect(isNumber(0)).to.be.true);
    it('Should return `true`, when string number is passed!', () => expect(isNumber('0')).to.be.true);
    it('Should return `false`, when array is passed!', () => expect(isNumber([])).to.be.false);
    it('Should return `false`, when object is passed!', () => expect(isNumber({})).to.be.false);
    it('Should return `false`, when boolean passed!', () => expect(isNumber(true)).to.be.false);
  });

  describe('#isArray', () => {
    it('Should return `true`, array is array!', () => expect(isArray([])).to.be.true);
    it('Should return `false`, string is not array!', () => expect(isArray('')).to.be.false);
    it('Should return `false`, number is not array!', () => expect(isArray(0)).to.be.false);
    it('Should return `false`, boolean is not array!', () => expect(isArray(true)).to.be.false);
    it('Should return `false`, null is not array!', () => expect(isArray(null)).to.be.false);
    it('Should return `false`, undefined is not array!', () => expect(isArray(undefined)).to.be.false);
    it('Should return `false`, object is not array!', () => expect(isArray({})).to.be.false);
  });

  describe('#isObject', () => {
    it('Should return `true`, object is object!', () => expect(isObject({})).to.be.true);
    it('Should return `true`, array is object!', () => expect(isObject([])).to.be.true);
    it('Should return `false`, string is not object!', () => expect(isObject('')).to.be.false);
    it('Should return `false`, number is not object!', () => expect(isObject(0)).to.be.false);
    it('Should return `false`, boolean is not object!', () => expect(isObject(true)).to.be.false);
    it('Should return `false`, null is not object!', () => expect(isObject(null)).to.be.false);
    it('Should return `false`, undefined is not object!', () => expect(isObject(undefined)).to.be.false);
  });

  describe('#isFunction', () => {
    it('Should return `true`, function is function!', () => expect(isFunction(() => {})).to.be.true);
    it('Should return `false`, object is not function!', () => expect(isFunction({})).to.be.false);
    it('Should return `false`, array is not function!', () => expect(isFunction([])).to.be.false);
    it('Should return `false`, string is not function!', () => expect(isObject('')).to.be.false);
    it('Should return `false`, number is not function!', () => expect(isObject(0)).to.be.false);
    it('Should return `false`, boolean is not function!', () => expect(isObject(true)).to.be.false);
    it('Should return `false`, null is not function!', () => expect(isObject(null)).to.be.false);
    it('Should return `false`, undefined is not function!', () => expect(isObject(undefined)).to.be.false);
  });

  describe('#isEmptyArray', () => {
    it('Should return `true` if value is empty array!', () => expect(isEmptyArray([])).to.be.true);
    it('Should return `false` if value is not empty array!', () => expect(isEmptyArray([1, 2, 3])).to.be.false);
  });

  describe('#isEmptyObject', () => {
    it('Should return `true` if empty object is empty object!', () => expect(isEmptyObject({})).to.be.true);
    it('Should return `false` if null is not empty object!', () => expect(isEmptyObject(null)).to.be.false);
    it('Should return `false` if array is not empty object!', () => expect(isEmptyObject([])).to.be.false);
    it('Should return `false` if value is not empty object!', () => expect(isEmptyObject({ key: 'value' })).to.be.false);
  });
});
