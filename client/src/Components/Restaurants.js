import React, { useState } from "react";
import { Link } from "react-router-dom";

const Restaurants = ({ restaurants, location, handleMenu }) => {
    const [locationFilter, setLocationFilter] = useState("All")

    const locationList = location.map( loc => {

        
        return(
            <>
              <option value={loc.id} key={loc.id}>{loc.city}</option>
            </>
        )
    })

    const handleFilter = (e) => {
        setLocationFilter(parseInt(e.target.value))
     }
    //  console.log(locationFilter)
     


    const restaurantFilter = restaurants.filter( item => {
      if(locationFilter === "All"){
        return restaurants
      }else{
        return item.location_id === locationFilter
      }
    })


    const restaurantList = restaurantFilter.map( res => {
      console.log(res.id)
      return(
        <Link to="/menu">
          <div key={res.id}  >
            <img src={res.image} alt={res.name} />
            <h3 onClick={handleMenu} value={res.id}>{res.name}</h3>
          </div>
        </Link>
      )
    })
        
    // console.log(restaurantList)

    return (
    <>
    <div>
        <input
          type="text"
          name="search"
          
        //   onChange={handleFilter}
          placeholder="Enter cuisine..."
        />
  
        <select name="location" onChange={handleFilter}>
          <option value="All">Select city...</option>
          {locationList}
        </select>
    </div>
    {restaurantList}
    </>
    )
}

export default Restaurants