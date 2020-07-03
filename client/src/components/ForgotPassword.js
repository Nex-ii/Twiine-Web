import React, { Component } from 'react'
import Button from 'react-mdl/lib/Button';
import {db, firebase} from '../database'
import '../CSS/ForgotPassword.css'
import TextField from '@material-ui/core/TextField';

export class ForgotPassword extends Component {

    //Add a confirm changes in the future to make sure businesses did not mispell

    constructor(props)
    {
        super(props);
        this.state = {email: ''};
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleEmailChange(event)
    {
        this.setState({email: event.target.value});
    }


    handleSubmit(event){
        //Add to the database
        alert("made!");
        event.preventDefault();
        var auth = firebase.auth();
        let self = this;

        
        db.collection("Users").where("email", "==", this.state.email)
        .get()
        .then(function(querySnapshot) {
            if(querySnapshot.empty)
            {
                let emailDiv =  document.getElementById("emailMessage");
                emailDiv.innerHTML = "Error: Email is not registered!";
                emailDiv.style.color = "red";
                emailDiv.style.visibility = 'visible';
            }

            querySnapshot.forEach(function(doc) {
                // doc.data() is never undefined for query doc snapshots
                
                //reset via email if email is found in database
                //Leads to a verification page
                //Password Reset
                auth.sendPasswordResetEmail(self.state.email).then(function() {
                    // Email sent.
                    let emailDiv =  document.getElementById("emailMessage");
                    emailDiv.innerHTML = "A password reset link has been sent to your email!";
                    emailDiv.style.color = "green";
                    emailDiv.style.visibility = 'visible';
                    
                }).catch(function(error) {
                    // An error happened.
                    console.log("could not send email: " + error);
                    let emailDiv =  document.getElementById("emailMessage");
                    emailDiv.innerHTML = "Password reset email failed! " + error;
                    emailDiv.style.color = "red";
                    emailDiv.style.visibility = 'visible';
                });
            });
        })
        .catch(function(error) {
            console.log("Error getting documents: ", error);
        });
        
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
                    <Button raised accent ripple type = "submit" id = "resetPass">Send Email</Button>
                    <div id="emailMessage" style={{visibility: 'hidden'}}></div>
                </form>
            </div>
        )
    }
}

export default ForgotPassword
