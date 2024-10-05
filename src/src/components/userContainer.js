import React from "react";
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
  
}

const UserContainer = () => {
  return (
    <>
      <UserList users={users} />
      <UserEntry save={saveUser} />
    </>
  )
}

export default UserContainer;