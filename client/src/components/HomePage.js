
import { Button, Typography } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import React from 'react';
import BackgroundSlider from 'react-background-slider';
import { Link } from "react-router-dom";
import source1 from '../images/source1.jpg';
import source2 from '../images/source2.jpg';
import source3 from '../images/source3.jpg';


export default function HomePage (){
    return (
        <div className="home-page-container">
            <BackgroundSlider
                images={[source1, source2, source3]}
                duration={4} transition={0.5}
            />
            <CssBaseline />
            <Link to="/register">
            <Button className="register-button">
                <Typography className="register-text">
                    Register
                </Typography>
            </Button>
            </Link>
        </div>
    );
}