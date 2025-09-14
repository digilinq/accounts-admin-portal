import React, { useState } from "react";

const UserEntry = ({ save, cancel }) => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    save({ email, password, confirmPassword });
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input type="text" className="form-control" id="email" value={email}
          onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input type="password" className="form-control" id="password" value={password}
          onChange={(e) => setPassword(e.target.value)} />
      </div>
      <div className="form-group">
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input type="password" className="form-control" id="confirmPassword" value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)} />
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
      <button type="button" className="btn btn-secondary" onClick={cancel}>Cancel</button>
    </form>
  )
}

export default UserEntry;
