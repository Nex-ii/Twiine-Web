import React from 'react'
import logo from '../images/logo.png';
import logoWhite from '../images/logo_white.png';
import avatar from '../images/source4.png';
import GoogleMapReact from 'google-map-react';
import { useLocation } from "react-router-dom"
import cx from 'classnames'
import { VictoryLine  , VictoryChart, VictoryTheme, VictoryLabel, VictoryAxis, VictoryVoronoiContainer,VictoryTooltip } from 'victory';
import Button from '@material-ui/core/Button';
import '../styles/components/Charts.scss';

function Chart(props){

  return(
    <VictoryChart padding= {props.padding} 
        containerComponent={
          <VictoryVoronoiContainer
            voronoiDimension="x"
            labels={({ datum }) => `y: ${datum.y}`}
          />
        }
      >
        <VictoryLabel 
          className = 'chartLabel'
          text={props.text}
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
        <VictoryAxis  tickValues={props.tickValue} tickFormat={props.xAxisFormat}  style={props.tickLabelStyle}/>
        {/** x-axis */}
        <VictoryAxis
          dependentAxis={true}
          style={{
            grid: { stroke: "grey" }
          }}
        />

        <VictoryLine
        data={props.data}
        style={{
          data: { stroke: "#c43a31" },
          grid: { stroke: "grey" }
        }}
        interpolation="monotoneX"
        />


      </VictoryChart>

  );
}

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
  let tickValue = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ,11];
  let tickLabelStyle = { tickLabels: { angle: -87, padding: 40 } };
  
  return (
      <Chart
        data = {chartData} 
        padding = {{left: 40, right: 100, top: 30, bottom: 100 }}
        text="Yearly Revenue"
        xAxisFormat =  {months}
        tickValue = {tickValue}
        tickLabelStyle = {tickLabelStyle}
      />
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

  //let current_date = new Date();

  //let days = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ,11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
  let padding= { left: 40, right: 100, top: 30, bottom: 100 };
  let text = "Weekly Revenue"
  let tickValue = [1, 2, 3, 4, 5, 6, 7, 8];
  let tickLabelStyle = { tickLabels: { angle: -87, padding: 40 } };
  let week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
  


  return (
    <Chart
        data = {chartData} 
        padding = {padding}
        text= {text}
        xAxisFormat =  {week}
        tickValue = {tickValue}
        tickLabelStyle = {tickLabelStyle}
      />
  );
};

function useQuery() {
  return new URLSearchParams(useLocation().search)
}

/*
  This function will get the percentage change relative to the previous value
*/
function getChange(curr, prev){
    return (100 * ((curr - prev) / prev));
}

class Dashboard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      expanded: false,
      useChart: <YearlyChart/>,

      //Eventually when we have data we don't need these states, we just need to grab the values and calculate it into the percent change states
      reached: 30,
      rating: 4.3,
      impressions: 2800,
      pageVisits: 4243,
      LCR: 29,

      reachedPrev: 40,
      ratingPrev: 3.0,
      impressionsPrev: 1000,
      pageVisitsPrev: 2040,
      LCRPrev: 20, 

      reachChange:0,
      ratingChange:0,
      impressionsChange:0,
      pageVisitsChange:0,
      LCRChange:0
    }

    this.state.reachChange = getChange(this.state.reached, this.state.reachedPrev);
    this.state.ratingChange = getChange(this.state.rating, this.state.ratingPrev);
    this.state.impressionsChange = getChange(this.state.impressions, this.state.impressionsPrev);
    this.state.pageVisitsChange = getChange(this.state.pageVisits, this.state.pageVisitsPrev);
    this.state.LCRChange = this.state.LCR - this.state.LCRPrev;
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
                <i className="fas fa-columns" />
                <span>
                  Overview
                </span>
              </div>
              <div className="settings-wrapper">
                <i className="far fa-comments" />
                <span>
                  Reviews
                </span>
              </div>
              <div className="settings-wrapper">
                <i className= "fas fa-bullhorn" />
                <span>
                  Advertisements
                </span>
              </div>
              <div className="settings-wrapper">
                <i className="fas fa-percent" />
                <span>
                  Promotions
                </span>
              </div>
              <div className="settings-wrapper">
                <i className="fas fa-users-cog" />
                <span>
                  Settings
                </span>
              </div>
            </div>
            <a className={cx({
              "border": true,
              "expanded": expanded
            })} />

            <div className={cx({
              "settings-container": true,
              "expanded": expanded
            })}>

              <div className="copyright-wrapper">
                <i className="fas fa-copyright" />
                <span>
                  2020 Nex-ii LLC
                </span>
              </div>
                
            </div>

            
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
                  <i className="fas fa-search" />
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
            <div className = "stats-wrapper">
              <div className = "stats-block-wrapper">
                <div className = "stats-block reach">
                  <span className = "stats-title">ACCOUNTS<br/>REACHED</span>
                  <span className = "stat-value">{this.state.reached.toLocaleString('en-US')}</span>
                  <span className = "percent-change" style = {{color: (this.state.reachChange > 0) ? 'green' : 'firebrick'}}>
                    {(this.state.reachChange > 0) ? '+':'-'}  {Math.abs(this.state.reachChange).toFixed(2)} %
                  </span>
                </div>
              </div>
              <div className = "stats-block-wrapper">
                <div className = "stats-block">
                  <span className = "stats-title">AVERAGE<br/>RATING</span>
                  <span className = "rating-value">
                    {this.state.rating}
                    <span className="fa fa-star checked"></span>
                  </span>
                  <span className = "percent-change" style = {{color: (this.state.ratingChange > 0) ? 'green' : 'firebrick'}}>
                    {(this.state.ratingChange > 0) ? '+':'-'}  {Math.abs(this.state.ratingChange).toFixed(2)} %
                  </span>
                </div>
              </div>
              <div className = "stats-block-wrapper">
                <div className = "stats-block">
                  <span className = "stats-title">IMPRESSIONS<br/><br/></span>
                  <span className = "stat-value">{this.state.impressions.toLocaleString('en-US')}</span>
                  <span className = "percent-change" style = {{color: (this.state.impressionsChange > 0) ? 'green' : 'firebrick'}}>
                    {(this.state.impressionsChange > 0) ? '+':'-'}  {Math.abs(this.state.impressionsChange).toFixed(2)} %
                  </span>
                </div>
              </div>
              <div className = "stats-block-wrapper">
                <div className = "stats-block">
                  <span className = "stats-title">PAGE<br/>VISITS</span>
                  <span className = "stat-value">{this.state.pageVisits.toLocaleString('en-US')}</span>
                  <span className = "percent-change" style = {{color: (this.state.pageVisitsChange > 0) ? 'green' : 'firebrick'}}>
                    {(this.state.pageVisitsChange > 0) ? '+':'-'}  {Math.abs(this.state.pageVisitsChange).toFixed(2)} %
                  </span>
                </div>
              </div>
              <div className = "stats-block-wrapper">
                <div className = "stats-block">
                  <span className = "stats-title">LCR<br/><br/></span>
                  <span className = "stat-value">{this.state.LCR} %</span>
                  <span className = "percent-change" style = {{color: (this.state.LCRChange > 0) ? 'green' : 'firebrick'}}>
                    {(this.state.LCRChange > 0) ? '+':'-'}  {Math.abs(this.state.LCRChange).toFixed(2)} %
                  </span>
                </div>
              </div>

            </div>
            <div className="dashboard-row">
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
                  <div className = "chart-wrapper">
                    {this.state.useChart}
                  </div>
                  {/*
                  <span className="box-title">
                    Map
                  </span>
                  <div style={{ height: '100%', width: '100%' }}>
              
              
                    <GoogleMapReact // bootstrapURLKeys={{ key:  }}
                      defaultCenter={{
                        lat: 59.95,
                        lng: 30.33
                      }}
                      defaultZoom={11}
                    >
                    </GoogleMapReact>
                  </div>
                    */}
                </div>
              </div>
              {/*
              <div className="dashboard-column">
                <div className="dashboard-box-container chart">
                
                  
                </div>
                <div className="dashboard-box-container half">
                  <span className="box-title">
                    Check-ins
                  </span>
                </div>
              </div>
              */}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Dashboard