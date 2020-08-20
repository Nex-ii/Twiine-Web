import React from 'react'
import cx from 'classnames'
import { Route, Link } from 'react-router-dom'

class LandingPage extends React.Component {
  render() {
    const { menuOpen, onMenuClick, viewMode, scrollUp, scrollToTop } = this.props

    return(
      <div className="landing-page-container">
        <div className={cx({
          "scroll-top": true,
          "active": scrollUp
        })} onClick={scrollToTop}>
          <i class="far fa-arrow-alt-circle-up" />
        </div>
        <div className={cx({
          "menu-container": true,
          "expanded": menuOpen
        })}>
          <div className="link">
            Company
          </div>
          <div className="link">
            App
          </div>
          <div className="link" id="login">
            Log In
          </div>
          <div className="link" id="signin">
            Sign Up
          </div>
        </div>
        <div className="landing-navbar-container">
          <img src="logo.svg" alt="" />
          <div className="link-container">
            {
              viewMode !== "desktop" ? 
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
              :
              <React.Fragment>
                <div className="link">
                  Company
                </div>
                <div className="link">
                  App
                </div>
                <div className="link" id="login">
                  Log In
                </div>
                <div className="link" id="signin">
                  Sign Up
                </div>
              </React.Fragment>
            }
          </div>
        </div>
        <div className="frame-container frame-1">
          <div className="get-started-container">
            <span className="header">
              INSERT HEADLINE
            </span>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed porttitor sapien.
            </span>
            <Link to="/Newsletter">
              <div className="button" >
                Get Started
              </div>
            </Link>
          </div>
          <div className="image-container">
            <img className="get-started-img" src="getstarted.svg" />
          </div>
        </div>
        <div className="frame-container frame-2">
          <div className="introduction-container">
            <div className="introduction-overlay">
              <span className="introducing">
                Introducing
              </span>
              <span className="header">
                twiine
              </span>
              <div className="image-container">
                <img src="phone.png"/>
              </div>
              <span className="production">
                CURRENTLY IN PRODUCTION
              </span>
            </div>
          </div>
        </div>
        <div className="frame-container frame-3">
          <div className="social-container">
            <div className="header-container">
              <span className="title">
                For Now,
              </span>
              <span className="subtitle">
                Follow our story as we strive to bring people together.
              </span>
            </div>
            <div className="carousel-container">
              <div className="card">
                <div className="image-container">
                  <img src="logo_symbol.jpg" />
                </div>
                <div className="description-container">
                  <span className="header">
                    About
                  </span>
                  <span className="description">
                    Read our mission statement
                  </span>
                </div>
              </div>
              <div className="card">
                <div className="image-container">
                  <img src="logo_symbol.jpg" />
                </div>
                <div className="description-container">
                  <span className="header">
                    Social Media
                  </span>
                  <span className="description">
                    First Instagram post: ‘Welcome to Twiine’
                  </span>
                </div>
              </div>
              <div className="card">
                <div className="image-container">
                  <img src="logo_symbol.jpg" />
                </div>
                <div className="description-container">
                  <span className="header">
                    Business
                  </span>
                  <span className="description">
                    Partner with us
                  </span>
                </div>
              </div>
            </div>
            {
              viewMode !== "desktop" && 
                <div className="order-circle-container">
                  <i className="order-circle" id="1"/>
                  <i className="order-circle" id="2"/>
                  <i className="order-circle" id="3"/>
                </div>
            }
          </div>
        </div>
      </div>
    )
  }
}

export default LandingPage