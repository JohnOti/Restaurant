import React, {useState} from "react";

const RestaurantLogin = ({onLogin}) => {

    const [name, setRestaurant] = useState("");
    const [password, setPassword] = useState("");
    const [error, setErrors] = useState([]);
    
    function handleSubmit(e) {
        e.preventDefault();
        fetch("http://localhost:3000/restaurant_login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            // Accept: "application/json",
          },
          body: JSON.stringify({
            name,
            password,
          }),
        }).then((res) => {
          console.log(res);
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
  console.log(name)
  console.log(password);

    return (
    <div className="login">
      <form className="forms" onSubmit={handleSubmit}>
        <h2 id="user">Restaurant Login</h2>
        <label>Restaurant Name</label>
        <input 
          type="text"
          className="inputs"
          placeholder="name..."
          value={name}
          onChange={(e) => setRestaurant(e.target.value)}
        />
        <label>Password</label>
        <input 
          type="password"
          className="inputs"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <br />
        <button className="btn-sec" type="submit">
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