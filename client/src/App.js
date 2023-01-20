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
  const [resDetails, setResDetails] = useState([])
  const [menudetails, setMenudetails] = useState({});
  

  useEffect(()=>{
    fetch("http://localhost:3000/favorite_restaurants")
    .then(r => r.json())
    .then(d => setRestaurants(d))
    .catch(err => console.error(err))

  }, [])

  useEffect(() => {
    fetch("http://localhost:3000/customers")
      .then((r) => r.json())
      .then((d) => setCustomers(d))
      .catch((err) => console.error(err));
  }, []);

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

  //  useEffect(() => {
  //    fetch("/orders")
  //      .then((r) => r.json())
  //      .then((d) => setOrders(d))
  //      .catch((e) => console.log(e));
  //  }, []);

   useEffect(() => {
     fetch("http://localhost:3000/reservations")
       .then((r) => r.json())
       .then((d) => setResDetails(d))

       .catch((e) => console.log(e));
   }, []);
  const handleDelete = (id)=> {
    fetch(`http://localhost:3000/reservations/${id}`, {
      method: "DELETE",
    });
    setResDetails(resDetails.filter((reservation) => reservation.id !==id))
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

  // if (user.location_id === true) {
  //   return user === false;
  // }

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
              <Route exact path="/about">
                <About />
              </Route>
              <Route exact path="/admin">
                <SignInPage onLogin={setUser} location={location} />
              </Route>

              <Route exact path="/my_reservations">
                <MyReservation
                  restaurants={restaurants}
                  resDetails={resDetails}
                  orders={orders}
                  user={user}
                  handleDelete={handleDelete}
                />
              </Route>
              <Route exact path="/admin_views">
                <Adminviews />
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
            <Footer />
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
                  resDetails={resDetails}
                  customers={customers}
                />
              </Route>
              <Route exact path="/restaurant_menus">
                <RestaurantMenus
                  user={user}
                  menudetails={menudetails}
                  setMenudetails={setMenudetails}
                />
              </Route>
              <Route exact path="/edit-menu">
                <EditMenu
                  menudetails={menudetails}
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
