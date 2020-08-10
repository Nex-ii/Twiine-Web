import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import AboutUs from './components/AboutUs.js';
import ContactUs from './components/ContactUs.js';
import Dashboard from './components/Dashboard';
import HomePage from './components/HomePage.js';
import NavBar from './components/NavBar.js';
import RegisterAcc from './components/RegisterAcc.js';
import './styles/main.scss';
import HomePageAlt from './components/HomePageAlt';

class App extends React.Component{
  constructor(props) {
    super(props)

    this.state = {
        menuOpen: false
    }
  }

  onMenuClick = () => {
    this.setState({
      menuOpen: !this.state.menuOpen
    })
  }

  closeMenuClick = () => {
    if(this.state.menuOpen) {
      this.setState({
        menuOpen: false
      })
    }
  }

  render() {
    const { menuOpen } = this.state
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route path="/" exact>
              {/* <NavBar menuOpen={menuOpen} onMenuClick={this.onMenuClick}/> */}
              <HomePageAlt closeMenuClick={this.closeMenuClick}/>
            </Route>
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
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
