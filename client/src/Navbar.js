import React, { useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom';

function Navbar() {
  const history = useHistory();
  useEffect(() => {
    history.push("/")
  },[])
    
  return (
    <div className="nav">
      <div className="logo">
        <h1>logo here</h1>
      </div>
      <div id="home">
        <Link to="/">
          <button id="btn-sec">Home</button>
        </Link>
      </div>
      <div>
        <Link to="/sign_up">
          <button id="btn-sec">Register</button>
        </Link>
      </div>
      
      <div>
        <Link to="/about">
          <button id="btn-sec">About us</button>
        </Link>
      </div>
      <div>
        <Link to="/login">
          <button id="btn-sec">Logout</button>
        </Link>
      </div>
    </div>
  );
}

export default Navbar