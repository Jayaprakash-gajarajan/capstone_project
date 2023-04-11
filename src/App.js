// import logo from './logo.svg';
//the admin is username:prakash,password:prakash@123,roleId:0.
// the admin only see the projects and assign or do the CRUD operation
// the worker data come from the Redux store.
//projects table data come from the global API.
// using different chart for different user for project complition.

import './App.css';
import { Route, Routes,Navigate, useNavigate } from 'react-router-dom';
import Home from './Home';
import WorkersList from './WorkersList';
import { AppBar, Button, Toolbar } from '@mui/material';
import Signin from './Signin';
import { LoginForm } from './Home';
import Projects, { Create, Update } from './ProjectList';
import Employee1_Chart from './Employee1_Chart';
import Employee2_Chart from './Employee2_Chart';
import Employee3_Chart from './Employee3_Chart';

// import ProjectList from './Projects';
import ProjectList from './ProjectList';
function App() {
  // const workers=[
  //   {
  //     "no":1,
  //     "name":"Jayaprakash.G",
  //     "role":"full stack developer",
  //     "image":"https://tse3.mm.bing.net/th?id=OIP.L9b3gYNQIuJby9bGrrV3BgAAAA&pid=Api&P=0",
  //     "project":"Web App",
  //     "status":"Active",
  //     "end_date":"12-2-2023"
  //   },
  //   {
  //     "no":2,
  //     "name":"kamalesh.T",
  //     "role":"junior developer",
  //     "image":"https://tse2.mm.bing.net/th?id=OIP.5WRSGFl3y6BuPOp3sqsZjAHaIJ&pid=Api&P=0",
  //     "project":"Web site",
  //     "status":"Active",
  //     "end_date":"15-2-2023"
  //   },
  //   {
  //     "no":3,
  //     "name":"Sakthivel S",
  //     "role":"Backend developer",
  //     "image":"https://tse2.mm.bing.net/th?id=OIP.KaslBAJqT34oAwE3NFm5EgAAAA&pid=Api&P=0",
  //     "project":"Create a new Server",
  //     "status":"Active",
  //     "end_date":"10-2-2023"
  //   }
  // ]
  const roleId=localStorage.getItem('roleId')
  const navigate=useNavigate();
  return (
    <div className="App">
      <AppBar position="static">
            <Toolbar>
              <Button color="inherit" onClick={() => navigate("/")}>Home</Button>
              <Button color="inherit" onClick={() => navigate("/workers")}>Employees List</Button>
             {roleId==0?<Button color="inherit" onClick={() => navigate("/projects")}>PROJECTS</Button>:null}
              {roleId?(<Button color="inherit" style={{marginLeft:"auto"}} onClick={()=>logout()}>LOGOUT</Button>):(<Button style={{marginLeft:"auto"}} color="inherit" onClick={() => navigate("/login")}>LOGIN</Button>)}
            </Toolbar>
          </AppBar>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
    <Route path='/login' element={<LoginForm/>}></Route>
      <Route path='/signin' element={<Signin/>}></Route>
      <Route path='/workers'element={
                <ProdectedRoute>
                  <WorkersList/>
                </ProdectedRoute>
                  }></Route>
      <Route path='/projects' element={
            <ProdectedRoute>
               <Projects/>
            </ProdectedRoute>
      }></Route>
      <Route path='/workers/chart1'element={<Employee1_Chart/>}></Route>
      <Route path='/workers/chart2'element={<Employee2_Chart/>}></Route>
      <Route path='/workers/chart3'element={<Employee3_Chart/>}></Route>
      <Route path='/update'element={<Update/>}></Route>
      <Route path='/create'element={<Create/>}></Route>
    </Routes>
    </div>
  );
}
function ProdectedRoute({ children }) {
  const isAuth = localStorage.getItem("token");
  console.log(isAuth)
  return isAuth ? children : <Navigate replace to={"/"} />
}
//checkAuth is normal fuction not a component
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
  localStorage.removeItem("roleId")

  window.location.href = "/";

}

export default App;
