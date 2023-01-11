import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Restaurants = ({ restaurants, location, handleMenu }) => {
  const [locationFilter, setLocationFilter] = useState("All");
  const [cuisines, setCuisines] = useState([]);
  const [searchCuisine, setSearchCuisine] = useState("");

  const locationList = location.map((loc) => (
    <option value={loc.id} key={loc.id}>
      {loc.city}
    </option>
  ));

  const handleFilter = (e) => {
    setLocationFilter(e.target.value);
  };

  const restaurantFilter = restaurants.filter((item) => {
    if (locationFilter === "All") {
      return restaurants;
    } else {
      return item.location_id === parseInt(locationFilter);
    }
  });

  const restaurantList = restaurantFilter.map((res) => {
    return (
      <div key={res.id} className="grid">
        <Link to={`/menu/${res.name}`}>
          <img
            src={res.image}
            alt={res.name}
            style={{
              height: "150px",
              width: "200px",
            }}
          />
        </Link>
        <h3>{res.name}</h3>
        <Link to={`/menu/${res.name}`}>
          <button
            onClick={handleMenu}
            value={res.id}
            className="butt"
            id="btn-sec"
          >
            <span> Menu</span>
          </button>
        </Link>
      </div>
    );
  });

  // console.log(restaurantList)

   useEffect(() => {
     fetch("/menus")
       .then((res) => res.json())
       .then((cuisines) => {
         setCuisines(cuisines);
        //  console.log(cuisines);
         setSearchCuisine(cuisines);
       })
       .catch((error) => {
         console.error("console error:", error);
         console.log("Error!");
       });
   }, []);

  function handleChange(e) {
    e.preventDefault();
    let searching = e.target.value.toLowerCase();
    setCuisines(searchCuisine.filter((val) =>
        val.cuisine.toLowerCase().includes(searching.toLowerCase())
      )
    );
  }
  // const food = cuisines.map((re) => (
  //   <div key={re.id}>
  //     <p>{re.cuisine}</p>
  //   </div>));

  return (
    <div
      className="home"
      style={{
        background: "rgb(34, 67, 79)",
      }}
    >
      <div className="selec">
        <select name="location" onChange={handleFilter} className="select">
          <option value="All">Select city...</option>
          {locationList}
        </select>
      </div>
      <div
        style={{
          // textAlign: "center",
          padding: "0px",
        }}
      >
        {/* <input
          type="text"
          className="search"
          name="search"
          //   onChange={handleFilter}
          onChange={handleChange}
          placeholder="Enter cuisine..."
        /> */}
      </div>
      <div className="list">
        {restaurantList}
        {restaurantList}
        {/* {food} */}
      </div>
    </div>
  );
};

export default Restaurants;
