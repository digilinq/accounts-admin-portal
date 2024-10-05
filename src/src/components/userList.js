import React from "react";
import UserRow from "./userRow";

const UserList = ({ users, remove }) => {
  return (
    <>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>ID</th>
            <th>Username</th>
            <th>Email</th>
            <th>Options</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => <UserRow user={user} onRemove={remove} />)}
        </tbody>
      </table>
    </>
  )
}

export default UserList;