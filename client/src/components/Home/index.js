<<<<<<< HEAD:src/components/Home/index.js
import React, {useState} from 'react';
import styles from "./style.module.css";

const Home = () => {
    const[hasProfile, setHasProfile] = useState(false);
    const handleLogout = () => {
        localStorage.removeItem('token');
        window.location.reload();
    }

    const uploadFile = () => {
        setHasProfile(true);
    }

    const user = localStorage.getItem('user').split(',')[0];
    console.log(user);
    return (
        <div className= {styles.main_container}>
         <nav className= {styles.navbar}>
            <h1>{user}</h1>
            <div>
                <img src="" alt="profile-pic" onClick = {uploadFile}/>
                { hasProfile &&
                    <div>
                      <label>Upload Profile Pic </label>
                        <input type="file"/>
                    </div>
                }
            </div>
            <button className= {styles.white_btn} onClick ={handleLogout}>
                Logout
            </button>
         </nav>
         <div className= {styles.home_container}>
            <h1>Welcome {user} </h1>
         </div> 
        </div>
    )
}

export default Home;
=======
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
>>>>>>> 42c615f494fe971f0ac3baedf1d3fdbe9a63d49a:client/src/components/Home/index.js
