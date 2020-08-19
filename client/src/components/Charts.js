import React, { Component } from 'react'
import {Line} from 'react-chartjs-2';
import '../styles/components/Charts.scss';

  
export class Charts extends Component {
  constructor(props)
  {
      super(props);
      this.state = {chart: '', data1: 90}; 

      this.state.chart = {
        labels: ['January', 'February', 'March',
                  'April', 'May'],
        datasets: [
          {
            label: 'Rainfall',
            fill: false,
            lineTension: 0.5,
            backgroundColor: 'rgba(75,192,192,1)',
            borderColor: 'rgba(0,0,0,1)',
            borderWidth: 2,
            data: [this.state.data1, 59, 80, 81, 56]
          }
        ]
      }

      this.updateChart = this.updateChart.bind(this);

  }

  updateChart = (event) => 
  {
    /*
      this.setState({check:!this.state.check}, ()=>{
          document.getElementById("showPass").type = this.state.check ? "text" : "password";
          document.getElementById("confirmPass").type = this.state.check ? "text" : "password";    
      });
    */  
    alert("here");
    this.state.data1 += 1;
    console.log(this.state.data1);
  }

  render() {
    return (
      <div>
        <Line
          data={this.state.chart}
          options={{
            title:{
              display:true,
              text:'Average Rainfall per month',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        />
        <button onClick = {this.updateChart}>Update the chart</button>
      </div>
    );
  }
}