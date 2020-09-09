import React from 'react'
import { Link } from 'react-router-dom'

class Footer extends React.Component {
  render() {
    return(
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
              <Link to="/download">
                <span>
                  Download
                </span>
              </Link>
              <Link to="/whytwiine">
                <span>
                  Why Twiine?
                </span>
              </Link>
            </div>
            <div className="link-column">
              <span className="header">
                Company
              </span>
              <Link to="/about">
                <span>
                  About
                </span>
              </Link>
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
    )
  }
}

export default Footer