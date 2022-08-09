import React from 'react';
import styles from "./style.module.css";

const Home = () => {

    const handleLogout = () => {
        localStorage.removeItem('token');
        window.location.reload();
    }
    return (
        <div className= {styles.main_container}>
         <nav className= {styles.navbar}>
            <h1>Gaurav</h1>
            <button className= {styles.white_btn} onClick ={handleLogout}>
                Logout
            </button>
         </nav>
         <div className= {styles.home_container}>
            <h1>Welcome John </h1>
         </div>
        </div>
    )
}

export default Home;
