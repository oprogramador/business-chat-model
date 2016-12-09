import {
  IMessage,
  IRoom,
  ITeam,
  IUser,
  InvalidInstanceError,
  Message,
  Room,
  Team,
  User,
  ValidationError,
} from 'business-chat-model/index';
import directIMessage from 'business-chat-model/abstract/IMessage';
import directIRoom from 'business-chat-model/abstract/IRoom';
import directITeam from 'business-chat-model/abstract/ITeam';
import directIUser from 'business-chat-model/abstract/IUser';
import directInvalidInstanceError from 'business-chat-model/errors/InvalidInstanceError';
import directMessage from 'business-chat-model/model/Message';
import directRoom from 'business-chat-model/model/Room';
import directTeam from 'business-chat-model/model/Team';
import directUser from 'business-chat-model/model/User';
import directValidationError from 'business-chat-model/errors/ValidationError';
import expect from 'business-chat-model/tests/expect';

describe('index', () => {
  it('returns Message', () => {
    expect(Message).to.equal(directMessage);
  });

  it('returns Room', () => {
    expect(Room).to.equal(directRoom);
  });

  it('returns Team', () => {
    expect(Team).to.equal(directTeam);
  });

  it('returns User', () => {
    expect(User).to.equal(directUser);
  });

  it('returns IMessage', () => {
    expect(IMessage).to.equal(directIMessage);
  });

  it('returns IRoom', () => {
    expect(IRoom).to.equal(directIRoom);
  });

  it('returns ITeam', () => {
    expect(ITeam).to.equal(directITeam);
  });

  it('returns IUser', () => {
    expect(IUser).to.equal(directIUser);
  });

  it('returns InvalidInstanceError', () => {
    expect(InvalidInstanceError).to.equal(directInvalidInstanceError);
  });

  it('returns ValidationError', () => {
    expect(ValidationError).to.equal(directValidationError);
  });
});
