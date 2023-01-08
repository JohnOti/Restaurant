import React, { useState } from "react";
import { Link } from "react-router-dom";

const Restaurants = ({ restaurants, location, handleMenu }) => {
    const [locationFilter, setLocationFilter] = useState("All")

    const locationList = location.map( loc => 
              <option value={loc.id} key={loc.id}>{loc.city}</option>
            )

    const handleFilter = (e) => {
        setLocationFilter(e.target.value)
     }

    const restaurantFilter = restaurants.filter( item => {
      
      if(locationFilter === "All"){
        return restaurants
      }else{
        return item.location_id === parseInt(locationFilter)
      }
    })


    const restaurantList = restaurantFilter.map( res => {

      return(
        
          <div key={res.id}  className="grid">
            <Link to={`/menu/${res.name}`}>
              <img src={res.image} alt={res.name} style={{
              height:"150px",
              width: "200px"
            }}/>
            </Link>
            <h3 >{res.name}</h3>
            <Link to={`/menu/${res.name}`}><button onClick={handleMenu} value={res.id} id="btn-sec">Menu</button></Link>
          </div>
      )
    })
        
    // console.log(restaurantList)

    return (
    <div style={{
      background: "#FAFAD2"
    }}>
    <div 
    style={{
      textAlign:"center",
      padding:"20px",
    }}>
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
    </div>
    )
}

export default Restaurants