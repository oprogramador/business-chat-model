import IUser from 'business-chat-model/abstract/IUser';
import User from 'business-chat-model/model/User';
import ValidationError from 'business-chat-model/errors/ValidationError';
import expect from 'business-chat-model/tests/expect';
import sinon from 'sinon';

let sandbox;

describe('User', () => {
  beforeEach('create sandbox', () => {
    sandbox = sinon.sandbox.create();
  });

  afterEach('restore sandbox', () => {
    sandbox.restore();
  });

  describe('#getInterfaces', () => {
    it('includes IUser', () => {
      const user = new User({ username: 'foo' });

      expect(user.getInterfaces()).to.include(IUser);
    });
  });

  it('throws ValidationError when provided username is not a string', () => {
    expect(() => new User({ username: 123 })).to.throw(ValidationError);
  });

  it('throws ValidationError when provided username is an empty string', () => {
    expect(() => new User({ username: '' })).to.throw(ValidationError);
  });

  it('succeeds when provided username is valid', () => {
    expect(() => new User({ username: 'foo' })).to.not.throw(Error);
  });

  it('calls `validate` with the same arguments', () => {
    const validate = sandbox.spy(User.prototype, 'validate');
    const object = { username: 'bar' };
    // eslint-disable-next-line no-new
    new User(object);
    expect(validate.withArgs(object)).to.be.calledOnce();
  });

  it('assigns username', () => {
    const object = new User({ username: 'foo-bar' });
    expect(object.getUsername()).to.equal('foo-bar');
  });
});
