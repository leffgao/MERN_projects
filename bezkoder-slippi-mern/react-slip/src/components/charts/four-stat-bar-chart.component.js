import React, { Component } from 'react';
import {Bar} from 'react-chartjs-2';
import "chartjs-plugin-labels";
import Chart from 'chart.js';

export default class FourStatBarChart extends Component {
  render(){
    Chart.Tooltip.positioners.middle = elements => {
      let model = elements[0]._model;
      return {
        x: model.x,
        y: ((model.base + model.y) / 2)
      };
    };

    return(
      <div>
        <Bar
         data = {{
          labels: this.props.labels,
          datasets: this.props.dataset,
          }}
          height={'240%'}
         options = {{
           title:{
             display: true,
             text: this.props.title,
             fontSize: 20,
             position: 'top'
           },
          legend:{
            position: 'left'
          },
          layout:{
            padding: 50
          },
          scales: {
            yAxes: [
              {
                stacked: true,
                ticks: {
                  beginAtZero: true,
                },
              },
            ],
            xAxes: [
              {
                stacked: true,
              },
            ],
          },
          plugins: {
            labels: {
              render: "image",
              images: ''
            }
          },
          tooltips: {
            
            yAlign: 'center',
            position: 'middle',
            callbacks: {
              label: function(tooltipItem, data) {
                var dataset = data.datasets[tooltipItem.datasetIndex];
                return data.labels[tooltipItem.index] + ': ' + dataset.data[tooltipItem.index];
              },
              title: function(tooltipItem, data) {
                return data.datasets[tooltipItem[0].datasetIndex].label
              }
              
            }
          }
        }}
        />
      </div>
    )
  }
}