import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Navbar from "./Navbar";
import Restaurants from "./Components/Restaurants";
import ReservationPage from "./Components/ReservationPage";
import SignInPage from "./Pages/SignInPage";
import React, { useState, useEffect } from "react";
import AddMenuPage from "./AddMenuPage";
import MyReservation from "./Components/MyReservation";
import NavbarRes from "./NavbarRes";
import CheckReservations from "./CheckReservations";
import RestaurantMenus from "./RestaurantMenus";
import EditMenu from "./EditMenu";

function App() {
  const [restaurants, setRestaurants] = useState([])
  const [location, setLocation] = useState([])
  const [menus, setMenus] = useState([])
  const [customers, setCustomers] = useState([])
  const [restaurantId, setRestaurantId] = useState("")
  const [user, setUser] = useState(null);
  const [orders, setOrders] = useState([])
  const [reservations, setReservations] = useState([])
  const [menuDetails, setMenuDetails] = useState({});
  

  useEffect(()=>{
    fetch("http://localhost:3000/favorite_restaurants")
    .then(r => r.json())
    .then(d => setRestaurants(d))
    .catch(err => console.error(err))

  }, [])

  useEffect(()=>{
    fetch("http://localhost:3000/customers")
    .then(r => r.json())
    .then(d => setRestaurants(d))
    .catch(err => console.error(err))

  }, [  ])


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
     fetch("http://localhost:3000/reservations")
       .then((r) => r.json())
       .then((d) => setReservations(d))

       .catch((e) => console.log(e));
   }, [])

   console.log(reservations)

  const handleDelete = (id)=> {
    fetch(`http://localhost:3000/reservations/${id}`, {
      method: "DELETE",
    });
    setReservations(reservations.filter((reservation) => reservation.id !==id))
    }
  const handleMenu = (e) => {
    setRestaurantId(e.target.value);
  }

  const restaurant = restaurants.find( item => item.id === parseInt(restaurantId))

  const filterByRestId = menus.filter( item => item.favorite_restaurant_id === parseInt(restaurantId))

 
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
        {!user.location_id ? (
          <Router>
            <Navbar onLogout={setUser} />
            <Switch>
              <Route exact path="/my_reservations">
                <MyReservation
                  restaurants={restaurants}
                  reservations={reservations}
                  orders={orders}
                  user={user}
                  handleDelete={handleDelete}
                />
              </Route>
              <Route exact path="/:name">
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
          </Router>
        ) : (
          <Router>
            <NavbarRes onLogout={setUser} />
            <Switch>
              <Route exact path="/">
                <AddMenuPage user={user} />
              </Route>
              <Route exact path="/check_reservations">
                <CheckReservations
                  user={user}
                  reservations={reservations}
                  customers={customers}
                />
              </Route>
              <Route exact path="/restaurant_menus">
                <RestaurantMenus
                  user={user}
                  menuDetails={menuDetails}
                  setMenuDetails={setMenuDetails}
                 
                />
              </Route>
              <Route exact path="/edit-menu">
                <EditMenu
                  menuDetails={menuDetails}
                  menus={menus}
                  setMenus={setMenus}
                 
                />
              </Route>
            </Switch>
          </Router>
        )}
      </div>
    );
}

export default App;
