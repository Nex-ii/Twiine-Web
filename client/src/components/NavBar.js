import React from 'react';
import logo from '../images/logo_white.png';
import cx from 'classnames'
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            menuOpen: false
        }
    }

    onMenuClick = () => {
        this.setState({
            menuOpen: !this.state.menuOpen
        })
    }

    render() {
        const { menuOpen } = this.state

        return(
            <div className="navbar-container">
                <div className="header-row">
                    <Link to="/">
                        <img src={logo} alt=""/>
                    </Link>
                    <div className="button-wrapper">
                        <Link to="/login">
                            <div className="login-button">
                                Login
                            </div>
                        </Link>
                        <div className={cx({
                                "burger-menu": true,
                                "cross": menuOpen
                            })} 
                            onClick={this.onMenuClick}
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

