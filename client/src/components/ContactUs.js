import React, { Component } from 'react';
import { Typography, Input, createMuiTheme, makeStyles, TextField} from '@material-ui/core';
import '../CSS/ContactUs.css';
import TextareaAutosize from "@material-ui/core/TextareaAutosize";

const useStyles = makeStyles((theme) => ({
    form: {
        "& .MuiTextField-root": {
          margin: theme.spacing(1),
        },
    },
}));
const ContactUs = (props) =>{
    const classes = useStyles();
    return(
        <div id="wrapper-contactus">
        <Typography id="contactUsTitle">
            <h1>
                Contact Us
            </h1>
        </Typography>
        <form className={classes.form}>
            <div class="grid-container">
                <div class="name-sections">
                    <TextField
                        className="namesBox"
                        required
                        id = "firstName"
                        type="text"
                        label="First Name"
                        placeholder="John"
                        color="secondary"
                        variant="outlined"
                        size="small"
                    ></TextField>
                    <TextField
                        className="namesBox"
                        id = "lastName"
                        required
                        type="text"
                        label="Last Name"
                        placeholder="Doe"
                        color="secondary"
                        variant="outlined"
                        size="small"
                    />
                </div>
                <br></br>
                <TextField
                    id="emailBox"
                    required
                    type="text"
                    label="Email"
                    placeholder="JohnDoe345@gmail.com"
                    color="secondary"
                    variant="outlined"
                    size="small"
                />
                <br></br>
                <TextField
                    id="subjectBox"
                    required
                    type="text"
                    label="Subject"
                    placeholder="subject"
                    color="secondary"
                    variant="outlined"
                    size="small"
                />

                <br></br>
                <TextField
                    id="filled-multiline-static"
                    label="Message"
                    multiline
                    rows={4}
                    variant="filled"
                    required
                />
            </div>
            
            {/*
            <section id="emailSection">
                <p>Email</p>
            </section>
            <section id="emailSection">
                <p>Subject</p>
            </section>
            <section id="emailSection">
                <p>Message</p>
            </section> */}
        </form>
        </div> 
    );
};


export default ContactUs;