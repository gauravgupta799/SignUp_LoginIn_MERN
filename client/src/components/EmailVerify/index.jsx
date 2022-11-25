<<<<<<< HEAD:src/components/EmailVerify/index.jsx
import React,{useState, useEffect} from 'react';
import {Link, useParams } from "react-router-dom";
import styles from "./style.module.css";
import axios from "axios";

const EmailVerify = () => {
    const[validUrl, setValidUrl] = useState(false);
    const param = useParams();

    useEffect(() => {
        const verifyEmailUrl = async () => {
            try{
                const url = `http://localhost:8080/api/users/${param.id}/verify/${param.token}`;
                const {data} = await axios.get(url);
                console.log(data);
                setValidUrl(true);
            }catch(err){
                console.log(err);
                setValidUrl(false);
            }
        }
        verifyEmailUrl();
    }, [param]);

    return (
        <>
          {validUrl ? (
            <div className={styles.container}>
            {/* <img src = {} className={styles.success_img} alt ="success_img"/> */}
            <h1>Email verified successfully!</h1>
            <Link to ="/login">
                <button className = {styles.green_btn}>Login</button>
            </Link>
            </div>
          ):(
            <h1>404 Not Found!</h1>
          )}
            
        </>
    )
}

export default EmailVerify
=======
import React,{useState, useEffect} from 'react';
import {Link, useParams } from "react-router-dom";
import styles from "./style.module.css";
import axios from "axios";

const EmailVerify = () => {
    const[validUrl, setValidUrl] = useState(false);
    const param = useParams();

    useEffect(() => {
        const verifyEmailUrl = async () => {
            try{
                const url = `http://localhost:8080/api/users/${param.id}/verify/${param.token}`;
                const {data} = await axios.get(url);
                console.log(data);
                setValidUrl(true);
            }catch(err){
                console.log(err);
                setValidUrl(false);
            }
        }
        verifyEmailUrl();
    }, [param]);

    return (
        <>
          {validUrl ? (
            <div className={styles.container}>
            {/* <img src = {} className={styles.success_img} alt ="success_img"/> */}
            <h1>Email verified successfully!</h1>
            <Link to ="/login">
                <button className = {styles.green_btn}>Login</button>
            </Link>

            </div>
          ):(
            <h1>404 Not Found!</h1>
          )}
            
        </>
    )
}

export default EmailVerify
>>>>>>> 42c615f494fe971f0ac3baedf1d3fdbe9a63d49a:client/src/components/EmailVerify/index.jsx
