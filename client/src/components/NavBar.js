import React from 'react';
import logo from '../images/logo_white.png';
import cx from 'classnames'
import { Link } from 'react-router-dom';

class NavBar extends React.Component {

    displayLoginModal = (event) =>
    {
        let modal = document.getElementsByClassName('modal');
        let login = document.getElementsByClassName('wrapper-signin');
        
        modal[0].style.display = "block";
        modal[0].style.zIndex = 1;
        login[0].style.display = "block";
        login[0].style.zIndex = 2;

    }

    render() {
        const { onMenuClick, menuOpen } = this.props

        return(
            <div className="navbar-container">
                <div className="header-row">
                    <Link to="/">
                        <img src={logo} alt=""/>
                    </Link>
                    <div className="button-wrapper">
                        <div className="login-button" onClick = {this.displayLoginModal}>
                            Login
                        </div>
                        
                        <div className={cx({
                                "burger-menu": true,
                                "cross": menuOpen
                            })} 
                            onClick={onMenuClick}
                        >
                            <span className="burger-bar top" />
                            <span className="burger-bar middle" />
                            <span className="burger-bar bottom" />
                        </div>
                    </div>
                </div>
                <div className={cx({
                    "menu": true,
                    "expanded": menuOpen
                })}>
                    <div className="menu-wrapper">
                        <div className="menu-column">
                            <span className="title">
                                Company
                            </span>
                            <span className="underline" />
                            <ul>
                                <li>
                                    Our Mission
                                </li>
                                <li>
                                    Contact Us
                                </li>
                            </ul>
                        </div>
                        <div className="menu-column">
                            <span className="title">
                                Public Relations
                            </span>
                            <span className="underline" />
                            <ul>
                                <li>
                                    Community
                                </li>
                                <li>
                                    Blog
                                </li>
                            </ul>
                        </div>
                        <div className="menu-column">
                            <span className="title">
                                Mobile App
                            </span>
                            <span className="underline" />
                            <ul>
                                <li>
                                    How to Use
                                </li>
                                <li>
                                    Download
                                </li>
                            </ul>
                        </div>
                    </div>
                    <span className="copyright">
                        © 2020 Nex-ii, All Rights Reserved.
                    </span>
                </div>
            </div>
        )
    }
}

export default NavBar

