import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import './Login.css'
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const location = useLocation();

    let from = location.state?.from?.pathname || "/";

    const navigate = useNavigate();

    if(user){
        navigate(from, { replace: true });
    }

    const handleEmail = event => {
        setEmail(event.target.value);
    }

    const handlePassword = event => {
        setPassword(event.target.value);
    }

    const handleSignIn = event => {
        event.preventDefault();
        signInWithEmailAndPassword(email, password);
    }

    return (
        <div className="form-container">
            <form onSubmit={handleSignIn}>
                <h1 className="form-title">Login</h1>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input className="form-input-field"
                        onBlur={handleEmail}
                        type="email"
                        name="email"
                        id=""
                        placeholder='You Email'
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="email">Password</label>
                    <input className="form-input-field"
                        onBlur={handlePassword}
                        type="Password"
                        name="passwors" id=""
                        placeholder='You Password'
                        required

                    />
                </div>
                <p style={{color: 'red'}}>{error?.message}</p>
                <p>{loading && <span>Laoding...</span>}</p>
                
                <div>
                    <input className="login-btn" type="submit" value="Login" />
                    <p className="signup-link">New to ema john? <Link to='/singup'>Create new account</Link></p>
                </div>

                <hr />

                <div>
                    <button className="google-sign-in"><span><FcGoogle /></span> Continue With Google</button>
                </div>

            </form>
        </div>
    );
};

export default Login;