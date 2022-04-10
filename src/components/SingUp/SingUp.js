import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'
import './SingUp.css';


const SingUp = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        hookError,
    ] = useCreateUserWithEmailAndPassword(auth);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleEmail = event => {
        setEmail(event.target.value);
    }

    const handlePassword = event => {
        setPassword(event.target.value);
    }

    const handleCinfirmPassowrd = event => {
        setConfirmPassword(event.target.value)
    }

    if (user) {
        navigate('/shop');
    }


    const handleCreateUser = (event) => {
        event.preventDefault()
        if (password !== confirmPassword) {
            setError("Password Mismatched");
            return;
        }
        if(password.length < 5){
            setError("Password is too short");
            return;
        }

        createUserWithEmailAndPassword(email, password)
        .then(result => {
            console.log("entered")
        })

    }
    return (
        <div className="form-container">
            <form onSubmit={handleCreateUser}>
                <h1 className="form-title">Sign Up</h1>
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

                <div className="form-group">
                    <label htmlFor="email">Confirm Password</label>
                    <input className="form-input-field"
                        onBlur={handleCinfirmPassowrd}
                        type="Password"
                        name="confirm-password" id=""
                        placeholder='Your Password'
                        required

                    />
                </div>
                <p style={{ color: "red" }}>{error}</p>
                <p style={{ color: "red" }}>{hookError}</p>

                <div>
                    <input className="login-btn" type="submit" value="Sign Up" />
                    <p className="signup-link">Already have an account? <Link to='/login'>Login</Link></p>
                </div>

                <hr />

                <div>
                    <button className="google-sign-in"><span><FcGoogle /></span> Continue With Google</button>
                </div>

            </form>
        </div>
    );
};

export default SingUp;