import React from "react";
import { Link } from "react-router-dom";

const Menu = ({ filterByRestId, restaurant, handleMenu }) => {
  console.log(filterByRestId)
    const menu = filterByRestId.filterByRestId.map( item => {

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
              <p id="add-icon">+</p>
            </div>
          </div>
        );
    })

    return (
      <div
        className="menus"
        style={{
          background: "white",
        }}
      >
        <div>{menu}</div>
        <div
          style={{
            textAlign: "center",
            display: "flex",
            marginRight: "300px",
            // background: "white",
          }}
        >
          <Link to={`/menu/make-reservation/${filterByRestId.restaurant.name}`}>
           
              <button
                onClick={filterByRestId.handleMenu}
                value={filterByRestId.restaurant.id}
                className="butt"
              >
                reserve
              </button>
           
          </Link>
        </div>
      </div>
    );
}

export default Menu;