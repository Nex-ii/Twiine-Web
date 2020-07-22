import React from 'react';
import {BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';

//import Login from './components/Login.js';
//import AboutBussiness from './components/AboutBussiness.js';
//import AboutBussiness2 from './components/AboutBussiness2.js';

import AboutUs from './components/AboutUs.js';
import ContactUs from './components/ContactUs.js';
import NavBar from './components/NavBar.js';
import HomePage from './components/HomePage.js';
import Login from './components/Login.js';
//import RegisterAcc from './components/RegisterAcc.js';
// import ForgotPassword from './components/ForgotPassword.js';


function App() {
  //rce for components
  //console.log(test.state.todos)
  /*
  return (
    <Router>
    <div className="App">
        <NavBar/>
        <Route path="/" exact component={HomePage} />
        <Route path="/about" exact component={AboutUs} />
        <Route path="/contact" exact component={ContactUs} />
        <Route path="/login" exact component={Login}/>
    </div>
    </Router>
  );
  */
  return (
    <div className="App">
        <Login></Login>
    </div>
  );
}

export default App;
