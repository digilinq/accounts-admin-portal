import React from "react";

const UserRow = ({user, onRemove}) => {
  return <tr>
    <td>{user.id}</td>
    <td>{user.username}</td>
    <td>{user.email}</td>
    <td>
        <button className="btn btn-danger" onClick={() => onRemove(user.id)}>Delete</button>
    </td>
  </tr>
}

export default UserRow;