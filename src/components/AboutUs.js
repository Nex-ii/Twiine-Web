import React, {Component} from 'react';
import { Typography } from '@material-ui/core';

export class AboutUs extends Component {
    render() {
        return (
            <div className="about-us-wrapper">
                <Typography className="title">
                    <h1>
                        About Us
                    </h1>
                </Typography>
                <div className="box">
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