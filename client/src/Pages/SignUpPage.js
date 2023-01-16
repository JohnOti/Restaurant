import React, { useState } from 'react';
import Register from '../Components/Register';
import RestaurantSignUp from '../Components/RestaurantSignUp';

const SignUpPage = ({onLogin, location}) => {
    const [ userSignUp, setUserSignUp ] = useState(true);
    return (
        <div style={{
            maxWidth: "500px",
            margin: "40px auto",
            padding: "16px"
        }}>
            {userSignUp ? (
                <>
                    <button color="secondary" onClick={() => setUserSignUp(false)}>
                        Sign Up As Restaurant
                    </button>
                    <Register onLogin={onLogin}/>
                    <div style={{
                        border: "none",
                        borderBottom: "1px solid #ccc",
                        margin: "16px 0"
                    }}>
                    </div>
                </>
            ) : (
                <>
                    <button color="secondary" onClick={() => setUserSignUp(true)}>
                        SignUp As User
                    </button> 
                    <RestaurantSignUp onLogin={onLogin} location={location} />
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

export default SignUpPage;
