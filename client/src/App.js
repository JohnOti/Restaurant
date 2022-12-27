import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import About from "./About";
import Login from "./Login";
import Navbar from "./Navbar";
import Register from "./Register";
import Restaurants from "./Components/Restaurants";
import React, { useState, useEffect} from "react";

function App() {
  const [ restaurants, setRestaurants] = useState([])
  const [ location, setLocation] = useState([])

  useEffect(()=>{
    
    fetch("/restaurants")
    .then(r => r.json())
    .then(d => setRestaurants(d))
    .catch(err => console.error(err))

  }, [])


  useEffect(()=>{
    
    fetch("/locations")
    .then(r => r.json())
    .then(d => setLocation(d))
    .catch(err => console.error(err))

  }, [])


  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/" >
            <Restaurants restaurants={restaurants} location={location}/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
