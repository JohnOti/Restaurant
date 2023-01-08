import React from "react";

const Reservation = () => {
    console.log("i'm here")
    // filterByRestId, restaurant 
    // const [ reservation, setReservation] = useState({
    //     customer_id: "",
    //     menu_id: "",
    //     no_of_seats: "",
    //     favorite_restaurant_id: "",
    //     total_price: ""
    //   })
  
    //   const menuOptions = filterByRestId.map( item => 
    //     <option key={item.id} value={item.id}>{item.name}</option>
    //     ) 

        return(
            <div>
                {/* <div style={{
                textAlign:"center"
                }}>
                    <img src={restaurant.image} alt={restaurant.name} style={{
                    height:"300px",
                    width:"100%"
                    }}/>
                    <h2> {restaurant.name} </h2>
                </div>
                <section>
                    {menuOptions}
                </section> */}
                <h2>Your Reservation</h2>
            </div>
        )
}

export default Reservation;