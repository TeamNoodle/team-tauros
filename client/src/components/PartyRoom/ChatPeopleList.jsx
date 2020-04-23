import React, { useState } from 'react';

const ChatPeopleList = ({ users, username }) => {

  const [flag, setFlag] = useState(false);

  const showCharacter = (e) => {
    e.preventDefault();
    if (!flag) {
      setFlag(true);
    } else {
      setFlag(false);
    }
  }

  return (
    <div>
      <h3>Current Party-ers:</h3>

      {users.map(user => <div key={user.id}>{user.name} {

        flag && username !== user.name ? user.character : null

      } </div>)}

      <a href="https://icebreakerideas.com/who-am-i-game/" target="_blank"><h3>Game Rules:</h3></a>
      <p> Ask questions to guess your character!</p>

      <button type="button" onClick={showCharacter}>Play Game</button>

    <div className="container-fluid">
      <div className="row">
        <h3 className="partiers">Guest List:</h3>
      <div className="container-fluid guest-list" >
        {users.map(user => <div key={user.id}>{user.name}</div>)}
      </div>
      </div>
    </div>

  );
}

export default ChatPeopleList;
