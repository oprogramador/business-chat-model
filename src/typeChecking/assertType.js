import ValidationError from 'business-chat-model/errors/ValidationError';
import doesImplement from 'business-chat-model/typeChecking/doesImplement';

export default (object, anInterface) => {
  if (!doesImplement(object, anInterface)) {
    throw new ValidationError();
  }

  return null;
};
