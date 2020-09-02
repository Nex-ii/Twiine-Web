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
            About
          </div>
          <div className="link">
            App
          </div>
          <div className="link">
            Business
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
          {
            viewMode === "desktop" &&
            <div className="middle-link-container">
              <div className="link">
                About
              </div>
              <div className="link">
                App
              </div>
              <div className="link">
                Business
              </div>
            </div>
          }
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
              Stay Intertwined.
            </span>
            <span>
              Subscribe to our newsletter so you can receive updates for twiine. 
            </span>
            <input className="button input" onChange={this.onSubscribeEmailChange}/>
            <div className="button">
              Subscribe
            </div>
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
      </div>
    )
  }
}

export default LandingPage