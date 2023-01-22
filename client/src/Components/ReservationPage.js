import React, { useState, useEffect } from "react";
import Menu from "./Menu";
import Reservation from "./Reservation";
import MyReservation from "./MyReservation";
import { Route } from "react-router-dom";


const ReservationPage = ({ filterByRestId, restaurant, handleMenu, user, orders }) => {
    const [ customer_id, setCustomerId ] = useState("")
    const [ menu_id, setMenuId ] = useState("")
    const [ meal, setMeal ] = useState("")
    const [ price, setPrice ] = useState("")
    const [ favorite_restaurant_id, setFavvRestId ] = useState("")
    const [ resPrice, setResPrice ] = useState("")
    const [showMenu, setShowMenu] = useState(true)
    const [ reservation, setReservation ] = useState({
        customer_id: user.id,
        favorite_restaurant_id: restaurant.id,
        time: "",
        date: "",
        no_of_seats: "",
        total_price: ""
    })

    const addMenuId = () => {
        setCustomerId(user.id)
        setFavvRestId(restaurant.id)
    }

  const handleSubmit = (e) => {
            e.preventDefault()
            fetch("http://localhost:3000/orders", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    customer_id,
                    favorite_restaurant_id,
                    menu_id,
                    meal,
                    price
                })
              });
        }

        const handleChange = (e) =>{
            e.preventDefault()
            setReservation({
                ...reservation,
                [e.target.name]:e.target.value
            })
        }

        const submitResDetails = (e) => {
            e.preventDefault()
            fetch("http://localhost:3000/reservations",{
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(reservation)
            })
            setReservation({
                customer_id: user.id,
                favorite_restaurant_id: restaurant.id,
                time: "",
                date: "",
                no_of_seats: "",
                total_price: ""
            })
        }

    return (
      <div>
        <div
          style={{
            textAlign: "center",
          }}
        >
           <img
          src={restaurant.image}
          alt={restaurant.name}
          style={{
            height: "300px",
            width: "100%",
          }}
        />
          {showMenu ? (
            <div>
              <button 
              style={{
                border:"none"
              }}
              className="btn-sec"
               onClick={() => setShowMenu(false)}>
                make reservation
              </button>
              <Menu
                filterByRestId={filterByRestId}
                restaurant={restaurant}
                handleMenu={handleMenu}
                handleSubmit={handleSubmit}
                addMenuId={addMenuId}
                setMeal={setMeal}
                setPrice={setPrice}
                setMenuId={setMenuId}
              />
            </div>
          ) : (
            <div>
              <button onClick={() => setShowMenu(true)}>Back</button>
              <Reservation
                filterByRestId={filterByRestId}
                reservation={reservation}
                handleChange={handleChange}
                submitResDetails={submitResDetails}
              />
            </div>
          )}
          <div>
            <Route path="/menu/make-reservation/:name"></Route>
          </div>
          <div>
            <Route path="/my-reservations">
              <MyReservation restaurant={restaurant} />
            </Route>
          </div>
        </div>
        <div>
        </div>
      </div>
    );
}

export default ReservationPage;