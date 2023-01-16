import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import About from "./About";
import Navbar from "./Navbar";
import Restaurants from "./Components/Restaurants";
import ReservationPage from "./Components/ReservationPage";
import SignInPage from "./Pages/SignInPage";
import React, { useState, useEffect } from "react";
import Adminviews from "./Adminviews";
import AddMenuPage from "./AddMenuPage";

function App() {
  const [restaurants, setRestaurants] = useState([])
  const [location, setLocation] = useState([])
  const [menus, setMenus] = useState([])
  const [restaurantId, setRestaurantId] = useState("")
  const [user, setUser] = useState(null);

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

  // useEffect(() => {
  //   // auto-login
  //   fetch("/me").then((r) => {
  //     console.log(r);
  //     if (r.ok) {
  //       r.json().then((user) => setUser(user));
  //     }
  //   });
  // }, []);

  if (user) {
    return (
      <div
        className="App"
        style={{
          background: "#FAFAD2",
        }}
      >
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/about">
              <About />
            </Route>
            {/* <Route exact path="/admin">
              <Adminviews />
            </Route>
            <Route exact path="/menu_page">
              <AddMenuPage />
            </Route> */}
            <Route exact path="/menu/:name">
              <ReservationPage
                filterByRestId={filterByRestId}
                restaurant={restaurant}
                handleMenu={handleMenu}
              />
            </Route>
            <Route exact path="/">
              <Restaurants
                restaurants={restaurants}
                location={location}
                handleMenu={handleMenu}
              />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  } else {
    return <SignInPage onLogin={setUser} location={location}/>;
  }
}

export default App;
