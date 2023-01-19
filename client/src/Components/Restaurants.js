import React, { useState } from "react";
import { Link } from "react-router-dom";

const Restaurants = ({ restaurants, location, handleMenu }) => {
  const [locationFilter, setLocationFilter] = useState("All");

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
console.log(restaurants);
  const restaurantList = restaurantFilter.map((res) => {
    return (
      <div key={res.id} className="grid">
        <Link to={`/${res.name}`}>
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
        <Link to={`/${res.name}`}>
          <button
            onClick={handleMenu}
            value={res.id}
            className="butt"
            id="btn-sec"
          >Menu
          </button>
        </Link>
      </div>
    );
  });

  // console.log(restaurantList)


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
      <div className="list">
        {restaurantList}
      </div>
    </div>
  );
};

export default Restaurants;
