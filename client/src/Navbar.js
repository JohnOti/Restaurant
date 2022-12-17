import React from 'react'


function Navbar() {
    
  return (
    <div className="nav">
      <div className='logo'>
        <h1>logo here</h1>
      </div>
      <div id="home">
        <button id="btn-sec">Home</button>
      </div>
      <div>
        <button id="btn-sec">Login</button>
      </div>
      <div>
        <button id="btn-sec">About us</button>
      </div>
      <div>
        <button id="btn-sec">Logout</button>
      </div>
    </div>
  );
}

export default Navbar