import React from 'react'
import background from './assets/collin-armstrong-SR0_MNa77MU-unsplash.jpg'

function Login() {
  return (
    <div
      className="login"
      style={{
        backgroundImage: `url(${background})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "800px"
      }}
    >
      <form className="forms">
        <h1 id="user">User Login</h1>
        <label>Username</label>
        <input type="text" className="form" placeholder="username" />
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