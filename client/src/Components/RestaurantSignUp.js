import React, { useState } from 'react';

const RestaurantSignUp = ({ location, onLogin }) => {
    const [error, setErrors] = useState([]);
    const [restaurant_data, setRestaurantdata] = useState({
      name: "",
      email: "",
      image: "",
      location_id: "",
      password: "",
      password_confirmation: "",
    });

    const locationList = location.map((loc) => (
        <option name="location_id" value={loc.id} key={loc.id}>
          {loc.city}
        </option>
      ));

    function handleChange(e) {
        e.preventDefault();
        setRestaurantdata({
            ...restaurant_data,
            [e.target.name]:e.target.value
        })
    }

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/favorite_restaurants", {
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
      <form className="form" onSubmit={handleSubmit} style={{
        display:"grid"
      }}>
        <h1 id="user">User Registration</h1>
        <label>Restaurant Name</label>
        <input
          type="text"
          placeholder="add name"
          name="name"
          value={restaurant_data.name}
          onChange={handleChange}
        />
        <label>Email</label>
        <input
          type="url"
          placeholder="email"
          name="email"
          value={restaurant_data.email}
          onChange={handleChange}
        />
        <label>Image</label>
        <input
          type="url"
          placeholder="add image"
          name="image"
          value={restaurant_data.image}
          onChange={handleChange}
        />
        <label>City</label>
        <select name="location" onChange={handleChange}>
          <option value="All">--Select city--</option>
          {locationList}
        </select>
        <label>Password</label>
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={restaurant_data.password}
          onChange={handleChange}
        />
        <label>Confirm Password</label>
        <input
          type="password"
          placeholder="Confirm Password"
          name="confirm_password"
          onChange={handleChange}
        />
        <br />
        <br />
        <button className="btn" type="submit">
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


export default RestaurantSignUp;
