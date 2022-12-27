import React from 'react'

function Login() {
  // const [userLog, setUserLog] = useState({
    
    
  // })
  return (
    <div className='login'>
      <form className="forms">
        <h1 id="user">User Login</h1>
        <label>Username</label>
        <input type="text" className="form" placeholder="username" />
        <label>Email</label>
        <input type="email" className="form" placeholder="email" />
        <label>Password</label>
        <input type="password" className="form" placeholder="Password" />
        <br />
        <br />
        <button className="btn" type="submit">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login