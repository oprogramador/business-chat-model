import doesImplement from 'business-chat-model/typeChecking/doesImplement';
import expect from 'business-chat-model/tests/expect';

describe('doesImplement', () => {
  it('returns true when object implements given interface', () => {
    class IFoo {
    }
    const object = {
      getInterfaces() {
        return [IFoo];
      },
    };

    expect(doesImplement(object, IFoo)).to.be.true();
  });

  it('returns false when object does not implement given interface', () => {
    class IFoo {
    }
    class IBar {
    }
    const object = {
      getInterfaces() {
        return [IFoo];
      },
    };

    expect(doesImplement(object, IBar)).to.be.false();
  });

  it('returns false when getInterfaces returns not an array', () => {
    class IFoo {
    }
    const object = {
      getInterfaces() {
        return null;
      },
    };

    expect(doesImplement(object, IFoo)).to.be.false();
  });

  it('returns false when object has no `getInterfaces` method', () => {
    class IFoo {
    }
    const object = {
    };

    expect(doesImplement(object, IFoo)).to.be.false();
  });
});
