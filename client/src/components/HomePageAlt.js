import React from 'react'
import { firebase } from '../database';
import { ui, uiConfig } from '../FirebaseUI';

var GoogleProvider = new firebase.auth.GoogleAuthProvider();
var FacebookProvider = new firebase.auth.FacebookAuthProvider();

class HomePageAlt extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      username: '',
      password: ''
    }
  }

  firebaseAuth = (e) => {
    console.log(e)
    if (e.target.id === "Facebook") {
      firebase.auth().signInWithRedirect(FacebookProvider);
    } else if (e.target.id === "Google") {
      firebase.auth().signInWithRedirect(GoogleProvider);
    }
  }

  onLoginChange = (e) => {
    if (e.target.id === "Username") {
      this.setState({
        username: e.target.value
      })
    } else if (e.target.id === "Password") {
      this.setState({
        password: e.target.value
      })
    }
  }

  render() {
    const { closeMenuClick } = this.props

    return(
      <div className="home-page-alt-container" onClick={closeMenuClick}>
        <div className="graphic-container">
        </div>
        <div className="main-wrapper">
          <div className="main-container">
            <span className="header">
              Sign in to Twiine
            </span>
            <div className="alt-auth-container">
              <div className="auth-button" id="Facebook" onClick={this.firebaseAuth}>
                <img src="facebook.svg" />
                <span>
                  Continue with Facebook
                </span>
              </div>
              <div className="auth-button" id="Google">
                <img src="google.svg" />
                <span>
                  Continue with Google
                </span>
              </div>
            </div>
            <div className="divider-container">
              <div className="divider-line" />
              Or
              <div className="divider-line" />
            </div>
            <input className="input-field" id="Username" placeholder="Username" onChange={this.onLoginChange} />
            <div className="password-field">
              <a className="forgot-password" href="/forgot-password">
                Forgot Password?
              </a>
              <input className="input-field" id="Password" placeholder="Password" onChange={this.onLoginChange} type="password"/>
            </div>
            <input className="input-field submit" type="Submit" value="Sign in"/>
            <span className="register">
              {`Don't have an Account? `}
              <a href="/register">
                Sign up
              </a>
            </span>
          </div>
        </div>
      </div>
    )
  }
}

export default HomePageAlt