import React from 'react'
import cx from 'classnames'

class LandingPage extends React.Component {
  constructor() {
    super() 

    this.state = {
      email: ""
    }
  }

  onSubscribeEmailChange = (e) => {
    this.setState({
      email: e.target.value
    })
  }

  render() {
    const { email } = this.state
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
            Download
          </div>
          <div className="link">
            Why Twiine?
          </div>
          <div className="link" id="login">
            Log In
          </div>
          <div className="link" id="signin">
            Sign Up
          </div>
        </div>
        <div className="landing-navbar-container">
          <img className="navbar-logo" src="logo.svg" alt="" />
          {
            viewMode === "desktop" &&
            <div className="middle-link-container">
              <div className="link">
                Download
              </div>
              <div className="link">
                Why Twiine?
              </div>
            </div>
          }
          <div className="link-container">
            {
              viewMode !== "desktop" &&
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
            }
          </div>
        </div>
        <div className="frame-container frame-1">
          <div className="get-started-container">
            <span className="header">
              Plan your hangouts
            </span>
            <span className="sub-header">
              Whether you’re trying to spend quality time with a handful of friends, you’ve just met someone special, Twiine makes it easy to plan hangouts.
            </span>
          </div>
          <div className="image-container">
            <img className="get-started-img" src="getstarted.svg" />
          </div>
        </div>
        <div className="frame-container frame-2">
          <div className="introduction-container">
            <img className="introduction-header" src="introduction.svg" />
            <div className="introduction-box-container">
              <img src="mobile.svg" />
              <div className="introduction-column">
                <div className="introduction-box">
                  <img src="group.svg" />
                  <span className="header">
                    Planning made easier
                  </span>
                  <span>
                    Twiine allows you to plan hangouts. Invite your friends, colleagues, and lovers to new and old places.
                  </span>
                </div>
                <div className="introduction-box">
                  <img src="map.svg" />
                  <span className="header">
                    Discover new places near you
                  </span>
                  <span>
                    Twiine recommends new places for you to enjoy with your friends based on your preferences. 
                  </span>
                </div>
              </div>
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
                  <img src="info.svg" />
                </div>
                <div className="description-container">
                  <span className="header">
                    About
                  </span>
                  <span className="description">
                    Read our mission statement and a message from our CEO.
                  </span>
                </div>
                <div className="button">
                  Read More
                </div>
              </div>
              <div className="card">
                <div className="image-container">
                  <img src="social.svg" />
                </div>
                <div className="description-container">
                  <span className="header">
                    Social Media
                  </span>
                  <span className="description">
                  Follow us on Instagram for company updates
                  </span>
                </div>
                <div className="button">
                  Read More
                </div>
              </div>
              <div className="card">
                <div className="image-container">
                  <img src="business.svg" />
                </div>
                <div className="description-container">
                  <span className="header">
                    Business
                  </span>
                  <span className="description">
                    Grow your business and expand your reach by partnering with us
                  </span>
                </div>
                <div className="button">
                  Read More
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
        <div className="footer-container">
          <div className="upper-footer-container">
            <div className="main-column">
              <span className="header">
                Plan your hangouts
              </span>
              <img src="instagram.svg" />
            </div>
            <div className="link-column-container">
              <div className="link-column">
                <span className="header">
                  Product
                </span>
                <span>
                  Download
                </span>
                <span>
                  Why Twiine?
                </span>
              </div>
              <div className="link-column">
                <span className="header">
                  Company
                </span>
                <span>
                  About
                </span>
                <span>
                  Branding
                </span>
                <span>
                  Newsletter
                </span>
              </div>
              <div className="link-column">
                <span className="header">
                  Business
                </span>
                <span>
                  Becoming Partners
                </span>
              </div>
            </div>
          </div>
          <div className="lower-footer-container">
            <img src="logo.svg" />
            <span className="sub-text">
              2020 Nex-ii LLC
            </span>
          </div>
        </div>
      </div>
    )
  }
}

export default LandingPage