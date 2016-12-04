import InvalidInstanceError from 'business-chat-model/errors/InvalidInstanceError';
import Room from 'business-chat-model/model/Room';
import User from 'business-chat-model/model/User';
import ValidationError from 'business-chat-model/errors/ValidationError';
import expect from 'business-chat-model/tests/expect';
import sinon from 'sinon';

let sandbox;

describe('Room', () => {
  beforeEach('create sandbox', () => {
    sandbox = sinon.sandbox.create();
  });

  afterEach('restore sandbox', () => {
    sandbox.restore();
  });

  it('throws ValidationError when provided team name is neither string nor undefined', () => {
    expect(() => new Room({ name: 123 })).to.throw(ValidationError);
  });

  it('throws ValidationError when provided team name is an empty string', () => {
    expect(() => new Room({ name: '' })).to.throw(ValidationError);
  });

  it('succeeds when provided team name is valid', () => {
    expect(() => new Room({ name: 'foo' })).to.not.throw(Error);
  });

  it('calls `validate` with the same arguments', () => {
    const validate = sandbox.spy(Room.prototype, 'validate');
    const object = { name: 'bar' };
    // eslint-disable-next-line no-new
    new Room(object);
    expect(validate.withArgs(object)).to.be.calledOnce();
  });

  it('assigns name when it is string', () => {
    const object = new Room({ name: 'foo-bar' });
    expect(object.getName()).to.equal('foo-bar');
  });

  it('assigns name when it is undefined', () => {
    const object = new Room({});
    expect(object.getName()).to.be.undefined();
  });

  it('adds user', () => {
    const room = new Room({});
    const user = new User({ username: 'alicia' });
    room.addUser(user);
    const users = room.getUsers();

    expect(users).to.have.length(1);
    expect(users[0]).to.equal(user);
  });

  describe('#addUser', () => {
    it('throws InvalidInstanceError for object not being instance of User', () => {
      const room = new Room({});
      expect(() => room.addUser({})).to.throw(InvalidInstanceError);
    });
  });
});
