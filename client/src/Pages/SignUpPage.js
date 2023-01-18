import React, { useState } from 'react';
import Register from '../Components/Register';
import RestaurantSignUp from '../Components/RestaurantSignUp';

const SignUpPage = ({onLogin, location}) => {
    const [ userSignUp, setUserSignUp ] = useState(true);
    return (
        <div className='pages'>
            {userSignUp ? (
                <>
                    <button className='btn-sec' onClick={() => setUserSignUp(false)}>
                        Sign up Restaurant
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
                    <button className='btn-sec' onClick={() => setUserSignUp(true)}>
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
