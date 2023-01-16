import React, {useState} from 'react';
import Login from '../Components/Login';
import RestaurantLogin from '../Components/RestaurantLogin';
const LoginPage = ({onLogin, location}) => {
    const [ userLogin, setUserLogin ] = useState(true);

    return (
        <div style={{
            maxWidth: "500px",
            margin: "40px auto",
            padding: "16px"
        }}>
            {userLogin ? (
                <>
                    <button color="secondary" onClick={() => setUserLogin(false)}>
                        Login Restaurant
                    </button>
                    <Login onLogin={onLogin}/>
                    <div style={{
                        border: "none",
                        borderBottom: "1px solid #ccc",
                        margin: "16px 0"
                    }}>
                    </div>
                </>
            ) : (
                <>
                    <button color="secondary" onClick={() => setUserLogin(true)}>
                        Login As User
                    </button> 
                    <RestaurantLogin onLogin={onLogin} location={location} />
                    <div style={{
                        border: "none",
                        borderBottom: "1px solid #ccc",
                        margin: "16px 0"
                    }}>  
                    </div>
                </>
            )}
        </div>
    );
}

export default LoginPage;
