import React from 'react'
import Workers from './Workers'
import { useSelector } from 'react-redux'
// const workers=[
//     {
//       "no":1,
//       "name":"Jayaprakash.G",
//       "role":"full stack developer",
//       "image":"https://tse3.mm.bing.net/th?id=OIP.L9b3gYNQIuJby9bGrrV3BgAAAA&pid=Api&P=0",
//       "project":"Web App",
//       "status":"Active",
//       "end_date":"12-2-2023"
//     },
//     {
//       "no":2,
//       "name":"kamalesh.T",
//       "role":"junior developer",
//       "image":"https://tse2.mm.bing.net/th?id=OIP.5WRSGFl3y6BuPOp3sqsZjAHaIJ&pid=Api&P=0",
//       "project":"Web site",
//       "status":"Active",
//       "end_date":"15-2-2023"
//     },
//     {
//       "no":3,
//       "name":"Sakthivel S",
//       "role":"Backend developer",
//       "image":"https://tse2.mm.bing.net/th?id=OIP.KaslBAJqT34oAwE3NFm5EgAAAA&pid=Api&P=0",
//       "project":"Create a new Server",
//       "status":"Active",
//       "end_date":"10-2-2023"
//     }
//   ]
//   {workers.map((worker,key)=>(<Workers worker={worker} key={key}/>))}
function WorkersList() {
  const{items}=useSelector((state)=>state.member)
  return (
    <div>
     <h1 style={{paddingTop:"20px"}}>Employees & Work Details</h1>
    {items.length>0?(items.map((worker,key)=>
    (<Workers worker={worker} key={key}/>)
    )):(<p>no members</p>)}
    </div>
  )
}

export default WorkersList
