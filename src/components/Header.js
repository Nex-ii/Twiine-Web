import React from 'react'
import cx from 'classnames'
import { Link } from 'react-router-dom'

class Header extends React.Component {
  render() {
    const { menuOpen, onMenuClick, viewMode, darkTheme = false } = this.props

    return(
      <div className={cx({
          "dark": darkTheme,
          "navbar-container": true
        })}>
        <img className="navbar-logo" src="logo.svg" alt="" />
        {
          viewMode === "desktop" &&
          <div className="middle-link-container">
            <div className={cx({
              "link": true,
              "dark": darkTheme
            })}>
              <Link to="/download">
                Download
              </Link>
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
    )
  }
}

export default Header