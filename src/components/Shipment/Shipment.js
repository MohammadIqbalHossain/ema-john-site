import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Shipment = () => {
  

        const [user] = useAuthState(auth);

        const [email, setEmail] = useState("");
        const [name, setName] = useState("");
        const [phone, setPhone] = useState("");
        const [address, setAddress] = useState("");
        

       
    
        const handleNameBlur = event => {
            setName(event.target.value);
        }
    
        const handlePhone = event => {
            setPhone(event.target.value);
        }
    
        const handleAddress = event => {
            setAddress(event.target.value)
        }
    
       
    
    
        const handleCreateUser = (event) => {
            event.preventDefault()
            const  users = {name, email, phone, address};
            console.log(users);
            
    
        }
        return (
            <div className="form-container">
                <form onSubmit={handleCreateUser}>
                    <h1 className="form-title">shipping Information</h1>
                    <div className="form-group">
                        <label htmlFor="name">Your name</label>
                        <input className="form-input-field"
                            onBlur={handleNameBlur}
                            type="text"
                            name="name"
                            id=""
                            placeholder='You name'
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input className="form-input-field"
                            
                            value={user?.email}
                            readOnly
                            type="email"
                            name="email"
                            id=""
                            placeholder='You Email'
                            required
                        />
                    </div>
    
                    <div className="form-group">
                        <label htmlFor="email">Your phone number</label>
                        <input className="form-input-field"
                            onBlur={handlePhone}
                            type="text"
                            name="phone" id=""
                            placeholder='You Phone number'
                            required
    
                        />
                    </div>
    
                    <div className="form-group">
                        <label htmlFor="email">Your address</label>
                        <input className="form-input-field"
                            onBlur={handleAddress}
                            type="text"
                            name="address" id=""
                            placeholder='Your address'
                            required
    
                        />
                    </div>
                    
                    <div>
                        <input className="login-btn" type="submit" value="add Shipping" />
                       
                    </div>
    
          
    
                    
                </form>
            </div>
    );
};

export default Shipment;