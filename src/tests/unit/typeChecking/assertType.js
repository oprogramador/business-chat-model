import ValidationError from 'business-chat-model/errors/ValidationError';
import assertType from 'business-chat-model/typeChecking/assertType';
import expect from 'business-chat-model/tests/expect';

describe('assertType', () => {
  it('throws ValidationError for invalid type', () => {
    class IFoo {
    }
    class IBar {
    }
    const object = {
      getInterfaces() {
        return [IFoo];
      },
    };

    expect(() => assertType(object, IBar)).to.throw(ValidationError);
  });

  it('returns null for valid type', () => {
    class IFoo {
    }
    const object = {
      getInterfaces() {
        return [IFoo];
      },
    };

    expect(assertType(object, IFoo)).to.be.null();
  });
});

