import React from 'react'
import { Link } from 'react-router-dom'
// import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react';
import ProjectList from './ProjectList';
import {API}from "./global"
// import { useNavigate} from 'react-router-dom';
function Projects() {
  const[apiData,setApiData]=useState([]);
  const roleId=localStorage.getItem('roleId')
  const getApi=()=>{
    fetch(API, {
      method: "GET",
      headers: {
        "x-auth-token": localStorage.getItem("token"),
        roleId:roleId,
      },
  
    })
      .then((data) => checkAuth(data))
      .then((data1) => setApiData(data1))
      .catch((err) => logout());
  }
  useEffect(()=> getApi(),[])
  return (
    <div>
  { apiData.length>0? apiData.map((movie,id)=>(<ProjectList worker={movie}  getApi={getApi} key={id} />)):(<p>No movie or run the db</p>)}
      <Link path={"/create"}>Assign new Project</Link>
    </div>
  )
}

export default Projects
export function checkAuth(data) {
  if (data.status === 401) {
    console.log("Unauthorized")
    throw Error("Unauthorized")
  }
  else {
    return data.json();
  }
}
export function logout() {
  localStorage.removeItem("token")
  window.location.href = "/";

}
