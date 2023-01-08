import React from "react";
import { Link } from "react-router-dom";

const Menu = ({ filterByRestId, restaurant, handleMenu}) => {
    console.log(filterByRestId)
    const menu = filterByRestId.filterByRestId.map( item => {

        return(
            <div key={item.id} className="grid-menu">
                <img src={item.image} alt={item.cuisine} style={{
              height:"150px",
              width: "200px"
            }} />
                <h3>{item.cuisine}</h3>
                <p>{item.ingredients}</p>
                <h4>{`Ksh. ${item.price}`}</h4>
            </div>
        )
    })

    return(
        <div>
            <div style={{
                textAlign:"center"
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