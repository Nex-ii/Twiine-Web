import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import {firebase} from '../database'
import '../CSS/ForgotPassword.css'
import TextField from '@material-ui/core/TextField';

export class ForgotPassword extends Component {

    //Add a confirm changes in the future to make sure businesses did not mispell
    /**
     * constructor - set up the properties
     * @param {*} props - the properties of the component class
     */
    constructor(props)
    {
        super(props);
        this.state = {email: ''};
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    /**
     * handleEmailChange - change the value of the email state when a new value is entered into the email field
     * @param {*} event - the event of when a user enters characters into the email field
     */
    handleEmailChange(event)
    {
        this.setState({email: event.target.value});
    }

    /**
     * handleSubmit - handle sending the email to reset the password to the user.
     * @param {*} event - when the submit button is clicked
     */

    async handleSubmit(event){
        alert("made!");
        event.preventDefault();

        var checkEmail = firebase.functions().httpsCallable('getUser');
        var foundEmail = await checkEmail({authType: "email", authField: this.state.email});

        console.log(foundEmail.data.found);

        if(foundEmail.data.found !== undefined)
        {
            //reset via email if email is found in database
            //Leads to a verification page
            //Password Reset
            firebase.auth().sendPasswordResetEmail(foundEmail.data.found.email).then(function() {
                 // Email sent.
                 let emailDiv =  document.getElementById("emailMessage");
                 emailDiv.innerHTML = "A password reset link has been sent to your email!";
                 emailDiv.style.color = "green";
                 emailDiv.style.visibility = 'visible';
            })
            .catch(function(error) {
                //An error happened
                let emailDiv =  document.getElementById("emailMessage");
                emailDiv.innerHTML = "Password reset email failed! Email does not exist!";
                emailDiv.style.color = "red";
                emailDiv.style.visibility = 'visible';
            });
        }
        else
        {
            let emailDiv =  document.getElementById("emailMessage");
            emailDiv.innerHTML = "Error: Email is not registered!";
            emailDiv.style.color = "red";
            emailDiv.style.visibility = 'visible';
        }
        
    }

    render() {
        return (
            <div id = "wrapper">
                <div id = "title">Twiine</div>
                <div id = "instructions">Please enter your email below.<br></br>Then follow the steps in the email sent to reset your password</div>
                <form onSubmit = {this.handleSubmit}>
                    <label id = "email">
                        <TextField
                            onChange={this.handleEmailChange}
                            label="Email"
                            style={{width: '200px'}}
                            value = {this.state.email}
                            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                            required = {true}
                        />
                    </label>

                    <p></p>
                    <Button variant="contained" color="secondary" type = "submit" id = "resetPass">Send Email</Button>
                    <div id="emailMessage" style={{visibility: 'hidden'}}></div>
                </form>
            </div>
        )
    }
}

export default ForgotPassword
