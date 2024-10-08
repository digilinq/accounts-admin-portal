import React from "react";

const UserRow = ({user: {id, username, email}, onRemove}) => {
  return <tr>
    <td>{id}</td>
    <td>{username}</td>
    <td>{email}</td>
    <td>
        <button className="btn btn-danger" onClick={() => onRemove(id)}>Delete</button>
    </td>
  </tr>
}

export default UserRow;