import React, { useState, useEffect } from 'react';


function Adminviews() {

  const [reservations, setReservations] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/reservations")
      .then((r) => r.json())
      .then((d) => setReservations(d))

      .catch((err) => console.error(err));
  }, []);

  return (
    <div className='res-reserve'>ADD reservations </div>
  );
}

export default Adminviews