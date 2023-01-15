import React, { useState } from 'react'

function Register({onLogin}) {

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordconfirmation, setPasswordConfirmation] = useState("");
  const [error, setErrors] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/customers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        username,
        email,
        password,
        password_confirmation: passwordconfirmation,
      }),
    }).then((res) => {
      if (res.ok) {
        res.json().then((user) => onLogin(user));
      } else {
        res.json().then((err) => {
          console.log(err.errors);
          setErrors(err.errors)
        });
      }
    });
  }
  

  return (
    <div>
      <form className="forms" onSubmit={handleSubmit}>
        <h1 id="user">User Registration</h1>
        <label>Username</label>
        <input
          type="text"
          className="form"
          placeholder="Username"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label>Email</label>
        <input
          type="email"
          className="form"
          placeholder="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Password</label>
        <input
          type="password"
          className="form"
          placeholder="Password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <label>Confirm Password</label>
        <input
          type="password"
          className="form"
          placeholder="Confirm Password"
          name="confirm_password"
          onChange={(e) => setPasswordConfirmation(e.target.value)}
        />
        <br />
        <br />
        <button type="submit">
          Sign Up
        </button>
      </form>
      <div>
        {error.map((er) => (
          <h2 key={er}>{er}!</h2>
        ))}
      </div>
    </div>
  );
}

export default Register