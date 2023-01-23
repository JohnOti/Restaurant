import React from 'react'
import { Link } from "react-router-dom";

function NavbarRes({onLogout}) {
  function handleLogout() {
    fetch("/logout", {
      method: "DELETE",
    }).then(() => onLogout());
  }
  return (
    <div >
      <div className="nav">
        <div className="logo">
          <h1>Hungry¿Food</h1>
        </div>
        <div>
          <Link to="/">
            <button id="btn-nav" 
            onMouseOver={(e)=> e.target.style.background = "grey"} 
           onMouseOut={(e)=> e.target.style.background = "#D3D3D3" }>Add menu</button>
          </Link>
        </div>
        <div>
          <Link to="/check_reservations">
            <button id="btn-nav" 
            onMouseOver={(e)=> e.target.style.background = "grey"} 
           onMouseOut={(e)=> e.target.style.background = "#D3D3D3" }>Reservations</button>
          </Link>
        </div>
        <div>
          <Link to="/restaurant_menus">
            <button id="btn-nav" 
            onMouseOver={(e)=> e.target.style.background = "grey"} 
           onMouseOut={(e)=> e.target.style.background = "#D3D3D3" }>Check menu</button>
          </Link>
        </div>
        <div>
          <button id="btn-nav" 
          onMouseOver={(e)=> e.target.style.background = "grey"} 
           onMouseOut={(e)=> e.target.style.background = "#D3D3D3" } onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}

export default NavbarRes