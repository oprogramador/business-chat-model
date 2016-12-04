import ValidationError from 'business-chat-model/errors/ValidationError';

export default class Team {
  constructor({ name }) {
    this.validate({ name });
    this.name = name;
  }

  validate({ name }) {
    if (typeof name !== 'string') {
      throw new ValidationError();
    }
    if (name === '') {
      throw new ValidationError();
    }
  }

  getName() {
    return this.name;
  }
}
