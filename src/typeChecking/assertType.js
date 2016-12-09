import ValidationError from 'business-chat-model/errors/ValidationError';

export default (object, type) => {
  // eslint-disable-next-line valid-typeof
  if (typeof object !== type) {
    throw new ValidationError();
  }

  return null;
};
