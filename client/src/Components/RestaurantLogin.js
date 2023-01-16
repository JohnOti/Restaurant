import React, {useState} from "react";

const RestaurantLogin = ({onLogin}) => {

    const [restaurantName, setRestaurnant] = useState("");
    const [password, setPassword] = useState("");
    const [error, setErrors] = useState([]);
    
    function handleSubmit(e) {
        e.preventDefault();
        fetch("/restaurant_login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        body: JSON.stringify({
            restaurantName,
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
        <h1 id="user">Restaurant Login</h1>
        <label>Restaurant Name</label>
        <input
          type="text"
          className="form"
          placeholder="name..."
          value={restaurantName}
          onChange={(e) => setRestaurnant(e.target.value)}
        />
        <label>Password</label>
        <input
          type="password"
          className="form"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <br />
        <button className="btn" type="submit">
          Login
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

export default RestaurantLogin;