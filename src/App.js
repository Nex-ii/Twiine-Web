import React from 'react';
import './App.css';
import { Tablet, TabletLand } from './components/constants/screenWidth';
import { lockScroll, unlockScroll } from './components/helper/screenLock';
import LandingPage from './components/LandingPage';
import Dashboard from './components/Dashboard.js';
import './styles/main.scss';

class App extends React.Component{
  constructor(props) {
    super(props)

    this.state = {
      menuOpen: false,
      viewMode: "desktop",
      scrollUp: false
    }
  }

  componentDidMount() {
    this.updateViewMode()
    window.addEventListener('resize', this.updateViewMode)
    window.addEventListener('scroll', this.updateScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateViewMode)
  }

  updateScroll = () => {
    if (window.pageYOffset > window.innerHeight) {
      this.setState({
        scrollUp: true
      })
    } else {
      this.setState({
        scrollUp: false
      })
    }
  }

  updateViewMode = () => {
    unlockScroll()
    if (window.innerWidth < Tablet) {
      this.setState({
        viewMode: "tabletSM"
      })
    } else if (window.innerWidth < TabletLand) {
      this.setState({
        viewMode: "tablet",
        menuOpen: false
      })
    } else {
      this.setState({
        viewMode: "desktop",
        menuOpen: false
      })
    }
  }

  onMenuClick = () => {
    const { menuOpen } = this.state

    if(menuOpen) {
      unlockScroll()
    } else {
      lockScroll()
    }

    this.setState({
      menuOpen: !menuOpen
    })
  }

  closeMenuClick = () => {
    if(this.state.menuOpen) {
      this.setState({
        menuOpen: false
      })
    }
  }

  scrollToTop = () => {
    window.scrollTo({top: 0, left: 0, behavior: "smooth"});
  }

  render() {
    const { menuOpen, viewMode, scrollUp } = this.state
    return (
        <div className="App">
          <LandingPage menuOpen={menuOpen} viewMode={viewMode} onMenuClick={this.onMenuClick} scrollUp={scrollUp} scrollToTop={this.scrollToTop}/>
          {/* <Dashboard /> */}
        </div>
    );
  }
}

export default App;
