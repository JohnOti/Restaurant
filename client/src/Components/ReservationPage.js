import React, { useState, useEffect } from "react";
import Reservation from "./Reservation";

const ReservationPage = ({ filterByRestId }) => {
    const [ orderItems, setOrderItems ] = useState([])
    const [ order, setOrder ] = useState({
        customer_id: "",
        restaurant_id: "",
        menu_id: ""
    })

    const handleOrderChange = (e) => {
        e.preventDefault()
        setOrder({
            ...order,
            [e.target.name]:e.target.value
        })
    }

        const handleSubmit = (e) => {
            e.preventDefault()
            fetch("https://localhost:3000/order_items", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(order)
              });

              setOrder({
                customer_id: "",
                restaurant_id: "",
                menu_id: ""
            })
        }

        useEffect(()=>{
            fetch("")
            .then(r => r.json())
            .then(d => setOrderItems(d))
            .catch(e => console.log(e))
        }, [ order ])

        console.log(orderItems)


    return(
        <div>
            <div style={{
                textAlign:"center"
            }}>
                <Reservation order={order} handleOrderChange={handleOrderChange} handleSubmit={handleSubmit} filterByRestId={filterByRestId}/>
                
            </div>
        </div>
    )
}

export default ReservationPage;