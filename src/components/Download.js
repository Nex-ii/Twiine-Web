import React from 'react'
import Header from './Header'
import Footer from './Footer'

class Download extends React.Component {
  render() {
    const { menuOpen, onMenuClick, viewMode } = this.props

    return(
      <div className="download-page-container">
        <Header menuOpen={menuOpen} onMenuClick={onMenuClick} viewMode={viewMode} darkTheme/>
        <img className="coming-soon" src="comingSoon.svg" />
        <Footer />
      </div>
    )
  }
}

export default Download