import React, { useState } from "react";

const Restaurants = ({restaurants, location}) => {
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

                return(
                    <div key={res.id}>
                        <img src={res.image} alt={res.name} />
                        <h3>{res.name}</h3>
                    </div>
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