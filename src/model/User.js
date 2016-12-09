import IUser from 'business-chat-model/abstract/IUser';
import ValidationError from 'business-chat-model/errors/ValidationError';
import assertType from 'business-chat-model/typeChecking/assertType';

export default class User {
  constructor({ username }) {
    this.validate({ username });
    this.username = username;
  }

  getInterfaces() {
    return [
      IUser,
    ];
  }

  validate({ username }) {
    assertType(username, 'string');
    if (username === '') {
      throw new ValidationError();
    }
  }

  getUsername() {
    return this.username;
  }
}
