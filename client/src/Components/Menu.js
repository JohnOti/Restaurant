import React, { useState } from "react";
import { Link } from "react-router-dom";

const Menu = ({ filterByRestId, restaurant, handleMenu, handleOrderItems, addMenuIId }) => {


    const menu = filterByRestId.map( item => {

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
              value={item.id}
              onClick={addMenuIId}
              >Add</button>
            </div>
          </div>
        );
    })

    return (
      <div
<<<<<<< HEAD
        style={{
          background: "white",
        }}
=======
>>>>>>> 5e06e9ff942b2ae10e3f501f413d349f1f0a7a0f
        className="res-menu"
      >
        <div style={{
                textAlign:"center"
            }}>
            <img src={restaurant.image} alt={restaurant.name} style={{
                        height:"300px",
                        width:"100%"
                    }}/>
                <h2> {restaurant.name} </h2>
            </div>
            <div style={{
                display:"flex"
            }}>
                <Link to={`/menu/make-reservation/${restaurant.name}`}>
                    <button onClick={handleMenu} value={restaurant.id} id="btn-sec">make reservation</button>
                </Link>
            </div>
            <>
                {menu}
            </>
      </div>
    );
}

export default Menu;