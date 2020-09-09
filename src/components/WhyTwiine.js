import React from 'react'
import Header from './Header'
import Footer from './Footer'

class WhyTwiine extends React.Component {
  render() {
    const { menuOpen, onMenuClick, viewMode } = this.props

    return(
      <div className="why-twiine-container">
        <Header menuOpen={menuOpen} onMenuClick={onMenuClick} viewMode={viewMode} lightTheme/>
          <div className="why-container">
            <span className="header">
              Why use twiine?
            </span>
            <div className="why-container-row">
              <div className="why-column">
                <span className="header">
                  Discover new places
                </span>
                <span>
                  Twiine recommends new places around your area for you to enjoy with your friends based on your preferences and recent hangouts. Use the map or the search bar to discover new places.
                </span>
              </div>
              <div className="why-column">
                <span className="header">
                  Plan your hangouts
                </span>
                <span>
                  Twiine allows you to plan hangouts. Save time on planning and spend more time hanging out! Pick your favorite places, set a time and date, and invite whomever to plan a hangout.
                </span>
              </div>
            </div>
          </div>
          <div className="how-container">
            <span className="header">
              How does it work?
            </span>
            <img src="mobileHow.svg"/>
            <span className="sub-title">
              Use the map to search for hangouts near you. You can search for places, categories, and cities on the map, giving you different levels of granularity to find a hangout perfect for you.
            </span>
          </div>
        <Footer />
      </div>
    )
  }
}

export default WhyTwiine