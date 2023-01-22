import React from 'react';

const MyReservation = ({ restaurants, reservations, user, handleDelete }) => {
  console.log(reservations)

  const fileredArr = reservations.filter(item => item.customer_id === user.id)

const details = fileredArr.map(item => {
        return(
            <tr key={item.id}>
                <td >{restaurants.find(i => i.id === item.favorite_restaurant_id).name}</td>
              <td>{item.no_of_seats}</td>
              <td>{item.time}</td>
              <td>{item.date}</td>
                <td>
                  <button 
                  onFocus={()=> handleDelete(parseInt(item.id))}
                  > x </button>
                </td>
            </tr>
        )
    })

    return (
      <div >
        <table id="table">
          <thead>
            <tr>
              <th >Restaurant Name</th>
              <th>Number of People</th>
              <th>Date</th>
              <th>Time</th>
              <th></th>
            </tr>
          </thead>
          <tbody>{details}</tbody>
        </table>
      </div>
    );
}

export default MyReservation;
