// Your web app's Firebase configuration
//import * as firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyAbNSWkd3ojUbWGC-yGcbjnG4Mz5YIqe5A",
    //For the authdomain this is where people will be redirected to after login
    authDomain: "twiine.firebaseapp.com",
    databaseURL: "https://twiine.firebaseio.com",
    projectId: "twiine",
    storageBucket: "twiine.appspot.com",
    messagingSenderId: "713139087186",
    appId: "1:713139087186:web:4fb4ab9c0a3ba8e7dc3c8b",
    measurementId: "G-M5VB02BVKW"
};

  //const firebase = require("firebase");
  // Required for side-effects
  //require("firebase/firestore");
  var firebase = require('firebase/app');
  require("firebase/firestore");
  require("firebase/functions");
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  
  

  const db = firebase.firestore();
  var functions = firebase.functions();



  export {db, firebase, functions};
