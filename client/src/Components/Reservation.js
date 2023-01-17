import React from "react";

const Reservation = ( filterByRestId, handleOrderChange, handleSubmit, order ) => {

    console.log(filterByRestId)
   
      const menuOptions = filterByRestId.filterByRestId.map( item => 
        <option key={item.id} name={filterByRestId.order.meal} value={item.id}>{item.cuisine}</option>
        ) 
        console.log(menuOptions)

        return(
            <div >
                <h2>Your Reservation</h2>
                <form onSubmit={filterByRestId.handleSubmit}>
                    <label>Date</label>
                    <input type="date" placeholder="--Date--" onClick={filterByRestId.handleOrderChange} />
                    <label>Time</label>
                    <input type="time" placeholder="--Time--" onClick={filterByRestId.handleOrderChange}  />
                    <label>Number Of People</label>
                    <input type="number" min="1" placeholder="--Number of People--" onClick={filterByRestId.handleOrderChange} />
                    <label>Dish</label>
                    <select>
                        <option value="All" onChange={filterByRestId.handleOrderChange}>--select dish--</option>
                        {menuOptions}
                    </select>
                </form>
            </div>
        )
}

export default Reservation;