import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import React, { Component } from 'react';
import { firebase } from '../database';
import { ui, uiConfig } from '../FirebaseUI';
import infinity from '../images/infinity_1.png';
import logo from '../images/logo_white.png';
import '../styles/components/Login.scss';

export class Login extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
            username: '',
            password: '',
            check: false
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    /*
        handle(state variable)Change will update the state variables whenever new data is added to
        the input fields
    */
    componentDidMount() 
    {
        ui.disableAutoSignIn();
        ui.start('#firebaseui-auth-container', uiConfig);
    }
    
    handleUsernameChange = (event) =>
    {
        this.setState({username: event.target.value});
    }

    handlePasswordChange = (event) =>
    {
        this.setState({password: event.target.value});
    }

    //handleRegister - redirects users to registration page
    handleRegister()
    {
        alert("Register");
    }

    //handleSubmit - tries to log the user in if they are registered in the database
    async handleSubmit(event)
    {
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
            var checkUsername = firebase.functions().httpsCallable('getUser');
            var foundUsername = await checkUsername({authType: 'username', authField: self.state.username});

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
    
    toggleButton = (event) =>
    {
        event.preventDefault();
        this.setState({check:!this.state.check}, ()=>{document.getElementById("showPass").type = this.state.check ? "text" : "password";});         
    }

    render() {
        return (
            <div className = "wrapper-loginpage">
                <img src = {infinity} className = "infinity"/>
                <img src = {logo} className = "logo-large"/>
                <div className = "business-login">Business Login</div>
                <div className="wrapper-signin">
                    <img src = {logo} className = "title"></img>
                    <div className="sign-in-title">Sign in to Twiine</div>
                    {
                        //Google and facebook button
                    }
                    <form onSubmit={this.handleSubmit} className="login-container">
                        <div id="firebaseui-auth-container"/>
                        {
                            //Google and facebook button
                        }
                        <div className="divider">
                            <a className="underline"/>or<a className="underline"/>
                        </div>
                        <br/>
                        <div className="info-field-container">
                            {
                                //Divider
                            }
                            <label className="username-field">
                                <TextField
                                    onChange={this.handleUsernameChange}
                                    label="Username/Email"
                                    value = {this.state.username}
                                    required = {true}
                                />
                            </label>
                            <div className="password-field">
                                <label className="password">
                                    <TextField
                                        type="password"
                                        id = "showPass"
                                        onChange = {this.handlePasswordChange}
                                        label="Password"
                                        value = {this.state.password}
                                        required = {true}
                                    />
                                </label>
                                <label className="hide-password">
                                    <IconButton aria-label="Show Password" 
                                        onClick= {this.toggleButton}        
                                        edge="end"
                                    >
                                    {
                                        this.state.check 
                                        ? <VisibilityIcon /> 
                                        : <VisibilityOffIcon />
                                    }
                                    </IconButton>
                                </label>
                            </div> 
                            {
                                //Forgot password
                            }
                            <a href="https://google.com/" className="forgot-password">Forgot Password?</a>
                            <Button className="login-button" type ="submit">
                                Sign in
                            </Button>
                            <br/>
                            {
                                //sign up
                            }
                            <div className="not-member">
                                <span>Not a member? </span>
                                <a href="https://google.com/" className="signup">Sign up</a>
                            </div>
                        </div> 
                    
                    </form>
                    
                </div>
            </div>
        )
    }
}

export default Login
