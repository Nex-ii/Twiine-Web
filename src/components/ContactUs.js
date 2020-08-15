import { makeStyles, TextField, Typography } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles((theme) => ({
    form: {
        "& .MuiTextField-root": {
          margin: theme.spacing(1),
        },
    },
}));

const ContactUs = (props) =>{
    return(
        <div className="contact-us-wrapper">
            <Typography className="title">
                <h1>
                    Contact Us
                </h1>
            </Typography>
            <form className={useStyles().form}>
                <div className="grid-container">
                    <div className="name-sections">
                        <TextField
                            className="namesBox"
                            required
                            id="firstName"
                            type="text"
                            label="First Name"
                            placeholder="John"
                            color="secondary"
                            variant="outlined"
                            size="small"
                        />
                        <TextField
                            className="namesBox"
                            id="lastName"
                            required
                            type="text"
                            label="Last Name"
                            placeholder="Doe"
                            color="secondary"
                            variant="outlined"
                            size="small"
                        />
                    </div>
                    <br/>
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
                    <br/>
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
                    <br/>
                    <TextField
                        id="filled-multiline-static"
                        label="Message"
                        multiline
                        rows={4}
                        variant="filled"
                        required
                    />
                </div>
            </form>
        </div> 
    );
};


export default ContactUs;