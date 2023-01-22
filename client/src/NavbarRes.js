import React from 'react'
import { Link } from "react-router-dom";

function NavbarRes({onLogout}) {
  function handleLogout() {
    fetch("/logout", {
      method: "DELETE",
    }).then(() => onLogout());
  }
  return (
    <div className="nav-res">
      <div id="nav-bar">
        <div className="logo">
          <h1>Hungry¿Food</h1>
        </div>
        <div>
          <Link to="/">
            <button id="btn-nav">Add menu</button>
          </Link>
        </div>
        <div>
          <Link to="/check_reservations">
            <button id="btn-nav">Reservations</button>
          </Link>
        </div>
        <div>
          <Link to="/restaurant_menus">
            <button id="btn-nav">Check menu</button>
          </Link>
        </div>
        <div>
          <button id="btn-nav" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}

export default NavbarRes