import React from 'react'
import { Route } from 'react-router-dom';
import Adminsignup from './Adminsignup'
import Register from './Register'

function Signup({onLogin}) {
  return (
    <div>
      <Register onLogin={onLogin} />
      <div>
        <Route exact path = "/admin_login">
          <Adminsignup onLogin={onLogin} />
        </Route>
      </div>
    </div>
  );
}

export default Signup