import React from "react";
import UserRow from "./userRow";

const UserList = ({ users }) => {
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Username</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => <UserRow user={user} />)}
        </tbody>
      </table>
    </>
  )
}

export default UserList;