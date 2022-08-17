import React, {useState} from 'react';
import styles from "./styles.module.css";
import {Link} from "react-router-dom";
import axios from "axios"

const Signup = () =>{
    const [passwordType, setPasswordType] = useState("password");
    const [icon , setIcon] = useState("fa fa-eye-slash");
    const [msg, setMsg] = useState("");
    const [error, setError ] = useState("");
    const [data, setData ] = useState({
        firstName:"",
        lastName:"",
        email:"",
        password:"",
    });

    const handleChange = ({currentTarget:input}) => {
        setData({...data, [input.name]: input.value});
    }

    const handleSubmit= async (e) =>{
        e.preventDefault();
        const url = "http://localhost:8080/api/users";
        try{
            const {data:res} = await axios.post(url, data);
            setMsg(res.message);
            window.location = "/login";

        }catch(error){
            if(error.message && error.response.status >= 400 && error.response.status <= 500){
                setError(error.response.data.message);
            }
        }
    }

    const showHidePassword = () => {
        if (passwordType === "password" ) { 
            setPasswordType("text");
            setIcon("fa fa-eye");
        } else {
            setPasswordType("password");
            setIcon("fa fa-eye-slash");
        }   
    }

    return (
        <div className = {styles.signup_container}>
            <div className = {styles.signup_form_container}>
                <div className = {styles.left}>
                    <h1>Welcome Back</h1>
                    <Link to ="/login">
                        <button type="button" className = {styles.white_btn}>
                            Sign in
                        </button>
                    </Link>
                </div>
                <div className = {styles.right}>
                  <form className = {styles.form_container} onSubmit = {handleSubmit}>
                    <h1>Creat Account</h1>
                     <input 
                       type="text" 
                       placeholder="FirstName"
                       className = {styles.input}
                       name="firstName"
                       value ={data.firstName}
                       required
                       onChange ={handleChange}
                       />
                     <input 
                       type="text" 
                       placeholder="LastName"
                       className = {styles.input}
                       name="lastName"
                       value ={data.lastName}
                       required
                       onChange ={handleChange}
                       />
                     <input 
                       type="email" 
                       placeholder="Email"
                       className = {styles.input}
                       name="email"
                       value ={data.email}
                       required
                       onChange ={handleChange}
                       />
                    <div id= {styles.passwordFieldDiv}>
                        <input 
                        type={passwordType}
                        placeholder="Password"
                        className = {styles.input}
                        name="password"
                        value ={data.password}
                        required
                        onChange ={handleChange}
                        />
                      <span><i id= {styles.toggler_icon} className= {icon} onClick = {showHidePassword}></i></span>
                    </div>
                       {error && 
                        <div className={styles.error_msg}>{error}</div>
                       }
                       {msg && 
                        <div className={styles.success_msg}>{msg}</div>
                       }
                       <button type= "submit" className = {styles.green_btn}>Sign Up</button>
                  </form>
                </div>

            </div>
        </div>
    )
}

export default Signup;
