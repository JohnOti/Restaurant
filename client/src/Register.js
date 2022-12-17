import React from 'react'

function Register() {
  return (
    <div>
      <form className="forms">
        <h1 id='user'>User Registration</h1>
        <label>Name</label>
        <input type="text" className="form" placeholder="Name" />
        <label>Username</label>
        <input type="text" className="form" placeholder="Username" />
        <label>Email</label>
        <input type="email" className="form" placeholder="email" />
        <label>Password</label>
        <input type="password" className="form" placeholder="Password" />
        <label>Confirm Password</label>
        <input
          type="password"
          className="form"
          placeholder="Confirm Password"
        />
        <br />
        <br />
        <button className="btn" type="submit">
          Register
        </button>
      </form>
    </div>
  );
}

export default Register