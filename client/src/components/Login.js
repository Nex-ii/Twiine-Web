import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import VisibilityIcon from '@material-ui/icons/Visibility';
import IconButton from '@material-ui/core/IconButton';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import {firebase} from '../database';
import '../CSS/Login.css'
import TextField from '@material-ui/core/TextField';
import {ui, uiConfig} from '../FirebaseUI';


ui.disableAutoSignIn();
// The start method will wait until the DOM is loaded.
ui.start('#firebaseui-auth-container', uiConfig);




export class Login extends Component {

    
    constructor(props)
    {
        super(props);
        this.state = {username: '', password: '', check: ''};
        this.state.check = false;
        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.toggleButton = this.toggleButton.bind(this);
        this.handleRegister = this.handleRegister.bind(this);

    }
    /*
        handle(state variable)Change will update the state variables whenever new data is added to
        the input fields
    */
    handleUsernameChange(event)
    {
        this.setState({username: event.target.value});
    }

    handlePasswordChange(event)
    {
        this.setState({password: event.target.value});
    }
    //handleRegister - redirects users to registration page
    handleRegister()
    {
        alert("Register");
    }

    //handleSubmit - tries to log the user in if they are registered in the database
    async handleSubmit(event){
        //Add to the database
        alert("made!");
        event.preventDefault();

        var email =/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/g
        var self = this;


        //Login via email
        if(this.state.username.match(email))
        {
            //Handle login with a email and password
            firebase.auth().signInWithEmailAndPassword(this.state.username, this.state.password)
            .then(function(){
                console.log("login successful!");
            })
            .catch(function(error) {
                // Handle Errors here.
                alert("Unable to login with email and password provided");
                // ...
            });
        }
        //Login via username
        else
        {
            console.log(self.state.username);
            var checkUsername = firebase.functions().httpsCallable('userExists');
            var foundUsername = await checkUsername({left_data_field: 'username', right_userdata: self.state.username});

            console.log(foundUsername.data.found);

            if(foundUsername.data.found !== undefined)
            {
                firebase.auth().signInWithEmailAndPassword(foundUsername.data.found.email, self.state.password)
                .then(function(){
                    console.log("login successful!");
                })
                .catch(function(error) {
                    // Handle Errors here.
                    alert("Unable to login with email and password provided");
                    // ...
                });
            }
            else
            {
                alert("no username found!");
            }
        }
    }
    handlePassForgot()
    {

        //Go to a forget password screen where user must enter their email
    }
    toggleButton(event){
        event.preventDefault();
        this.setState({check:!this.state.check}, ()=>{document.getElementById("showPass").type = this.state.check ? "text" : "password";});         
    }

    render() {
        return (
            <div id = "wrapper">
                <div id = "title">Twiine</div>
                <div id = "signInTitle">Sign in to Twiine</div>
                <p style = {{paddingTop: "75px"}}></p>

                {
                    //Google and facebook button
                }
                <form onSubmit = {this.handleSubmit} id = "form">
                    <div id="firebaseui-auth-container"></div>

                    {
                        //Divider
                    }
                    <div className="divider">
                        <hr className="left"/>or<hr className="right" />
                    </div>

                    <br></br>
                    
                    <div id = "infoField">
                        {
                            //Username login
                        }
                        <label style={{paddingRight: '40px'}} id = "username" >
                            <TextField
                                onChange={this.handleUsernameChange}
                                label="Username/Email"
                                style={{width: '200px'}}
                                value = {this.state.username}
                                required = {true}
                            />
                            
                        </label>
                        <br></br>
                        <label id = "password">
                            <TextField
                                type="password"
                                id = "showPass"
                                onChange = {this.handlePasswordChange}
                                label="Password"
                                style={{width: '200px'}}
                                value = {this.state.password}
                                required = {true}
                            />
                        </label>
                        <label>
                        <IconButton aria-label="Show Password" 
                            onClick= {this.toggleButton}
                            style = {{position: 'relative', left: '70px'}}                        
                            edge="end"
                        >
                        {this.state.check ? 
                        <VisibilityIcon /> : <VisibilityOffIcon/>}
                        </IconButton>

                        </label>
                        <br></br>
                        {
                            //Forgot password
                        }
                        <a href="https://google.com/" id = "forgotPass">Forgot Password?</a>
                        
                        <br></br><br></br>
                        <Button id = "login" type = "submit">
                            Sign in
                        </Button>
                        <br></br>
                        {
                            //sign up
                        }
                        <span id = "notMember">Not a member?</span>
                        <a href="https://google.com/" id = "signup" > Sign up</a>
                    </div> 
                
                </form>
                
            </div>
        )
    }
}

export default Login
