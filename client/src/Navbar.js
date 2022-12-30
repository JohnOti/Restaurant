import React from "react";
// import { useHistory } from 'react-router-dom'

function Navbar() {

  // const history = useHistory();
  return (
    <div className="nav">
      <div className="logo">
        <h1>logo here</h1>
      </div>
      <div id="home">
        <button id="btn-sec">
          Home
        </button>
      </div>
    </div>
  );
}

export default Navbar;
