// Your web app's Firebase configuration

var firebaseConfig = {
  apiKey: "AIzaSyAbNSWkd3ojUbWGC-yGcbjnG4Mz5YIqe5A",
  //For the authdomain this is where people will be redirected to after login
  authDomain: "twiine.firebaseapp.com",
  databaseURL: "https://twiine.firebaseio.com",
  projectId: "twiine",
  storageBucket: "twiine.appspot.com",
  messagingSenderId: "713139087186",
  appId: "1:713139087186:web:4fb4ab9c0a3ba8e7dc3c8b",
  measurementId: "G-M5VB02BVKW",
};

//const firebase = require("firebase");
// Required for side-effects
//require("firebase/firestore");
var firebase = require("firebase");
// var firebaseui = require('firebaseui');
require("firebase/functions");

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

//Initialize UI for authentification
// var uiConfig = {
//   callbacks: {},
//   signInSuccessUrl: "<url-to-redirect-to-on-success>",
//   signInOptions: [
//     // Leave the lines as is for the providers you want to offer your users.
//     firebase.auth.GoogleAuthProvider.PROVIDER_ID,
//     firebase.auth.FacebookAuthProvider.PROVIDER_ID,
//   ],
//   // tosUrl and privacyPolicyUrl accept either url string or a callback
//   // function.
//   /*
//     // Terms of service url.
//     tosUrl: '<your-tos-url>',
//     // Privacy policy url.
//     privacyPolicyUrl: '<your-privacy-policy-url>'
//     */
// };

// Initialize the FirebaseUI Widget using Firebase.
// var ui = new firebaseui.auth.AuthUI(firebase.auth());
// ui.disableAutoSignIn();
// The start method will wait until the DOM is loaded.
// ui.start("#firebaseui-auth-container", uiConfig);

const db = firebase.firestore();
var functions = firebase.functions();

export { db, firebase, functions };
