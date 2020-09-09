import React from 'react'
import Header from './Header'
import Footer from './Footer'

class About extends React.Component {
  render() {
    const { menuOpen, onMenuClick, viewMode } = this.props

    return(
      <div className="about-container">
        <Header menuOpen={menuOpen} onMenuClick={onMenuClick} viewMode={viewMode}/>
        <div className="about-relationship">
          <div className="description">
            <span className="header">
              twiine is built to help you build relationships
            </span>
            <span className="sub-title">
              It’s your place to plan your hangouts.  Twiine is a mobile application planner created to help people connect with their communities, discover new places, and strengthen your bonds.
            </span>
          </div>
          <img src="about.svg"/>
        </div>
        <div className="story-container">
          <span className="header">
            twiine's story
          </span>
          <div className="story-row">
            <div className="description">
              <span className="header">
                A Social Problem
              </span>
              <span>
                Twiine’s inception was inspired by a problem that arose during the COVID-19 pandemic - the lack of social interaction. Small businesses struggled to pay rent, friends were unable to hangout with each other, and many social events were cancelled.
              </span>
            </div>
            <img src="logoBlack.svg" />
          </div>
          <div className="story-row">
            <img src="logoBlack.svg" />
            <div className="description">
              <span className="header">
                Our Solution
              </span>
              <span>
                Twiine was made to help people plan hangouts - a service that decreases time spent on decided where to go and increases time spent with your friends, lovers, and community.
              </span>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default About