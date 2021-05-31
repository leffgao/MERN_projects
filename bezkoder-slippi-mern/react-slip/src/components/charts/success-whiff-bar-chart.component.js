import React, { Component } from 'react';
import {Bar} from 'react-chartjs-2';
import Chart from 'chart.js';

export default class SuccessWhiffBarChart extends Component {
  render(){
    console.log(this.props.charImage)
    Chart.Tooltip.positioners.middle = elements => {
      let model = elements[0]._model;
      return {
        x: model.x,
        y: ((model.base + model.y) / 2)
      };
    };

    const plugins = [{
      afterDraw: chart => {
        let ctx = chart.chart.ctx; 
        ctx.save();
        let xAxis = chart.scales['x-axis-0'];
        let yAxis = chart.scales['y-axis-0'];
        xAxis.ticks.forEach((value, index) => {  
          let x = xAxis.getPixelForTick(index);      
          let image = new Image();
          image.src =  '/stock_icons/' + this.props.charImage[index]

            ctx.drawImage(image,  x-14, yAxis.right+650 , image.width*.36, image.height*.36);

          
        });  
        ctx.restore();    
    }}];

    return(
      <div>
        <Bar
         data = {{
          labels: this.props.labels,
          datasets: this.props.dataset,
          }}
          height={'250%'}
         options = {{
           title:{
             display: true,
             text: this.props.title,
             fontSize: 20,
             position: 'top'
           },
          legend:{
            position: 'left',
            
          },
          layout:{
            padding: 60
          },
          plugins: {
            labels: {
              render: "image",
              images: ''
            }
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
                display: false
              },
            ],
          },
          
          tooltips: {
            
            yAlign: 'bottom',
            position: 'average',
            callbacks: {
              label: function(tooltipItem, data) {
                var dataset = data.datasets[tooltipItem.datasetIndex];
                
                var successdataset = data.datasets[0];
                var whiffdataset = data.datasets[1];
                
                return data.labels[tooltipItem.index] + ': ' + dataset.data[tooltipItem.index] + " ("   
                + parseInt((dataset.data[tooltipItem.index] / (successdataset.data[tooltipItem.index]+whiffdataset.data[tooltipItem.index]))*100) + "%)"
              },
              title: function(tooltipItem, data) {
                return data.datasets[tooltipItem[0].datasetIndex].label
              }
              
            }
          }
        }}
        plugins={plugins}
        />
      </div>
    )
  }
}