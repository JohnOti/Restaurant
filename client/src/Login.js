import React, { useState } from 'react';
import { BrowserRouter, Link } from "react-router-dom";

function Login({onLogin}) {
  
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setErrors] = useState([]);


  function handleSubmit(e) {
    e.preventDefault();
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    })
      .then((res) => {
      console.log(res)
      if (res.ok) {
        res.json().then((user) => {
          onLogin(user);
        });
      } else {
        res.json().then((err) => {
          console.log(err.errors);
          setErrors(err.errors);
        });
      }
    });
  }

  return (
    <div className="login">
      <form className="forms" onSubmit={handleSubmit}>
        <h1 id="user">User Login</h1>
        <label>Username</label>
        <input
          type="text"
          className="form"
          placeholder="username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <label>Password</label>
        <input
          type="password"
          className="form"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <br />
        <button className="btn" type="submit">
          Login
        </button>
      </form>
      <h2>
        Don't have an account?
        <BrowserRouter>
          <Link to="/register">Register</Link>
        </BrowserRouter>
      </h2>

      <div>
        {error.map((er) => (
          <h2 key={er}>{er}!</h2>
        ))}
      </div>
    </div>
  );
}

export default Login