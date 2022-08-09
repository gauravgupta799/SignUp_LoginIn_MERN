import React, {useState} from 'react';
import styles from "../Login/style.module.css";
import {Link } from "react-router-dom";
import axios from "axios";
// import { ToastContainer, toast } from 'react-toastify';

const LogIn = () =>{
    const [error, setError ] = useState("");
    const [data, setData ] = useState({
        email:"",
        password:"",
    });

    const handleChange = ({currentTarget:input}) => {
        setData({...data, [input.name]: input.value});
    }

    const handleSubmit= async (e) =>{
        e.preventDefault();
        const url = "http://localhost:8080/api/auth";
        try{
            const {data:res} = await axios.post(url, data);
            localStorage.setItem("token", res.data);
            window.location = "/";

        }catch(error){
            if(error.message && error.response.status >= 400 && error.response.status <= 500){
                setError(error.response.data.message);
            }
        }

    };
    
    return (
        <div className = {styles.login_container}>
            <div className = {styles.login_form_container}>
                <div className = {styles.left}>
                <form className = {styles.form_container} onSubmit = {handleSubmit}>
                    <h1>Login to Your Account</h1>
                     <input 
                       type="email" 
                       placeholder="Email"
                       className = {styles.input}
                       name="email"
                       value ={data.email}
                       required
                       onChange ={handleChange}
                       />
                     <input 
                       type="password" 
                       placeholder="Password"
                       className = {styles.input}
                       name="password"
                       value ={data.password}
                       required
                       onChange ={handleChange}
                       />
                       {error && 
                        <div className={styles.error_msg}>{error}</div>
                       }
                       <button type= "submit" className = {styles.green_btn}>Sign In</button>
                  </form>
                </div>
                <div className = {styles.right}>
                <h1>New Here ?</h1>
                    <Link to ="/signup">
                        <button type="button" className = {styles.white_btn}>
                            Sign Up
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default LogIn;
