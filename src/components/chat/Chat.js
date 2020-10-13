import React from 'react';
import ConversationList from './ConversationList';
import MessageList from './MessageList';
import '../../styles/Chat.css';

export default function Chat(props) {
    return (
      <div className="messenger">
        <div className="scrollable sidebar">
          <ConversationList />
        </div>

        <div className="scrollable content">
          <MessageList />
        </div>
      </div>
    );
}