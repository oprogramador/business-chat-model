import IRoom from 'business-chat-model/abstract/IRoom';
import ValidationError from 'business-chat-model/errors/ValidationError';

export default class Room {
  constructor({ name }) {
    this.validate({ name });
    this.name = name;
    this.users = [];
    this.messages = [];
  }

  getInterfaces() {
    return [
      IRoom,
    ];
  }

  validate({ name }) {
    if (typeof name !== 'string' && typeof name !== 'undefined') {
      throw new ValidationError();
    }
    if (name === '') {
      throw new ValidationError();
    }
  }

  getName() {
    return this.name;
  }

  addUser(user) {
    this.users.push(user);
  }

  addMessage(message) {
    this.messages.push(message);
  }

  getUsers() {
    return this.users;
  }

  getMessages() {
    return this.messages;
  }
}
