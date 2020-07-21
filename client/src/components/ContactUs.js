import React, { Component } from 'react';
import { Typography, Input, createMuiTheme, makeStyles, TextField} from '@material-ui/core';
import '../CSS/ContactUs.css';

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
        <div id="wrapper">
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
                type="text"
                label="First Name"
                placeholder="John"
                color="secondary"
                variant="outlined"
                size="small"
            ></TextField>
            <TextField
                className="namesBox"
                required
                type="text"
                label="Last Name"
                placeholder="Doe"
                color="secondary"
                variant="outlined"
                size="small"
            />
            </div>
            <div id="emailBox">
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
            </div>
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