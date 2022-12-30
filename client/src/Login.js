import React from 'react'
// import background from './assets/collin-armstrong-SR0_MNa77MU-unsplash.jpg'

function Login() {
  return (
    <div className="login">
      <form className="forms">
        <h1 id="user">User Login</h1>
        <label>Email</label>
        <input type="email" className="form" placeholder="email" />
        <label>Password</label>
        <input type="password" className="form" placeholder="Password" />
        <br />
        <br />
        <button className="btn" type="submit">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login