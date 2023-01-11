import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./About";
import Login from "./Login";
import Navbar from "./Navbar";
import Register from "./Register";
import Restaurants from "./Components/Restaurants";
import ReservationPage from "./Components/ReservationPage";
import React, { useState, useEffect} from "react";

function App() {
  const [ restaurants, setRestaurants] = useState([])
  const [ location, setLocation] = useState([])
  const [ menus, setMenus ] = useState([])
  const [restaurantId, setRestaurantId] = useState("")
  // const [cuisines, setCuisines] = useState([]);
  const [searchCuisine, setSearchCuisine] = useState("");

  useEffect(()=>{
    
    fetch("/favorite_restaurants")
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
  useEffect(()=>{
    
    fetch("/menus")
    .then(r => r.json())
    .then(d => setMenus(d))
    
    .catch(err => console.error(err))

  }, [])

  const handleMenu = (e) => {
    setRestaurantId(e.target.value);
  }

  const restaurant = restaurants.find( item => item.id === parseInt(restaurantId))

  const filterByRestId = menus.filter( item => item.favorite_restaurant_id === parseInt(restaurantId))


  return (
    <div className="App" style={{
      background: "#FAFAD2"
    }}>
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
          <Route path="/menu/:name">
            <ReservationPage filterByRestId={filterByRestId} restaurant={restaurant} handleMenu={handleMenu}/>
          </Route>
          <Route exact path="/" >
            <Restaurants restaurants={restaurants} location={location} handleMenu={handleMenu}/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
