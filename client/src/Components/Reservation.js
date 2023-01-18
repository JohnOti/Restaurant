import React from "react";

const Reservation = ( filterByRestId ) => {
    console.log(filterByRestId.filterByRestId.filterByRestId)
   
      const menuOptions = filterByRestId.filterByRestId.filterByRestId.map( item => 
        <option key={item.id} value={item.id}>{item.cuisine}</option>
        ) 
        console.log(menuOptions)

        return (
          <div className="res-reserve">
            <h2>Your Reservation</h2>
            <select name="menu">
              <option value="All">Select Cuisine...</option>
              {menuOptions}
            </select>
          </div>
        );
}

export default Reservation;