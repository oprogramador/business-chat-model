import ValidationError from 'business-chat-model/errors/ValidationError';
import assertType from 'business-chat-model/typeChecking/assertType';
import expect from 'business-chat-model/tests/expect';

describe('assertType', () => {
  it('throws ValidationError for invalid type', () => {
    expect(() => assertType('foo', 'number')).to.throw(ValidationError);
  });

  it('returns null for valid type', () => {
    expect(assertType('foo', 'string')).to.be.null();
  });
});

