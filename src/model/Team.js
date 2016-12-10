import ITeam from 'business-chat-model/abstract/ITeam';
import ValidationError from 'business-chat-model/errors/ValidationError';
import assertType from 'business-chat-model/typeChecking/assertType';

export default class Team {
  constructor({ name }) {
    this.validate({ name });
    this.name = name;
    this.rooms = [];
    this.users = [];
  }

  getInterfaces() {
    return [
      ITeam,
    ];
  }

  validate({ name }) {
    assertType(name, 'string');
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

  addRoom(room) {
    this.rooms.push(room);
  }

  getUsers() {
    return this.users;
  }

  getRooms() {
    return this.rooms;
  }
}
