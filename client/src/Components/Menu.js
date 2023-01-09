import React from "react";
import { Link } from "react-router-dom";

const Menu = ({ filterByRestId, restaurant, handleMenu}) => {
    const menu = filterByRestId.filterByRestId.map( item => {

        return(
            <div className="menu">
                <div key={item.id} className="grid-menu">
                    <img src={item.image} alt={item.cuisine} id="image"/>
                    <h3>{item.cuisine}</h3>
                    <p style={{
                         paddingRight: "150px"
                    }}>{item.ingredients}</p>
                    <h4>{`Ksh. ${item.price}`}</h4>
                </div>
                <div id="add-icon-div">
                    <p id="add-icon">+</p>
                </div>
            </div>
        )
    })

    return(
        <div>
            <div style={{
                textAlign:"center",
            }}>
                <Link to={`/menu/make-reservation/${filterByRestId.restaurant.name}`}>
                    <button onClick={filterByRestId.handleMenu} value={filterByRestId.restaurant.id} id="btn-sec">make reservation</button>
                </Link>
            </div>
            <>
                {menu}
            </>
        </div>
    )
}

export default Menu;