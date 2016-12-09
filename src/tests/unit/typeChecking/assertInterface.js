import InvalidInstanceError from 'business-chat-model/errors/InvalidInstanceError';
import assertInterface from 'business-chat-model/typeChecking/assertInterface';
import expect from 'business-chat-model/tests/expect';

describe('assertInterface', () => {
  it('throws InvalidInstanceError for invalid type', () => {
    class IFoo {
    }
    class IBar {
    }
    const object = {
      getInterfaces() {
        return [IFoo];
      },
    };

    expect(() => assertInterface(object, IBar)).to.throw(InvalidInstanceError);
  });

  it('returns null for valid type', () => {
    class IFoo {
    }
    const object = {
      getInterfaces() {
        return [IFoo];
      },
    };

    expect(assertInterface(object, IFoo)).to.be.null();
  });
});

