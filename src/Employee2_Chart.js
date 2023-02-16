import React,{useState} from 'react'
import ReactApexChart from 'react-apexcharts'
import { useNavigate } from 'react-router-dom';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { Button} from '@mui/material';
function Employee2_Chart() {
  const navigate=useNavigate();
    const[state,setState]=useState({    
        series: [14, 20, 21, 17, 15, 10, 12, 17, 21],
        options: {
          chart: {
            type: 'polarArea',
          },
          stroke: {
            colors: ['#fff']
          },
          fill: {
            opacity: 0.8
          },
          responsive: [{
            breakpoint: 480,
            options: {
              chart: {
                width: 300
              },
              legend: {
                position: 'bottom'
              }
            }
          }]
        },
      
      
      })
  return (
    <div className='chart2'>
        <h3 className='chart2_tag'>Series is consider as february Month & Date </h3>
      <ReactApexChart 
      options={state.options} 
      series={state.series} 
      type="polarArea" 
      />
      <div className='back_button'>
          <Button variant="contained"
            onClick={() => navigate(-1)}
          > <KeyboardBackspaceIcon />Back</Button>
      </div>
    </div>
  )
}

export default Employee2_Chart
