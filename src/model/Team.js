import ITeam from 'business-chat-model/abstract/ITeam';
import ValidationError from 'business-chat-model/errors/ValidationError';
import assertType from 'business-chat-model/typeChecking/assertType';

export default class Team {
  constructor({ name }) {
    this.validate({ name });
    this.name = name;
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
}
