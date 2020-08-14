import React from 'react'
import logo from '../images/logo.png';
import logoWhite from '../images/logo_white.png';
import avatar from '../images/source4.png';
import GoogleMapReact from 'google-map-react';
import { useLocation } from "react-router-dom"
import cx from 'classnames'

function useQuery() {
  return new URLSearchParams(useLocation().search)
}

class Dashboard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      expanded: false
    }
  }

  onExpandClick = () => {
    this.setState({
      expanded: !this.state.expanded
    })
  }

  render() {
    const { expanded } = this.state

    return (
      <div className="dashboard-container">
        <div className={cx({
          "sidebar-nav": true,
          "expanded": expanded
        })}>
          <div className="nav-icons">
            <div className={cx({
              "burger-logo": true,
              "expanded": expanded
            })}>
              <div className="burger-menu" onClick={this.onExpandClick}>
                <span className="burger-bar top" />
                <span className="burger-bar middle" />
                <span className="burger-bar bottom" />
              </div>
              <img className={cx({
                  "white-logo": true,
                  "expanded": expanded,
                })} 
                src={logoWhite} 
              />
            </div>
            <a className={cx({
              "border": true,
              "expanded": expanded
            })} />
            <div className={cx({
              "settings-container": true,
              "expanded": expanded
            })}>
              <div className="settings-wrapper">
                <i class="fas fa-columns" />
                <span>
                  Overview
                </span>
              </div>
              <div className="settings-wrapper">
                <i class="far fa-comments" />
                <span>
                  Reviews
                </span>
              </div>
              <div className="settings-wrapper">
                <i class="fas fa-bullhorn" />
                <span>
                  Advertisements
                </span>
              </div>
              <div className="settings-wrapper">
                <i class="fas fa-percent" />
                <span>
                  Promotions
                </span>
              </div>
              <div className="settings-wrapper">
                <i class="fas fa-users-cog" />
                <span>
                  Settings
                </span>
              </div>
            </div>
            <a className={cx({
              "border": true,
              "expanded": expanded
            })} />
          </div>
        </div>
        <div className="dashboard-main">
          <div className="dashboard-header">
            <div className="logo-search">
              <div className={cx({
                "logo": true,
                "expanded": expanded
              })}>
                <img src={logo} />
              </div>
              <div className="search-box">
                <div className="search-wrapper">
                  <i class="fas fa-search" />
                  <input className="search-field"/>
                </div>
                <button className="search-button">
                  <span>
                    Search
                  </span>
                </button>
              </div>
            </div>
            <div className="user-details-container">
              <i className="notification fas fa-bell" />
              <img className="avatar" src={avatar} />
              <div className="user-details">
                <span className="name">
                  petrenotpeter
                </span>
                <span className="company">
                  Mushroom Kingdom
                </span>
              </div>
            </div>
          </div>
          <div className={cx({
            "dashboard": true,
            "nav-bar-expanded": expanded
          })}>
            <span className="overview">
              Overview
            </span>
            <div className="dashboard-row">
              <div className="dashboard-column">
                <div className="dashboard-box-container full">
                  <span className="box-title">
                    Map
                  </span>
                  <div style={{ height: '100%', width: '100%' }}>
                    <GoogleMapReact
                      // bootstrapURLKeys={{ key: /* YOUR KEY HERE */ }}
                      defaultCenter={{
                        lat: 59.95,
                        lng: 30.33
                      }}
                      defaultZoom={11}
                    >
                    </GoogleMapReact>
                  </div>
                </div>
              </div>
              <div className="dashboard-column">
                <div className="dashboard-box-container half">
                  <span className="box-title">
                    Menu
                  </span>
                </div>
                <div className="dashboard-box-container half">
                  <span className="box-title">
                    Check-ins
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Dashboard