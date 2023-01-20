import React, { useState } from 'react';

const RestaurantSignUp = ({ location, onLogin }) => {
  const [error, setErrors] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [image, setImage] = useState("");
  const [location_id, setLocation_id] = useState("");
  const [password, setPassword] = useState("");
  const [passwordconfirmation, setPasswordConfirmation] = useState("");
    // const [restaurant_data, setRestaurantdata] = useState({
    //   name: "",
    //   email: "",
    //   image: "",
    //   location_id: "",
    //   password: "",
    //   confirm_password: "",
    // });

    const locationList = location.map((loc) => (
      <option name="location_id" value={parseInt(loc.id)} key={loc.id}>
        {loc.city}
      </option>
    ));

    // function handleChange(e) {
    //   e.preventDefault();
    //   console.log(e.target.value)
    //     setRestaurantdata({
    //         ...restaurant_data,
    //         [e.target.name]:e.target.value
    //     })
    // }

  function handleSubmit(e) {
    e.preventDefault();
    fetch("http://localhost:3000/favorite_restaurants", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // Accept: "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        image,
        location_id,
        password,
        password_confirmation: passwordconfirmation,
      }),
    }).then((res) => {
      if (res.ok) {
        res.json().then((user) => onLogin(user))
          return("/admin");
      } else {
        res.json().then((err) => {
          console.log(err.errors);
          setErrors(err.errors);
        });
      }
    });
  }
    // console.log(restaurant_data)
  return (
    <div>
      <form className="forms" onSubmit={handleSubmit}>
        <h2 id="user">Sign Up</h2>
        <label>Restaurant Name</label>
        <input
          className="inputs"
          type="text"
          placeholder="add name"
          name="name"
          // value={restaurant_data.name}
          onChange={(e) => setName(e.target.value)}
        />
        <label>Email</label>
        <input
          className="inputs"
          type="text"
          placeholder="email"
          name="email"
          // value={restaurant_data.email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Image</label>
        <input
          className="inputs"
          type="text"
          placeholder="add image"
          name="image"
          // value={restaurant_data.image}
          onChange={(e) => setImage(e.target.value)}
        />
        <label>City</label>
        <select
          name="location"
          onChange={(e) => setLocation_id(e.target.value)}
        >
          <option value="All">--Select city--</option>
          {locationList}
        </select>
        <label>Password</label>
        <input
          className="inputs"
          type="password"
          placeholder="Password"
          name="password"
          // value={restaurant_data.password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <label>Confirm Password</label>
        <input
          className="inputs"
          type="password"
          placeholder="Confirm Password"
          name="confirm_password"
          onChange={(e) => setPasswordConfirmation(e.target.value)}
        />
        <br />
        <br />
        <button className="btn-sec" type="submit">
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
