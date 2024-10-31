import React, { useEffect, useState } from "react";
import UserList from "./userList";
import UserEntry from "./userEntry";
import { httpGet, httpPost, httpDelete } from "../services/http";

const UserContainer = () => {
  const [users, setUsers] = useState([]);
  const [view, setView] = useState('list');

  useEffect(() => {
    httpGet("http://localhost:8080/v1/users").then(data => {
      console.log(data);
      setUsers(data);
    });
  }, []);

  const saveUser = (user) => {
    console.log("save user " + user.email);
    httpPost("http://localhost:8080/signup", user).then(
      setUsers([...users, user])
    );
    setView('list');
  }

  const removeUser = (user) => {
    console.log("remove user " + user.id);
    httpDelete("http://localhost:8080/v1/users/" + user.id).then(      
      setUsers(users.filter(u => u.id !== user.id))
    );
  } 
  
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