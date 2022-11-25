import React from 'react';
import "./ForgotPass.css";

const ForgotPass = () => {
    return (
        <div className="Forgotpass-container">
            <div className="Inner-container">
                <h3>Reset Your Password</h3>
                <form className="form" >
                    {/* <label >Email</label> */}
                    <input type="email" name ="email" placeholder="Enter your email"/>
                    <button>Submit</button>
                </form>
            </div>  
        </div>
    )
}

export default ForgotPass
