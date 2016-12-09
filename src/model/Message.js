import IMessage from 'business-chat-model/abstract/IMessage';
import IRoom from 'business-chat-model/abstract/IRoom';
import IUser from 'business-chat-model/abstract/IUser';
import assertInterface from 'business-chat-model/typeChecking/assertInterface';
import assertType from 'business-chat-model/typeChecking/assertType';

export default class Message {
  constructor({ room, sender, text }) {
    this.validate({ room, sender, text });
    this.room = room;
    this.sender = sender;
    this.text = text;
    this.createdAt = Date.now();

    room.addMessage(this);
  }

  getInterfaces() {
    return [
      IMessage,
    ];
  }

  validate({ room, sender, text }) {
    assertInterface(room, IRoom);
    assertInterface(sender, IUser);
    assertType(text, 'string');
  }

  getText() {
    return this.text;
  }

  getSender() {
    return this.sender;
  }

  getCreatedAt() {
    return this.createdAt;
  }

  getRoom() {
    return this.room;
  }
}
