import InvalidInstanceError from 'business-chat-model/errors/InvalidInstanceError';
import Message from 'business-chat-model/model/Message';
import User from 'business-chat-model/model/User';
import ValidationError from 'business-chat-model/errors/ValidationError';
import _ from 'lodash';

export default class Room {
  constructor({ name }) {
    this.validate({ name });
    this.name = name;
    this.users = [];
    this.messages = [];
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
    if (!(user instanceof User)) {
      throw new InvalidInstanceError();
    }
    this.users.push(user);
  }

  addMessage(message) {
    if (!(message instanceof Message)) {
      throw new InvalidInstanceError();
    }
    this.messages.push(message);
  }

  getUsers() {
    return _.clone(this.users);
  }

  getMessages() {
    return _.clone(this.messages);
  }
}
