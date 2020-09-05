import React from 'react'
import logo from '../images/logo.png';
import logoWhite from '../images/logo_white.png';
import avatar from '../images/source4.png';
import cx from 'classnames'
import { VictoryLine  , VictoryChart, VictoryTheme, VictoryLabel, VictoryAxis, VictoryVoronoiContainer,VictoryTooltip } from 'victory';
import Button from '@material-ui/core/Button';
import '../styles/components/Charts.scss';
import '../styles/components/Reviews.scss';
import { v4 as uuidv4 } from 'uuid';

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
          text="Yearly Ratings"
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
  let text = "Weekly Ratings"
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

function Review(props){
    return (
        <div className="dashboard-box-container half">
            <div className = "review-wrapper">
                <img className="avatar" src={avatar} />
                <span className="box-title">
                    <div className = "review-text">
                        {props.info}
                    </div>
                </span>
                
                <div className = "user-rating">
                    <span>Rating</span>
                    <br/>
                    <span className = "rating-value">
                        {props.userRating}
                        <span className="fa fa-star checked"></span>
                    </span>
                </div>
            </div>
        </div>
    )
}


export default class Reviews extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
          expanded: false,
          useChart: <YearlyChart/>,
          currentRating: 4.3,
          reviewList: ["this is good adfmlmads;lf m;lamsd;flms\n\n\n ;ladmf; \nlmsad;lfm;lsadmfl;msadl;fm;lasdmf;lmsal;df\nm;lsamdf;l\nmasd;lfm;lsdmf;lmsad;lf\nm;lsdma\n;lfm;la", "this is bad", "this is ok", "new review"]
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
        const { expanded } = this.state;

        return (
            <div className="reviews-container">
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
                <span className = "overview">
                    Current Rating:
                    <span className = "rating-value">
                        {this.state.currentRating}
                        <span className="fa fa-star checked"></span>
                    </span>
                </span>
                
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
                    </div>
                </div>

                <div className="dashboard-column">
                    <span className = "reviews-title">Reviews</span>
                    {this.state.reviewList.map((reviews, i) => (
                        <Review key = {uuidv4()} info = {reviews} userRating = {i}></Review>
                    ))}
                </div>

                
                </div>
            </div>
            </div>
        </div>
        )
    }
}
