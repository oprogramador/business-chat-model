import IUser from 'business-chat-model/abstract/IUser';
import ValidationError from 'business-chat-model/errors/ValidationError';

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
    if (typeof username !== 'string') {
      throw new ValidationError();
    }
    if (username === '') {
      throw new ValidationError();
    }
  }

  getUsername() {
    return this.username;
  }
}
