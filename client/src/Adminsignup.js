import React, { useState } from 'react';
import { Link } from "react-router-dom";


function Adminsignup({onLogin}) {
//   const [username, setUsername] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [passwordconfirmation, setPasswordConfirmation] = useState("");
    const [error, setErrors] = useState([]);
    
    const [restaurant_data, setRestaurantdata] = useState({
      name: "",
      password: "",
      password_confirmation: "",
    });

    function handleChange(e) {
        e.preventDefault();
        setRestaurantdata({
            ...restaurant_data,
            [e.target.name]:e.target.value
        })
    }

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/customers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        restaurant_data
      }),
    }).then((res) => {
      if (res.ok) {
        res.json().then((user) => onLogin(user));
      } else {
        res.json().then((err) => {
          console.log(err.errors);
          setErrors(err.errors);
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
          name="name"
          value={restaurant_data.name}
          onChange={handleChange}
        />
        <label>Email</label>
        <input
          type="url"
          className="form"
          placeholder="email"
          name="image"
          value={restaurant_data.image}
          onChange={handleChange}
        />
        <label>Location ID</label>
        <input
          type="number"
          className="form"
          placeholder="email"
          name="image"
          value={restaurant_data.location_id}
          onChange={handleChange}
        />
        <label>Password</label>
        <input
          type="password"
          className="form"
          placeholder="Password"
          name="password"
          value={restaurant_data.password}
          onChange={handleChange}
        />
        <label>Confirm Password</label>
        <input
          type="password"
          className="form"
          placeholder="Confirm Password"
          name="confirm_password"
          onChange={handleChange}
        />
        <br />
        <br />
        <button className="btn" type="submit">
          Register
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

export default Adminsignup;