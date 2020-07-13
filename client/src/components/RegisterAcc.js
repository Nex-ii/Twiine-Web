import React, { Component } from 'react'
import '../CSS/RegisterAcc.css'
import VisibilityIcon from '@material-ui/icons/Visibility';
import IconButton from '@material-ui/core/IconButton';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import Button from '@material-ui/core/Button';
import {db, firebase} from '../database';
import TextField from '@material-ui/core/TextField';
import {CustomTooltip} from '../CSS/RegisterAccCSS.js';

/*TODO:
    - Check for username taken 
    - email already in use
    - Verification code
    - store the password securely
*/




export class RegisterAcc extends Component {
    constructor(props)
    {
        super(props);
        this.state = {username: '', password: '', repassword: '',  check: '', first:'', middle:'', last:'', email:'',usedUsername:false}; 
        this.state.check = false;                                               //Initialize show password as false
        this.handleFirstnameChange = this.handleFirstnameChange.bind(this);
        this.handleMiddlenameChange = this.handleMiddlenameChange.bind(this);
        this.handleLastnameChange = this.handleLastnameChange.bind(this);
        this.handleUsernameChange = this.handleUsernameChange.bind(this); 
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleRePasswordChange = this.handleRePasswordChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.toggleButton = this.toggleButton.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
    }
    /** 
     * Update the state variables whenever new data is entered into the input fields
    */
    handleFirstnameChange(event)
    {
        this.setState({first: event.target.value});
    }
    handleMiddlenameChange(event)
    {
        this.setState({middle: event.target.value});
    }
    handleLastnameChange(event)
    {
        this.setState({last: event.target.value});
    }
    handleUsernameChange(event)
    {
        this.setState({username: event.target.value});
        let username = document.getElementById("username").value;
        let self = this;

        //Check user name already taken
        db.collection("Users").where("username", "==", username)
        .get()
        .then(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
                // doc.data() is never undefined for query doc snapshots
                console.log(doc.id, " => ", doc.data());
                
                self.setState({usedUsername: true});
                //self.usedUsername = true;
            });
        })
        .catch(function(error) {
            console.log("Error getting documents: ", error);
        });

        console.log(this.state.usedUsername);

        //Change colors depending if the username is valid
        if(username != "")
            self.setState({usedUsername: false});
    }
    handlePasswordChange(event)
    {
        this.setState({password: event.target.value});

        //Validate that password meets requirements
    }
    handleRePasswordChange(event)
    {
        this.setState({repassword: event.target.value});
    }
    handleEmailChange(event)
    {
        this.setState({email: event.target.value});
    }

    //Handle when the submit button is clicked
    handleSubmit(event){
        //Prevent page reload
        //event.preventDefault();
        console.log(this.state.usedUsername);
        //Check for passwords matching
        if(this.state.password != this.state.repassword)
        {
            alert("Passwords not the same!");
        }
        else if(this.state.usedUsername == true)
        {
            event.preventDefault();
            alert("username is already taken!");
        }
        //Password requirements met, get verification
        else
        {
            let self = this;

            event.preventDefault();
            //Creates a email login with password
            firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
            .then(function(){
                console.log("entered create user with email and pass");
            })
            .catch(function(error) {
                // Handle Errors here.
                console.log("Email and password not properly autenticated! error: " + error);
            });

            firebase.auth().onAuthStateChanged(function(user) {
                if (user) {
                  user.updateProfile({
                      displayName: self.state.username
                  })
                  // User is signed in.
                  console.log("user signed in");
                
                  
                  user.sendEmailVerification()
                   .then(function() {
                    
                    console.log("Successfully sent email");

                    //Save the username, if they don't verify within certain time frame then delete it
                    let userData = {
                        name: self.state.middle == '' ? self.state.first + ' ' + self.state.last : self.state.first + ' ' + self.state.middle + ' ' + self.state.last,
                    }

                    var makeUserDoc = firebase.functions().httpsCallable('createUserDoc');
                    //makeUserDoc({data: userData, loggedIn: user})
                    makeUserDoc({name: userData.name})
                    .then(function() {
                        console.log("called cloud function to create userdata");
                    })
                    .catch(function(error) {
                        // Getting the Error details.

                        // ...
                        console.log("error calling cloud function: " + error);
                    });
                });

                } else {
                  console.log("no users logged in");
                  // No user is signed in.
                }
              });
            
            //Signs the user out
            firebase.auth().signOut().then(function() {
                // Sign-out successful.
                console.log("signing out");
              }).catch(function(error) {
                // An error happened.
                console.log("failed to signout!");
              });
            
            //In the verification link we need to add a timeout to delete the user if the link expires
        }
    }

    /*
        checkLength - takes in a password and checks if it is longer than required length
        input - password - the string of characters that the user sets as password
        return - true/false based on whether the password length is longer than minimum length
    */
    checkLength(password)
    {
        var minimumLength = 8;                      //Change this variable to change password length requirement
        return password.length >= minimumLength;
    }
    /*
        checkUpper - takes in a password and checks if the password contains a uppercase character
        input - password - the string of characters that the user sets as password
        return - true/false based on whether the password contains a uppercase character
    */
    checkUpper(password)
    {
        var upperCaseLetters = /[A-Z]/g;

        return password.match(upperCaseLetters);
    }
    /*
        checkLower - takes in a password and checks if the password contains a lowercase character
        input - password - the string of characters that the user sets as password
        return - true/false based on whether the password contains a lowercase character
    */
    checkLower(password)
    {
        var lowerCaseLetters = /[a-z]/g;

        return password.match(lowerCaseLetters);
    }
    /*
        checkNumeral - takes in a password and checks if the password contains a number
        input - password - the string of characters that the user sets as password
        return - true/false based on whether the password contains a number
    */
    checkNumeral(password)
    {
        var numbers = /[0-9]/g;
        return password.match(numbers);
    }
    /*
        checkSymbol - takes in a password and checks if the password contains a special character
        input - password - the string of characters that the user sets as password
        return - true/false based on whether the password contains a special character
    */
    checkSymbol(password)
    {
        var symbols = /[!@#$%^&*()+_,.{}?-]/g;
        return password.match(symbols);
    }
    /*
        toggleButton - toggles between visibility icons based on when the user wants to hide/reveal their password
    */
    toggleButton(event){
        this.forceUpdate();
        event.preventDefault();

        this.state.check = !this.state.check;
        /*
        this.setState((state) => {
            return {check:!state.check};
        });
        */
        document.getElementById("showPass").type = this.state.check ? "text" : "password";
        document.getElementById("confirmPass").type = this.state.check ? "text" : "password";           
    }
    render() {
        return (
            <div id = "wrapper">
                <div id = "title">Twiine</div>
                <div id = "signInTitle">Sign in to Twiine</div>

                {
                    //Google and facebook button
                }
                <div id="firebaseui-auth-container"></div>

                {
                    //Divider
                }
                <div className="divider">
                    <hr className="left" />or<hr className="right" />
                </div>
                {
                    //form
                }
                <form onSubmit = {this.handleSubmit}>
                    <div id = "formWrapper">
                        <div id = "nameWrapper">
                            <label style={{paddingRight: '40px'}} id = "firstName">
                                    <TextField
                                        onChange={this.handleFirstnameChange}
                                        label="First name"
                                        style={{width: '150px'}}
                                        value = {this.state.first}
                                        required = {true}
                                    />
                                
                            </label>
                            <label style={{paddingRight: '40px'}}  id = "middleName">
                                    <TextField
                                        onChange={this.handleMiddlenameChange}
                                        label="Middle initial"
                                        style={{width: '100px'}}
                                        value = {this.state.middle}
                                    />
                                
                            </label>
                            <label style={{paddingRight: '40px'}}  id = "lastName">
                                    <TextField
                                        onChange={this.handleLastnameChange}
                                        label="Last name"
                                        style={{width: '150px'}}
                                        value = {this.state.last}
                                        required = {true}
                                    />
                                
                            </label>
                        </div>
                        
                        <div id = "verifyWrapper">
                            <label id = "email">
                                <TextField
                                    type="text"
                                    onChange = {this.handleEmailChange}
                                    label="Email"
                                    style={{width: '290px'}}
                                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                                    value = {this.state.email}
                                    required = {true}
                                />
                            </label>
                            <br></br>
                            <label >
                                <TextField
                                    onChange={this.handleUsernameChange}
                                    label="Username"
                                    id = "username"
                                    style={{width: '290px'}}
                                    value = {this.state.username}
                                    required = {true}
                                    error = {this.state.usedUsername}
                                    helperText = {this.state.usedUsername ? "Username taken!" : ""}
                                />
                                
                            </label>
                            <br></br>
                            <label style={{paddingRight: '6px'}}> 
                                <CustomTooltip 
                                    placement="bottom"
                                    title={
                                    <React.Fragment>
                                        <span style = {{color: 'Black', fontSize: '15px'}} id = "requirements">Password requirements: </span>
                                        <br></br>
                                        <span style = {{color: this.checkLength(this.state.password) ? 'green' : 'firebrick', fontSize: '15px'}} id = "minimum"> Minimum 8 characters: </span>
                                        <br></br>
                                        <span style = {{color: this.checkUpper(this.state.password) ? "green" : "firebrick", fontSize: '15px'}} id = "upper"> At least one uppercase letter [A-Z]: </span>
                                        <br></br>
                                        <span style = {{color: this.checkLower(this.state.password) ? "green" : "firebrick", fontSize: '15px'}} id = "lower"> At least one lowercase letter [a-z] </span>
                                        <br></br>
                                        <span style = {{color: this.checkNumeral(this.state.password) ? "green" : "firebrick", fontSize: '15px'}} id = "numeral"> At least one numeral [0-9] </span>
                                        <br></br>
                                        <span style = {{color: this.checkSymbol(this.state.password) ? "green" : "firebrick", fontSize: '15px'}} id = "symbol"> At least one symbol [!@#$%^&*()+_,.{}?-] </span>

                                    </React.Fragment>}
                                >
                                    <TextField
                                        type="password"
                                        id = "showPass"
                                        onChange = {this.handlePasswordChange}
                                        label="Password"
                                        pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()+_,.{}?-]).{8,}"
                                        style={{width: '290px'}}
                                        value = {this.state.password}
                                        required = {true}
                                        
                                    />
                                </CustomTooltip>
                            </label>
                            
                            <label>
                            <IconButton aria-label="Show Password" 
                                onClick= {this.toggleButton}                        
                                edge="end"

                            >
                            {this.state.check ? <VisibilityIcon/> : <VisibilityOffIcon/>}
                            </IconButton>
                            </label>

                            <label >
                                <TextField
                                    type="password"
                                    id = "confirmPass"
                                    onChange = {this.handleRePasswordChange}
                                    label="Confirm password"
                                    style={{width: '290px'}}
                                    value = {this.state.repassword}
                                    required = {true}
                                />

                            </label>
                            <br></br><br></br>
                        </div>
                    </div>
                    <Button variant="contained" color="secondary" type = "submit" id = "next">
                                Next
                    </Button>
                </form>
            </div>
        )
    }
}

export default RegisterAcc
