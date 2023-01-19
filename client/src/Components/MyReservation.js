import React from 'react';

const MyReservation = ({restaurants,resDetails, orders,user, handleDelete}) => {
const details = user.reservations.map(item => {
        return(
            <tr>
                <td>{restaurants[item.favorite_restaurant_id].name}</td>
                <td>
                  <select>
                  {user.orders.filter(i=> i.favorite_restaurant_id === item.favorite_restaurant_id)
                  .map(i=> <option>{i.meal}</option>)}  
                  </select>             
                </td>
                <td>{user.orders.filter(i => i.favorite_restaurant_id === item.favorite_restaurant_id)
                .map(i => i.price).reduce((a,b)=> a+b)}</td>
                <button onClick={()=> handleDelete(parseInt(item.id))}>
                  Remove
                </button>
            </tr>
        )
    })

    return (
      <div className="my-reservations">
        <table>
          <thead>
            <tr>
              <th>Restaurant Name</th>
              <th>Dish</th>
              <th>Amount</th>
              <th></th>
            </tr>
          </thead>
          <tbody>{details}</tbody>
        </table>
      </div>
    );
}

export default MyReservation;
