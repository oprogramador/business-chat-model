import ITeam from 'business-chat-model/abstract/ITeam';
import Room from 'business-chat-model/model/Room';
import Team from 'business-chat-model/model/Team';
import User from 'business-chat-model/model/User';
import ValidationError from 'business-chat-model/errors/ValidationError';
import expect from 'business-chat-model/tests/expect';
import sinon from 'sinon';

let sandbox;

describe('Team', () => {
  beforeEach('create sandbox', () => {
    sandbox = sinon.sandbox.create();
  });

  afterEach('restore sandbox', () => {
    sandbox.restore();
  });

  describe('#getInterfaces', () => {
    it('includes ITeam', () => {
      const team = new Team({ name: 'foo' });

      expect(team.getInterfaces()).to.include(ITeam);
    });
  });

  it('throws ValidationError when provided team name is not a string', () => {
    expect(() => new Team({ name: 123 })).to.throw(ValidationError);
  });

  it('throws ValidationError when provided team name is an empty string', () => {
    expect(() => new Team({ name: '' })).to.throw(ValidationError);
  });

  it('succeeds when provided team name is valid', () => {
    expect(() => new Team({ name: 'foo' })).to.not.throw(Error);
  });

  it('calls `validate` with the same arguments', () => {
    const validate = sandbox.spy(Team.prototype, 'validate');
    const object = { name: 'bar' };
    // eslint-disable-next-line no-new
    new Team(object);
    expect(validate.withArgs(object)).to.be.calledOnce();
  });

  it('assigns name', () => {
    const object = new Team({ name: 'foo-bar' });
    expect(object.getName()).to.equal('foo-bar');
  });

  it('adds user', () => {
    const room = new Room({});
    const user = new User({ username: 'alicia' });
    room.addUser(user);
    const users = room.getUsers();

    expect(users).to.have.length(1);
    expect(users[0]).to.equal(user);
  });

  it('adds room', () => {
    const team = new Team({ name: 'foo' });
    const room = new Room({ name: 'bar' });
    team.addRoom(room);
    const rooms = team.getRooms();

    expect(rooms).to.have.length(1);
    expect(rooms[0]).to.equal(room);
  });
});
