<<<<<<< HEAD:src/components/Login/index.js
import React, {useState} from 'react';
import styles from "../Login/style.module.css";
import {Link } from "react-router-dom";
import axios from "axios";
// import { ToastContainer, toast } from 'react-toastify';

const LogIn = () =>{
    const [passwordType, setPasswordType] = useState("password");
    const[icon , setIcon] = useState("fa fa-eye-slash");
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
        const url = "http://localhost:8080/api/auth/login";
        try{
            const {data:res} = await axios.post(url, data);
            localStorage.setItem("token", res.data);
            window.location = "/";

        }catch(error){
            if(error.message && error.response.status >= 400 && error.response.status <= 500){
                setError(error.response.data.message);
                setTimeout(()=>{
                   setError();
                },1500);
            }
        }

    };
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
                       <button type= "submit" className = {styles.green_btn}>Sign In</button>
                       <div className={styles.forgotpass}>
                         <span>Forgot password? </span>
                         <Link to = "/forgotpassword" className= {styles.link}>
                            <span >Click here</span>
                         </Link> 
                       </div>
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
=======
import React, {useState} from 'react';
import styles from "../Login/style.module.css";
import {Link } from "react-router-dom";
import axios from "axios";
// import { ToastContainer, toast } from 'react-toastify';

const LogIn = () =>{
    const [passwordType, setPasswordType] = useState("password");
    const[icon , setIcon] = useState("fa fa-eye-slash");
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
>>>>>>> 42c615f494fe971f0ac3baedf1d3fdbe9a63d49a:client/src/components/Login/index.js
