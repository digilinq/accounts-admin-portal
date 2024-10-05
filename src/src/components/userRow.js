import React from "react";

const UserRow = ({user}) => {
  return <tr>
    <td>{user.id}</td>
    <td>{user.username}</td>
    <td>{user.email}</td>
  </tr>
}

export default UserRow;