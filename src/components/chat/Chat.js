import React, {useContext} from 'react';
import ConversationList from './ConversationList';
import MessageList from './MessageList';
import '../../styles/Chat.css';
import Context from "../Context";

export default function Chat(props) {
    const {slideState} = useContext(Context)
    return (
      <div className="messenger">

        <div className="scrollable sidebar" id={slideState ? 'sidebar' : ''}>
          <ConversationList />
        </div>

        <div className="scrollable content" >
          <MessageList />
        </div>
      </div>
    );
}