import React from 'react';
import ChatMessage from './ChatMessage.jsx';
import ChatInput from './ChatInput.jsx';

import { Link } from 'react-router-dom';

const Messages = ({ messages, message, sendMessage, setMessage, leftParty }) => {
  return (
    <div className="container">
     <div className="row d-flex message-container overflow:auto">
      <ChatMessage messages={messages} />
      </div>
      <ChatInput message={message} sendMessage={sendMessage} setMessage={setMessage} />
      <Link to={{ pathname: '/parties' }}>
        <button type="button" className="btn btn-primary" onClick={leftParty}>Leave Party</button>
      </Link>
    </div>
  );
}

export default Messages;
