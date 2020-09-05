//Initialize UI for authentification
import {firebase} from '../src/database'

var firebaseui = require('firebaseui');

  //Initialize UI for authentification
  var uiConfig = {
    callbacks: {
      //If they have successfully logged into their google account then their email has been successfully verified
      signInSuccessWithAuthResult(authResult, redirectUrl){
        console.log("here");
      }
    },
    signInSuccessUrl: '<url-to-redirect-to-on-success>', 
    signInOptions: [
      // Leave the lines as is for the providers you want to offer your users.
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    ],
    // tosUrl and privacyPolicyUrl accept either url string or a callback
    // function.
    /*
    // Terms of service url.
    tosUrl: '<your-tos-url>',
    // Privacy policy url.
    privacyPolicyUrl: '<your-privacy-policy-url>'
    */
  };

  

  // Initialize the FirebaseUI Widget using Firebase.
  var ui = new firebaseui.auth.AuthUI(firebase.auth());

  export {ui, uiConfig};