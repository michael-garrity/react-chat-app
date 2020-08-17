import React from 'react';
import moment from 'moment';
import { Comment, Image } from 'semantic-ui-react';

const isOwnMessage = (message, user) => {
  return message.user.id === user.uid ? 'message__self' : '';
};

const isImage = (message) => {
  return message.hasOwnProperty('image') && !message.hasOwnProperty('content');
};

const timeFromNow = (timestamp) => moment(timestamp).fromNow();

const Message = ({ message, user }) => (
  <Comment>
    <Comment.Avatar src={message.user.avatar} />
    <Comment.Content className={isOwnMessage(message, user)}>
      <Comment.Author as='a' style={{ color: 'rgba(255, 255, 255, 0.4)' }}>
        {message.user.name}
      </Comment.Author>
      <Comment.Metadata style={{ color: 'rgba(255, 255, 255, 0.4)' }}>
        {timeFromNow(message.timestamp)}
      </Comment.Metadata>
      {isImage(message) ? (
        <Image src={message.image} className='message__image' />
      ) : (
        <Comment.Text style={{ color: 'rgba(255, 255, 255, 0.6)' }}>
          {message.content}
        </Comment.Text>
      )}
    </Comment.Content>
  </Comment>
);

export default Message;
