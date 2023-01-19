import React, { useState } from "react";
import { Link } from "react-router-dom";

const Menu = ({
  filterByRestId,
  restaurant,
  handleSubmit,
  addMenuId,
  setMenuId,
  setPrice,
  setMeal
}) => {
  const menu = filterByRestId.map((item) => {
    return (
      <div className="menu" key={item.id}>
        <div className="grid-menu">
          <img src={item.image} alt={item.cuisine} id="image" />
          <h3>{item.cuisine}</h3>
          <p
            style={{
              paddingRight: "150px",
            }}
          >
            {item.ingredients}
          </p>
          <h4>{`Ksh. ${item.price}`}</h4>
        </div>
        <div id="add-icon-div">
          <button
            type="submit"
            value={item.id}
            onClick={() => {
              setPrice(parseInt(item.price))
              setMeal(item.cuisine)
              setMenuId(item.id)
              addMenuId()
            }}
            onFocus={handleSubmit}
          >
            Add
          </button>
        </div>
      </div>
    );
  });
  return (
    <div className="res-menu">
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
        <h2> {restaurant.name} </h2>
      </div>
      <div
        style={{
          display: "flex",
        }}
      >
        {/* <Link to={`/menu/make-reservation/${restaurant.name}`}>
                    <button onClick={handleMenu} value={restaurant.id} id="btn-sec">make reservation</button>
                </Link> */}
      </div>
      <div>{menu}</div>
    </div>
  );
};

export default Menu;