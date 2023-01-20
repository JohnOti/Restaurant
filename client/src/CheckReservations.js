import React from 'react'

function CheckReservations({ user, resDetails, customers }) {
  console.log(customers)
  console.log(resDetails);
  console.log(user)
    // const array = user.reservations.map(item => item.favorite_restaurant_id === user.id)
  const reservations = user.reservations.map(item => {
    console.log(item.date)
      return (
        <tr>
          <td>{customers.find((c) => c.id === item.customer_id).username}</td>
          <td>{customers.find((c) => c.id === item.customer_id).email}</td>
          <td>{item.date}</td>
          <td>{item.time}</td>
          <td>{item.no_of_seats}</td>
        </tr>
      );
    })
  return (
    <div>Check Reservations
      <table>{reservations}</table>
    </div>

  )
}

export default CheckReservations