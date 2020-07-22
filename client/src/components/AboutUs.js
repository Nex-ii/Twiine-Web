import React, {Component} from 'react';
import { Typography } from '@material-ui/core';
import '../CSS/AboutUs.css';

export class AboutUs extends Component {
    render() {
        return (
            <div id="wrapper-aboutus">
                <Typography id="aboutUsTitle">
                    <h1>
                        About Us
                    </h1>
                </Typography>
                <div id="aboutUsBox">
                    <Typography>
                        <h3>
                            Together we are valorant. Valorant is love. Valorant is life. 
                        </h3>
                    </Typography>
                </div>
            </div>
        );
    }
}

export default AboutUs