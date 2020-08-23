import React, { Component } from 'react'
import { VictoryLine  , VictoryChart, VictoryTheme, VictoryLabel, VictoryAxis } from 'victory';
import Button from '@material-ui/core/Button';
import '../styles/components/Charts.scss';

export const YearlyChart = (props) => {
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
      <VictoryChart padding={{ left: 40, right: 100, top: 80, bottom: 100 }} height = {700} width = {700}>
        <VictoryLabel 
          className = 'chartLabel'
          text="Daily Revenue"
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
        text="Daily Revenue"
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
                    tickFormat={(t) => `${current_date.getMonth() + 1}/${t}`}  style={{ tickLabels: { angle: 0, padding: 20 } }}/>
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


export class Charts extends Component {
  constructor(props)
  {
      super(props);
      this.state = {useChart: '', show_dropdown: ''}

      this.state.useChart = <YearlyChart/>;
      this.state.show_dropdown = false;

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


  render() {
    return (
      <div className = 'chart_wrapper'>
        {this.state.useChart}

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
        
      </div>
    );
  }
}