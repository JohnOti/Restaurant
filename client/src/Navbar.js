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
        <h1>Hungry¿Food</h1>
      </div>
      <div id="home">
        <Link to="/">
          <button id="btn-nav"
              style={{
            fontSize:"15px",
            background:"gray",
            color:"white",
            padding:"15px",
            cursor:"pointer",
            margin:"2px",
            border:"none"    
              }} 
        
           onMouseOver={(e)=> e.target.style.background = "#D3D3D3"} 
           onMouseOut={(e)=> e.target.style.background = "gray" }>Home</button>
        </Link>
      </div>
      {/* <div>
        <Link to="/sign_up">
          <button id="btn-nav" 
              style={{
            fontSize:"15px",
            background:"gray",
            color:"white",
            padding:"15px",
            cursor:"pointer",
            margin:"2px",
            width:"300px", 
            border:"none"    
              }} 
           onMouseOver={(e)=> e.target.style.background = "#D3D3D3"} 
           onMouseOut={(e)=> e.target.style.background = "gray" }>Register</button>
        </Link>
      </div> */}
      <div>
        <Link to="my_reservations">
          <button id="btn-nav" 
              style={{
            fontSize:"15px",
            background:"gray",
            color:"white",
            padding:"15px",
            cursor:"pointer",
            margin:"2px", 
            border:"none"    
              }} 
          
           onMouseOver={(e)=> e.target.style.background = "#D3D3D3"} 
           onMouseOut={(e)=> e.target.style.background = "gray" }>My Reservations</button>
        </Link>
      </div>
      {/* <div>
        <Link to="/admin">
          <button id="btn-nav" 
                     style={{
            fontSize:"15px",
            background:"gray",
            color:"white",
            padding:"15px",
            cursor:"pointer",
            margin:"2px",
            width:"300px", 
            border:"none"    
              }} 
           onMouseOver={(e)=> e.target.style.background = "#D3D3D3"} 
           onMouseOut={(e)=> e.target.style.background = "gray" }>Admin</button>
        </Link>
      </div> */}

      <div>
        <button id="btn-nav" 
          style={{
            fontSize:"15px",
            background:"gray",
            color:"white",
            padding:"15px",
            cursor:"pointer",
            margin:"2px",
            border:"none"    
              }} 
         onMouseOver={(e)=> e.target.style.background = "#D3D3D3"} 
         onMouseOut={(e)=> e.target.style.background = "gray" } onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
}

export default Navbar