import React from 'react'
import logo from '../images/logo_white.png';
import avatar from '../images/source4.png';
import GoogleMapReact from 'google-map-react';

class Dashboard extends React.Component {
  render() {
    return (
      <div className="dashboard-container">
        <div className="sidebar-nav">
          <div className="burger-menu">
            <span className="burger-bar top" />
            <span className="burger-bar middle" />
            <span className="burger-bar bottom" />
          </div>
          <div className="settings-container">
            <i class="fas fa-columns" />
            <i class="far fa-comments" />
            <i class="fas fa-bullhorn" />
            <i class="fas fa-percent" />
            <i class="fas fa-users-cog" />
          </div>
        </div>
        <div className="dashboard-main">
          <div className="dashboard-header">
            <div className="logo-search">
              <img src={logo} />
              <div className="search-box">
                <div className="search-wrapper">
                  <i class="fas fa-search" />
                  <input className="search-field"/>
                </div>
                <div className="search-button">
                  Search
                </div>
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
          <div className="dashboard">
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