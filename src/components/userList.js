import React from "react";
import UserRow from "./userRow";

const UserList = ({ users, onRemove, onAdd }) => {
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
          {users.map(user => <UserRow key={user.id} user={user} onRemove={() => onRemove(user)} />)}
        </tbody>
      </table>
      <button className="btn btn-primary" onClick={onAdd}>Add</button>
    </>
  )
}

export default UserList;