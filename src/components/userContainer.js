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

  const isShowList = view === 'list';
  const isShowEntry = view === 'entry';

  return (
    <div className="container">
      {isShowList &&
        <UserList users={users} onAdd={() => setView('entry')} onRemove={removeUser} />}
      {isShowEntry &&
        <UserEntry save={saveUser} cancel={() => setView('list')} />}
    </div>
  )
}

export default UserContainer;