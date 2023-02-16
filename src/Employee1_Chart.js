import { Stack } from '@mui/material'
import React, { useState } from 'react'
import ReactApexChart from "react-apexcharts"
import { useNavigate } from 'react-router-dom';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { Button} from '@mui/material';
function Employee1_Chart() {
  const navigate=useNavigate();
    const[state,setState]=useState({
          
        series: [{
          name: 'Project Completion',
          type: 'column',
          data: [440, 505, 414, 671, 227, 413, 201, 352, 752, 320, 257, 160]
        }, {
          name: 'Percentage',
          type: 'line',
          data: [30, 35, 29, 49, 15, 28, 13, 25, 57, 23, 18, 13]
        }],
        options: {
          chart: {
            height: 350,
            type: 'line',
          },
          stroke: {
            width: [0, 4]
          },
          title: {
            text: 'Traffic Sources'
          },
          dataLabels: {
            enabled: true,
            enabledOnSeries: [1]
          },
          labels: ['02 Feb 2023', '03 Feb 2023', '04 Feb 2023', '05 Feb 2023', '06 Feb 2023','07 Feb 2023', '09 Feb 2023', '10 Feb 2023', '11 Feb 2023', '12 Feb 2023', '13 Feb 2023', '14 Feb 2023'],
          xaxis: {
            type: 'datetime'
          },
          yaxis: [{
            title: {
              text: 'Web App',
            },
          
          },
           {
            opposite: true,
            title: {
              text: 'Web App'
            }
          }
        ]
        },
      
      
      })
  return (
    <div style={{marginTop:"35px"}}>
      {/* <ReactApexChart 
      options={state.options}
      series={state.series} 
      type="line" height={350} 
      /> */}
      <ReactApexChart 
      options={state.options}
      series={state.series} 
      type="area" height={350} 
      />
      <div className='back_button'>
          <Button variant="contained"
            onClick={() => navigate(-1)}
          > <KeyboardBackspaceIcon />Back</Button>
      </div>
    </div>
  )
}

export default Employee1_Chart
