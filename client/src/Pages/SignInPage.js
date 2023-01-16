import React, { useState } from 'react';
import LoginPage from './LoginPage';
import SignUpPage from './SignUpPage';

const SignInPage = ({ onLogin, location }) => {
    const [ showLogin, setShowLogin ] = useState(true);
    return (
        <div style={{
            maxWidth: "500px",
            margin: "40px auto",
            padding: "16px"
        }}>
            {showLogin ? (
                <>
                    <LoginPage onLogin={onLogin}/>
                    <div style={{
                        border: "none",
                        borderBottom: "1px solid #ccc",
                        margin: "16px 0"
                    }}>
                    <p>
                        Don't have an account? &nbsp;
                        <button color="secondary" onClick={() => setShowLogin(false)}>
                            Sign Up
                        </button>
                    </p>
                    </div>
                </>
            ) : (
                <>
                    <SignUpPage onLogin={onLogin} location={location} />
                    <div style={{
                        border: "none",
                        borderBottom: "1px solid #ccc",
                        margin: "16px 0"
                    }}>
                    <p>
                        Already have an account? &nbsp;
                        <button color="secondary" onClick={() => setShowLogin(true)}>
                            Log In
                        </button>  
                    </p>
                    </div>
                </>
            )}
        </div>
    );
}

export default SignInPage;
