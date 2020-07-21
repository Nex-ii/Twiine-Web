
import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import BackgroundSlider from 'react-background-slider'
import source1 from '../images/source1.jpg';
import source2 from '../images/source2.jpg';
import source3 from '../images/source3.jpg';

import { Typography, Button } from '@material-ui/core';
const drawerWidth = '100vw';

export default function HomePage (){
    return (
        <div>
            <BackgroundSlider
                images={[source1, source2, source3]}
                duration={4} transition={0.5} style={wholePage}
            />
            <CssBaseline />
            <Button style={registerButton}>
                <Typography style={registerText}>
                    Register
                </Typography>
            </Button>
        </div>
    );
}
const registerButton = {
    top: "55vh",
    color: "white",
    border: "2px black",
    borderRadius: "200px",
    backgroundColor: "#c10000",
    height: "100px",
    width:"200px",
    textTransform: "none",
}
const registerText = {
    fontSize:"30px",
    fontFamily:"barlow, sans-serif"
}

/*
This will be the css for the entire page
*/
const wholePage = {
    position: 'relative',
    height: '100vh',
    width: '100vw',
    opacity: '0.5'
}