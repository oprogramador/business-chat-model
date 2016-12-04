import {
  InvalidInstanceError,
  Message,
  Room,
  Team,
  User,
  ValidationError,
} from 'business-chat-model/index';
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

  it('returns InvalidInstanceError', () => {
    expect(InvalidInstanceError).to.equal(directInvalidInstanceError);
  });

  it('returns ValidationError', () => {
    expect(ValidationError).to.equal(directValidationError);
  });
});
