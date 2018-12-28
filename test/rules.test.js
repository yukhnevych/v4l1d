import { expect } from 'chai';
import { v4l1d } from '../dist/index';

const { required, email, limit } = v4l1d.rules;

describe('Rules', () => {
  describe('#required', () => {
    const customMessage = 'The value is required!';
    it('Should return `true` if value is not empty!', () => expect(required()('Test value')).to.be.true);
    it('Should return error message!', () => expect(required()()).to.be.a('string'));
    it('Should return custom error message!', () => expect(required(customMessage)()).to.equal(customMessage));
  });

  describe('#email', () => {
    const customMessage = 'The value in not an email!';
    it('Should return `true` if value is email!', () => expect(email()('john.doe@test.com')).to.be.true);
    it('Should return error message!', () => expect(email()('john.doe.test.com')).to.be.a('string'));
    it('Should return custom error message!', () => expect(email(customMessage)('john.doe.test.com')).to.equal(customMessage));
  });

  describe('#limit', () => {    
    it('Should throw an error when no arguments passed!', () => expect(limit).to.throw(TypeError));
    it('Should return `true` when the value is within the limit!', () => expect(limit(15)('Hello World!')).to.be.true);
    it('Should return `false` when the value is beyond the limit!', () => expect(limit(10)('Hello World!')).to.be.a('string'));
  });
});
