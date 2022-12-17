import React, { useState } from 'react'

function Register() {
  const [userData, setUserData] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    confirm_password: ""
  })

  const handleChange = (e) => {
    e.preventDefault()
    setUserData({
      ...userData,
      [e.target.name]:e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    fetch("/customers",{
        method: "POST",
        headers:{
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData)
      })

      setUserData({
        name: "",
        username: "",
        email: "",
        password: "",
        confirm_password: ""
      })
  }
  return (
    <div>
      <form className="forms" onSubmit={handleSubmit}>
        <h1 id='user'>User Registration</h1>
        <label>Name</label>
        <input type="text" className="form" placeholder="Name" name="name" value={userData.name} onChange={handleChange}/>
        <label>Username</label>
        <input type="text" className="form" placeholder="Username" name="username" value={userData.username} onChange={handleChange}/>
        <label>Email</label>
        <input type="email" className="form" placeholder="email" name="email" value={userData.email} onChange={handleChange}/>
        <label>Password</label>
        <input type="password" className="form" placeholder="Password" name="password" value={userData.password} onChange={handleChange}/>
        <label>Confirm Password</label>
        <input
          type="password"
          className="form"
          placeholder="Confirm Password"
          name='confirm_password'
          value={userData.confirm_password}
          onChange={handleChange}/>
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