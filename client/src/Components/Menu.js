import React from "react";

const Menu = ({ restaurantId, menus }) => {

    // console.log(menus)
    // console.log(restaurantId)

    const filterByRestId = menus.filter( item => item.favorite_restaurant_id === parseInt(restaurantId))
    console.log(filterByRestId)
    const menu = filterByRestId.map( item => {
        console.log(item.favorite_restaurant_id)
        return(
            <div key={item.id}>
                <img src={item.image} alt={item.cuisine} />
                <h3>{item.cuisine}</h3>
                <p>{item.ingredients}</p>
                <h4>{item.price}</h4>
                <button>make reservation</button>
            </div>
        )
    })

    return(
        <div>
            {menu}
        </div>
    )
}

export default Menu;