import React from 'react'
import cx from 'classnames'
import { Link } from 'react-router-dom'

class Header extends React.Component {
  render() {
    const { menuOpen, onMenuClick, viewMode, darkTheme = false, lightTheme = false } = this.props

    return(
      <div className={cx({
          "dark": darkTheme,
          "light": lightTheme,
          "navbar-container": true
        })}>
        <Link to="/">
          <img className="navbar-logo" src={`logo${lightTheme ? 'Black' : ''}.svg`} alt="" />
        </Link>
        {
          viewMode === "desktop" &&
          <div className="middle-link-container">
            <div className={cx({
              "link": true,
              "light": lightTheme,
              "dark": darkTheme
            })}>
              <Link to="/download">
                Download
              </Link>
            </div>
            <div className={cx({
              "link": true,
              "light": lightTheme,
              "dark": darkTheme
            })}>
              <Link to="/whytwiine">
                Why Twiine
              </Link>
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