import React from 'react'
import {Link} from 'react-router-dom'

function RestaurantMenus({user, setMenudetails}) {
     const menu = user.menus.map((item) => {
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
             <div>
               <Link to="/edit-menu">
                 <button onClick={() => setMenudetails(item)}>Edit Menu</button>
               </Link>
             </div>
           </div>
         </div>
       );
     });
  return (
      <div>RestaurantMenus
          {menu}
    </div>
  )
}

export default RestaurantMenus