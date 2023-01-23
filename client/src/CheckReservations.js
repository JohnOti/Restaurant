import React from 'react'

function CheckReservations({ user, reservations, customers }) {
    const array = reservations.filter(item => item.favorite_restaurant_id === user.id)
  const reservation = array.map(item => {
    console.log(customers)
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
      <table id='table'>
        <thead>
          <tr>
            <th>Name</th>
            <th>email</th>
            <th>Date</th>
            <th>Time</th>
            <th>People</th>
          </tr>
        </thead>
        <tbody>
          {reservation}
        </tbody>
      </table>
    </div>

  )
}

export default CheckReservations