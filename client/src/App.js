import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import About from "./About";
import Navbar from "./Navbar";
import Restaurants from "./Components/Restaurants";
import ReservationPage from "./Components/ReservationPage";
import SignInPage from "./Pages/SignInPage";
import React, { useState, useEffect } from "react";
import AddMenuPage from "./AddMenuPage";
import Footer from "./Footer";
import Adminviews from "./Adminviews";
import MyReservation from "./Components/MyReservation";

function App() {
  const [restaurants, setRestaurants] = useState([])
  const [location, setLocation] = useState([])
  const [menus, setMenus] = useState([])
  const [restaurantId, setRestaurantId] = useState("")
  const [user, setUser] = useState(null);
  const [orders, setOrders] = useState([])
  const [resDetails,setResDetails] = useState([])

  useEffect(()=>{
    fetch("http://localhost:3000/favorite_restaurants")
    .then(r => r.json())
    .then(d => setRestaurants(d))
    .catch(err => console.error(err))

  }, [])


  useEffect(()=>{
    fetch("http://localhost:3000/locations")
    .then(r => r.json())
    .then(d => setLocation(d))
    .catch(err => console.error(err))

  }, [])

  useEffect(()=>{
    fetch("http://localhost:3000/menus")
    .then(r => r.json())
    .then(d => setMenus(d))
    .catch(err => console.error(err))

  }, [])

  useEffect(()=>{
    fetch("http://localhost:3000/orders")
    .then(r => r.json())
    .then(d => setOrders(d))
    .catch(err => console.error(err))
  }, [])

   useEffect(() => {
     fetch("/orders")
       .then((r) => r.json())
       .then((d) => setOrders(d))
       .catch((e) => console.log(e));
   }, []);

   useEffect(() => {
     fetch("/reservations")
       .then((r) => r.json())
       .then((d) => setResDetails(d))

       .catch((e) => console.log(e));
   }, []);
    
  const handleMenu = (e) => { console.log(e.target.value)
    setRestaurantId(e.target.value);
  }

  const restaurant = restaurants.find( item => item.id === parseInt(restaurantId))

  const filterByRestId = menus.filter( item => item.favorite_restaurant_id === parseInt(restaurantId))

console.log(filterByRestId)

  useEffect(() => {
    fetch("http://localhost:3000/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);
  if (!user) {
    return <SignInPage onLogin={setUser} location={location}/>;
  }

    return (
      <div
        className="App"
        style={{
          background: "#FAFAD2",
        }}
      >
        <Router>
          <Navbar onLogout={setUser} />
          <Switch>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/admin">
              <SignInPage onLogin={setUser} location={location} />
            </Route>
            <Route exact path="/menu_page">
              <AddMenuPage />
            </Route>
            <Route exact path="/my_reservations">
              <MyReservation
                restaurant={restaurant}
                resDetails={resDetails}
                orders={orders}
              />
            </Route>
            <Route exact path="/admin_views">
              <Adminviews />
            </Route>
            <Route exact path="/menu/:name">
              <ReservationPage
                filterByRestId={filterByRestId}
                restaurant={restaurant}
                handleMenu={handleMenu}
                user={user}
                orders={orders}
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
          <Footer />
        </Router>
      </div>
    );
}

export default App;
