import React, { useState } from "react";
import UserList from "./userList";
import UserEntry from "./userEntry";

const users = [
  {
    id: 1,
    username: "hmohammadi",
    email: "hossein.mohammadi@outlook.com"
  }
]

const saveUser = (user) => {
  console.log("save user " + user.email);
}

const removeUser = (user) => {
  console.log("remove user " + user.id);
}

const UserContainer = () => {
  const [view, setView] = useState('list');

  const selected = () => {
    switch (view) {
      case 'list':
        return <UserList users={users} onAdd={() => setView('entry')} onRemove={removeUser} />;
      case 'entry':
        return <UserEntry save={saveUser} cancel={() => setView('list')} />;
      default:
        return null;
    }
  }

  return (
    <div className="container">
      {selected()}
    </div>
  )
}

export default UserContainer;