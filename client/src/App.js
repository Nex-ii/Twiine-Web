import React from 'react';
import './App.css';


import Login from './components/Login.js';
//import RegisterAcc from './components/RegisterAcc.js';
//import ForgotPassword from './components/ForgotPassword.js';
//import AboutBusiness2 from './components/AboutBusiness2.js';
//import AboutBusiness3 from './components/AboutBusiness3.js';

function App() {
  //rce for components
  //console.log(test.state.todos)
  /*
  db.collection('Businesses').get().then((snapshot) => {
      snapshot.docs.forEach(doc => {
        console.log(doc.data())
      })
  });
  */


  return (
    <div className="App">
      <Login/>
    </div>
  );
}

export default App;
