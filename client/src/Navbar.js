import React from 'react'
import { Link } from 'react-router-dom';


function Navbar() {
    
  return (
    <div className="nav">
      <div className='logo'>
        <h1>logo here</h1>
      </div>
      <div id="home">
        <Link to="/" ><button id="btn-sec">Home</button></Link>
      </div>
      <div>
        <Link to="/login"><button id="btn-sec">Login</button></Link>
      </div>
      <div>
        <Link to="/about"><button id="btn-sec">About us</button></Link>
      </div>
      <div>
        <Link to="/login"><button id="btn-sec">Logout</button></Link>
      </div>
    </div>
  );
}

export default Navbar