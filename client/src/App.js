import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import AboutUs from './components/AboutUs.js';
import { Tablet, TabletLand } from './components/constants/screenWidth';
import ContactUs from './components/ContactUs.js';
import Dashboard from './components/Dashboard';
import { unlockScroll, lockScroll } from './components/helper/screenLock';
import HomePageAlt from './components/HomePageAlt';
import LandingPage from './components/LandingPage';
import NavBar from './components/NavBar.js';
import RegisterAcc from './components/RegisterAcc.js';
import './styles/main.scss';

import Newsletter from './components/Newsletter.js'
import { Charts } from './components/Charts.js';
import Reviews from './components/Reviews';
import Advertisement from './components/Advertisement';

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
      <Router>
        <div className="App">
           {/*<Switch>*/}
            {/*<Route path="/" exact>*/}
              {/* <NavBar menuOpen={menuOpen} onMenuClick={this.onMenuClick}/> */}
              {/*<LandingPage menuOpen={menuOpen} viewMode={viewMode} onMenuClick={this.onMenuClick} scrollUp={scrollUp} scrollToTop={this.scrollToTop}/>*/}
              {/* <HomePageAlt /> */}
            {/*</Route>*/}
            {/*<Route path="/Newsletter" exact>*/}
              {/*<Newsletter/>*/}
            {/*</Route>*/}
            {/*
            <Route path="/about" exact>
              <NavBar menuOpen={menuOpen} ononMenuClick={this.onMenuClick}/>
              <AboutUs closeMenuClick={this.closeMenuClick}/>
            </Route>
            <Route path="/contact" exact>
              <ContactUs />
            </Route>
            <Route path="/register" exact>
              <RegisterAcc />
            </Route>
            <Route path="/dashboard" exact>
              <Dashboard />
            </Route>
            */}
        {/*
          </Switch> 
        */}

        {/*<Charts></Charts>*/}
        {//<Reviews></Reviews>
        }
        {<Advertisement></Advertisement>
        }
        </div>
      </Router>
    );
  }
}

export default App;
