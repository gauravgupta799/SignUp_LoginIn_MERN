import React from 'react';
import {Routes, Route ,Navigate } from "react-router-dom";
import Home from "./components/Home/index";
import Signup from "./components/signup/index";
import LogIn from "./components/Login/index";
import EmailVerify from "./components/EmailVerify/index";


function App() {
  const user = localStorage.getItem('token');

  return (
    <div>
    <Routes>
       { user &&  <Route exact path="/" element={<Home/>} />}
        <Route path = "/login" element={<LogIn />} />
        <Route path = "/signup" element={<Signup />} />
        <Route exact path = "/" element = {<Navigate replace to = "/login" />} />
        <Route path = "/users/:id/verify/:token" element={<EmailVerify />} />
    </Routes>
    </div>
  );
}

export default App;
