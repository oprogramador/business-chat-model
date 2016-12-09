import InvalidInstanceError from 'business-chat-model/errors/InvalidInstanceError';
import doesImplement from 'business-chat-model/typeChecking/doesImplement';

export default (object, anInterface) => {
  if (!doesImplement(object, anInterface)) {
    throw new InvalidInstanceError();
  }

  return null;
};
