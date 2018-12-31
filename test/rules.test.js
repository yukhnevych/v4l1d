import { expect } from 'chai';
import { rules } from '../dist';

const { required, email, limit } = rules;

describe('Rules', () => {

  describe('#addRule', () => {
    const methodName = 'greaterThan';
    it('Should add new rule to rules object!', () => expect(
      rules.addRule(
        methodName, 
        (data, value) => data > value, 
        value => `The value is less or equal than ${value}!`
      )
    ).to.be.an('undefined'));

    it(`Rules object should have ${methodName} method!`, () => expect(rules).to.have.own.property(methodName));

    it('Should be true when passed value is greater!', () => expect(rules[methodName](10)(11)).to.be.true);
    it('Should return error message when passed value is lesser!', () => expect(rules[methodName](10)(9)).to.be.a('string'));
  });
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
