import React, { useState } from 'react'
import ReactApexChart from 'react-apexcharts'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { Button} from '@mui/material';
import { useNavigate } from 'react-router-dom';
function Employee3_Chart() {
  const navigate=useNavigate();
    const[state,setState]=useState({
          
        series: [85, 80, 61, 100],
        options: {
          chart: {
            height: 390,
            type: 'radialBar',
          },
          plotOptions: {
            radialBar: {
              offsetY: 0,
              startAngle: 0,
              endAngle: 270,
              hollow: {
                margin: 5,
                size: '30%',
                background: 'transparent',
                image: undefined,
              },
              dataLabels: {
                name: {
                  show: false,
                },
                value: {
                  show: false,
                }
              }
            }
          },
          colors: ['#1ab7ea', '#0084ff', '#39539E', '#0077B5'],
          labels: ['Database', 'Server', 'Postman', 'Crud Operation'],
          legend: {
            show: true,
            floating: true,
            fontSize: '16px',
            position: 'left',
            offsetX: 160,
            offsetY: 15,
            labels: {
              useSeriesColors: true,
            },
            markers: {
              size: 0
            },
            formatter: function(seriesName, opts) {
              return seriesName + ":  " + opts.w.globals.series[opts.seriesIndex]
            },
            itemMargin: {
              vertical: 3
            }
          },
          responsive: [{
            breakpoint: 480,
            options: {
              legend: {
                  show: false
              }
            }
          }]
        },
      
      
      })
  return (
    <div className='employee3' style={{margin:"30px"}}>
      <ReactApexChart 
      options={state.options}
       series={state.series} 
       type="radialBar" 
       height={390} 
       />
    <div className='back_button'>
          <Button variant="contained"
            onClick={() => navigate(-1)}
          > <KeyboardBackspaceIcon />Back</Button>
      </div>
    </div>
  )
}

export default Employee3_Chart
