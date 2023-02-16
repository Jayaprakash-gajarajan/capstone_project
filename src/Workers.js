import React from 'react'
import Card from '@mui/material/Card';
import { CardContent } from '@mui/material';
import { LineAxis } from '@mui/icons-material';
import { Link} from 'react-router-dom';
// const workers=[
//   {
//     "name":"prakash",
//     "role":"full stack developer",
//     "image":"https://m.media-amazon.com/images/M/MV5BMmJhYTYxMGEtNjQ5NS00MWZiLWEwN2ItYjJmMWE2YTU1YWYxXkEyXkFqcGdeQXVyMTEzNzg0Mjkx._V1_.jpg",
//     "project":"Web App",
//     "status":"on Going"
//   },
//   {
//     "name":"kamalesh",
//     "role":"junior developer",
//     "image":"https://m.media-amazon.com/images/M/MV5BMmJhYTYxMGEtNjQ5NS00MWZiLWEwN2ItYjJmMWE2YTU1YWYxXkEyXkFqcGdeQXVyMTEzNzg0Mjkx._V1_.jpg",
//     "project":"Web site",
//     "status":"on Going"
//   }
// ]
function Workers({worker}) {
  return (
    
    <div className='worker_container'>
     <Card className='worker_list'>
      <CardContent>
        <h2>Name: {worker.name}</h2>
        <h3>Role: {worker.role}</h3>
        <img className='pic' src={worker.image}></img>
        <h3>Project Tittle: {worker.project}</h3>
        <h3>Project Status: {worker.status}</h3>
        <h3>End Date: {worker.end_date}</h3>
        <Link to={`chart${worker.no}`}>View Details</Link>
      </CardContent>
     </Card>
    </div>
  )
}

export default Workers
