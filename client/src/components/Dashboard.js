import React from 'react'
import logo from '../images/logo.png';
import logoWhite from '../images/logo_white.png';
import avatar from '../images/source4.png';
import GoogleMapReact from 'google-map-react';
import { useLocation } from "react-router-dom"
import cx from 'classnames'
import { VictoryLine  , VictoryChart, VictoryTheme, VictoryLabel, VictoryAxis } from 'victory';
import Button from '@material-ui/core/Button';
import '../styles/components/Charts.scss';


const YearlyChart = (props) => {
  let chartData = [
    { x: 0, y: 20 },
    { x: 1, y: 30 },
    { x: 2, y: 50 },
    { x: 3, y: 40 },
    { x: 4, y: 80 },
    { x: 5, y: 20 },
    { x: 6, y: 30 },
    { x: 7, y: 50 },
    { x: 8, y: 90 },
    { x: 9, y: 30 },
    { x: 10, y: 50 },
    { x: 11, y: 60 }
  ];

  let months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

  return (
      <VictoryChart padding={{ left: 40, right: 100, top: 30, bottom: 100 }} height = {700} width = {700}>
        <VictoryLabel 
          className = 'chartLabel'
          text="Yearly Revenue"
          dx = {40}
          dy = {0}
          style={[
            { fontFamily: 'Quicksand',
              fontStyle: 'normal',
              fontWeight: '500',
              fontSize: '20px'}
          ]}
          verticalAnchor="start"
        />
        <VictoryAxis  tickValues={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ,11]} tickFormat={months}  style={{ tickLabels: { angle: -87, padding: 40 } }}/>
        {/** x-axis */}
        <VictoryAxis
          dependentAxis={true}
          style={{
            grid: { stroke: "grey" }
          }}
        />

        <VictoryLine 
        data={chartData}
        style={{
          data: { stroke: "#c43a31" },
          grid: { stroke: "grey" }
        }}
        interpolation="monotoneX"

        />


      </VictoryChart>
  );
};

export const WeeklyChart = (props) => {
  let chartData = 
  [
    { x: 1, y: 50 },
    { x: 2, y: 20 },
    { x: 3, y: 30 },
    { x: 4, y: 70 },
    { x: 5, y: 80 },
    { x: 6, y: 10 },
    { x: 7, y: 90 },
    { x: 8, y: 70 },
  ];

  let days = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ,11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];

  let current_date = new Date();

  return (
    <VictoryChart padding={{ left: 40, right: 100, top: 80, bottom: 100 }} height = {700} width = {700}>
      <VictoryLabel 
        className = 'chartLabel'
        text="Weekly Revenue"
        dx = {40}
        dy = {50}
        style={[
          { fontFamily: 'Quicksand',
            fontStyle: 'normal',
            fontWeight: '500',
            fontSize: '20px'}
        ]}
        verticalAnchor="start"
      />
      <VictoryAxis  tickValues={[1, 2, 3, 4, 5, 6, 7, 8]} 
                    tickFormat={(t) => `${current_date.getMonth() + 1}/${t}`}  style={{ tickLabels: { angle: 0, padding: 10 } }}/>
      {/** x-axis */}
      <VictoryAxis
        dependentAxis={true}
        style={{
          grid: { stroke: "grey" }
        }}
      />

      <VictoryLine 
      data={chartData}
      style={{
        data: { stroke: "#c43a31" },
        grid: { stroke: "grey" }
      }}
      interpolation="monotoneX"

      />


    </VictoryChart>
  );
};

function useQuery() {
  return new URLSearchParams(useLocation().search)
}

class Dashboard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      expanded: false,
      userChar: ''
    }
    this.state.useChart = <YearlyChart/>;
  }

  changeGraph = (event) => 
  {
    this.setState({show_dropdown: !this.state.show_dropdown});
  }
  
  setYearChart = (event) =>
  {
    this.setState({useChart: <YearlyChart/>});
  }

  setWeeklyChart = (event) =>
  {
    this.setState({useChart: <WeeklyChart/>});
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
                <div className="dashboard-box-container chart">
                <div className = 'drop_down'>
                    <Button className = 'graphButton' variant='contained' color='secondary' onClick = {this.changeGraph}> Change Graph </Button>
                    <div id = 'drop_container' className = 'dropContainer' style = {{display: this.state.show_dropdown ? 'block' : 'none'}}>
                        <div className = 'yearlyChart drop-content' onClick = {this.setYearChart}>
                        Past Year
                        </div>
                        <div className = 'monthlyChart drop-content'>
                        Past Month
                        </div>
                        <div className = 'weeklyChart drop-content' onClick = {this.setWeeklyChart}>
                        Past Week
                        </div>
                        <div className = 'dailyChart drop-content'>
                        Today
                        </div>
                    </div>
                  </div>
                  {this.state.useChart}
                  
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