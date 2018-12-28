import { expect } from 'chai';
import valli from '../src';

const { all, bail, required, email, limit } = valli.rules;
const validate = valli.validate;

describe('validate', () => {
  describe('#object', () => {
    const shape = {
      name: all(required(), limit(5)),
      email: bail(required(), email())
    };

    it('Should return void when data is valid!', () => expect(validate(shape, {
      name: 'John',
      email: 'john@test.com'
    })).to.be.an('undefined'));

    it('Should return email error!', () => expect(validate(shape, {
      name: 'John',
      email: ''
    })).to.have.property('email'));
  });

  describe('#deep-object', () => {
    const shape = {
      name: {
        first: bail(required(), limit(5)),
        last: bail(required(), limit(7))
      },
      address: {
        
      }
    };

    it('Should return void when data is valid!', () => expect(validate(shape, {
      name: 'John',
      email: 'john@test.com'
    })).to.be.an('undefined'));

    it('Should return email error!', () => expect(validate(shape, {
      name: 'John',
      email: ''
    })).to.have.property('email'));
  });

  describe('#array', () => {
    const shape = [bail(required(), limit(5))];

    it('Should return void when data is valid!', () => expect(
      validate(shape, ['John', 'Jane'])
    ).to.be.an('undefined'));
  });
});