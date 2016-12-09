import IMessage from 'business-chat-model/abstract/IMessage';
import IRoom from 'business-chat-model/abstract/IRoom';
import IUser from 'business-chat-model/abstract/IUser';
import ValidationError from 'business-chat-model/errors/ValidationError';
import _ from 'lodash';
import assertInterface from 'business-chat-model/typeChecking/assertInterface';

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
    assertInterface(user, IUser);
    this.users.push(user);
  }

  addMessage(message) {
    assertInterface(message, IMessage);
    this.messages.push(message);
  }

  getUsers() {
    return _.clone(this.users);
  }

  getMessages() {
    return _.clone(this.messages);
  }
}
