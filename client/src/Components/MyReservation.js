import React from 'react';

const MyReservation = ({restaurant,resDetails, orders}) => {
    

    // console.log(resDetails)
    const details = resDetails.map(item => {

        return(
            <tr>
                <td>{restaurant[item.favorite_restaurant_id].name}</td>
                <td>
                    <select>
                        <option>Ordered Meals</option>
                        {orders.map(i => {
                            return(
                                <option>{i.meal}</option>
                            )
                        })}
                    </select>
                </td>
                <td>{item.orders.map(i=> i.price).reduce((a,b)=> a + b)}</td>
                <td>x</td>
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
