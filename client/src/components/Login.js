import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import VisibilityIcon from '@material-ui/icons/Visibility';
import IconButton from '@material-ui/core/IconButton';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import {firebase} from '../database';
import '../CSS/Login.css'
import TextField from '@material-ui/core/TextField';
import {ui, uiConfig} from '../FirebaseUI';

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
    componentDidMount() {
        ui.disableAutoSignIn();
        ui.start('#firebaseui-auth-container', uiConfig);
    }
    
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
    toggleButton(event){
        event.preventDefault();
        this.setState({check:!this.state.check}, ()=>{document.getElementById("showPass").type = this.state.check ? "text" : "password";});         
    }

    render() {
        return (
            <div className="login-wrapper">
                <div className="title">Twiine</div>
                <div className="sign-in-title">Sign in to Twiine</div>
                {
                    //Google and facebook button
                }
                <form onSubmit={this.handleSubmit} className="login-container">
                    <div id="firebaseui-auth-container"/>
                    {
                        //Divider
                    }
                    <div className="divider">
                        <hr className="left"/>or<hr className="right" />
                    </div>
                    <br/>
                    <div className="info-field-container">
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
                        <br/>
                        <label class= "password">
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
                        
                        <br/><br/>
                        <Button className="login-button" type ="submit">
                            Sign in
                        </Button>
                        <br/>
                        {
                            //sign up
                        }
                        <span className="not-member">Not a member?</span>
                        <a href="https://google.com/" id = "signup" > Sign up</a>
                    </div> 
                
                </form>
                
            </div>
        )
    }
}

export default Login
