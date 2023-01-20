import React, { useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom';

function Navbar({onLogout}) {

  const history = useHistory();
  useEffect(() => {
    history.push("/")
  }, [])
  
  function handleLogout() {
    fetch("/logout", {
      method: "DELETE",
    }).then(()=>onLogout())
  }
    
  return (
    <div className="nav">
      <div className="logo">
        <h2>Hungry¿Food</h2>
      </div>
      <div id="home">
        <Link to="/">
          <button id="btn-sec">Home</button>
        </Link>
      </div>
      {/* <div>
        <Link to="/sign_up">
          <button id="btn-sec">Register</button>
        </Link>
      </div> */}
      <div>
        <Link to="my_reservations">
          <button id="btn-sec">My Reservations</button>
        </Link>
      </div>
      {/* <div>
        <Link to="/admin">
          <button id="btn-sec">Admin</button>
        </Link>
      </div> */}

      <div>
        <button id="btn-sec" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
}

export default Navbar