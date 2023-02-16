import React from 'react'
import bootstrap from 'bootstrap'
import { Link } from 'react-router-dom'
import { Form, Checkbox, Table } from 'semantic-ui-react'
import { Button, TextField } from '@mui/material';
import { useEffect, useState } from 'react';
import { useNavigate} from 'react-router-dom';
import axios from 'axios';
import Projects from './Projects';
import {API}from "./global"
const ROLE_ID={
  ADMIN:"0",
  NORMAL_USER:"1",
};
function ProjectList({worker,getApi}) {
  // const worker=[
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
  const navigate = useNavigate();
  const id=localStorage.getItem("id")
  const roleId=localStorage.getItem("roleId")
  const [apiData, setApiData] = useState([]);
  const updateUser = ({ id,no, name, role, project,end_date,status }) => {
    localStorage.setItem("id", id);
    localStorage.setItem("no", no);
    localStorage.setItem("name", name);
    localStorage.setItem("role", role);
    localStorage.setItem("project", project);
    localStorage.setItem("end_date", end_date);
    localStorage.setItem("status", status);
    navigate("/update")
  }
  // const deleteUser = async (id) => {
  //   await axios.delete("http://localhost:4000/workers"+ "/" + id)
  //   callGetAPI();
  // }
 
  const callGetAPI = async () => {
    const resp = await axios.get(`${API}`);
    setApiData(resp.data);
  }
  const deleteUser = async (id) => {
    await axios.delete(API + "/" + id)
    console.log(id);
    callGetAPI();
  }
  // const deleteUser=(id) => {
  //   fetch(API+"/"+id, {
  //       method: "DELETE",
  //       headers: {
  //         "x-auth-token": localStorage.getItem("token"),
  //         roleId:roleId,
  //       },
  
  //     })
  //       .then((data) => checkAuth(data))
  //       .then(() => callGetAPI())
  //       .catch((err) => logout());
  //   }
  useEffect(() => {
    callGetAPI();
  }, []);
  return (
    <div>
      <Table singleLine>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>NO</Table.HeaderCell>
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell>Role</Table.HeaderCell>
            <Table.HeaderCell>Task</Table.HeaderCell>
            <Table.HeaderCell>End Date</Table.HeaderCell>
            <Table.HeaderCell>Status</Table.HeaderCell>
            <Table.HeaderCell>Delete</Table.HeaderCell>
            <Table.HeaderCell>Update</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {
            apiData.map(worker => (

              <Table.Row key={worker.id}>
                <Table.Cell>{worker.no}{worker._id}</Table.Cell>
                <Table.Cell>{worker.name}</Table.Cell>
                <Table.Cell>{worker.role}</Table.Cell>
                <Table.Cell>{worker.project}</Table.Cell>
                <Table.Cell>{worker.end_date}</Table.Cell>
                <Table.Cell>{worker.status}</Table.Cell>
                <Table.Cell><Button onClick={() =>
                  deleteUser(worker.id)}>Delete</Button></Table.Cell>
                <Table.Cell><Button onClick={() =>
                  updateUser(worker)}>Update</Button></Table.Cell>
              </Table.Row>
            ))
         }
        </Table.Body>
      </Table>
      {/* <Button onClick={navigate("/create")}>Assign a Project</Button> */}
      <Link to={"/create"}>Assign a Project</Link>
    </div>
  )
}
export function Create() {
  const navigate = useNavigate();
  const[no,setNo]=useState("");
  const[name,setName]=useState("");
  const[role,setRole]=useState("");
  const[project,setProject]=useState("");
  const[end_date,setEnd_Date]=useState("");
  const[status,setStatus]=useState("");
  const [id, setId] = useState("");
  const postData = async () => {
    await axios.post(API, {
     id,no,name,role,project,end_date,status
    })
    navigate("/projects")
  }

  return (
    <Form>
      <Form.Field>
        <label>No :</label>
        <input value={no}
          onChange={event => setNo(event.target.value)}
          placeholder='Enter No' />
      </Form.Field><br></br>
      <Form.Field>
        <label>Name :</label>
        <input value={name}
          onChange={event => setName(event.target.value)}
          placeholder='Enter Name' />
      </Form.Field><br></br>
      <Form.Field>
      <label>Role :</label>
        <input value={role}
          onChange={event => setRole(event.target.value)}
          placeholder='Enter Role' />
      </Form.Field>
      <br /><br/>
      <Form.Field>
        <label>Project :</label>
        <input value={project}
          onChange={event => setProject(event.target.value)}
          placeholder='Enter Project' />
      </Form.Field><br></br>
      <Form.Field>
        <label>End Date :</label>
        <input value={end_date}
          onChange={event => setEnd_Date(event.target.value)}
          placeholder='Enter Date' />
      </Form.Field><br></br>
      <Form.Field>
        <label>Status :</label>
        <input value={status}
          onChange={event => setStatus(event.target.value)}
          placeholder='Enter Status' />
      </Form.Field><br></br>
      <Button onClick={postData}>Submit</Button>
    </Form>
  )
}
export function Update() {
  const navigate = useNavigate();
  const[no,setNo]=useState("");
  const[name,setName]=useState("");
  const[role,setRole]=useState("");
  const[project,setProject]=useState("");
  const[end_date,setEnd_Date]=useState("");
  const[status,setStatus]=useState("");
  const [id, setId] = useState("");

  const updateUser = async () => {
    await axios.put(API+ "/" + id, {
      no,name,role,project,end_date,status
    })
    navigate("/projects")
  }
  useEffect(() => {
    setId(localStorage.getItem("id"))
    setNo(localStorage.getItem("no"))
    setName(localStorage.getItem("name"))
    setRole(localStorage.getItem("role"))
    setProject(localStorage.getItem("project"))
    setEnd_Date(localStorage.getItem("end_date"))
    setStatus(localStorage.getItem("status"))

  }, [])
  return (
    <Form>
      <Form.Field>
        <label>No :</label>
        <input value={no}
          onChange={event => setNo(event.target.value)}
          placeholder='Enter No' />
      </Form.Field><br></br>
      <Form.Field>
        <label>Name :</label>
        <input value={name}
          onChange={event => setName(event.target.value)}
          placeholder='Enter Name' />
      </Form.Field><br></br>
      <Form.Field>
      <label>Role :</label>
        <input value={role}
          onChange={event => setRole(event.target.value)}
          placeholder='Enter Role' />
      </Form.Field>
      <br /><br/>
      <Form.Field>
        <label>Project :</label>
        <input value={project}
          onChange={event => setProject(event.target.value)}
          placeholder='Enter Project' />
      </Form.Field><br></br>
      <Form.Field>
        <label>End Date :</label>
        <input value={end_date}
          onChange={event => setEnd_Date(event.target.value)}
          placeholder='Enter Date' />
      </Form.Field><br></br>
      <Form.Field>
        <label>Status :</label>
        <input value={status}
          onChange={event => setStatus(event.target.value)}
          placeholder='Enter Status' />
      </Form.Field><br></br>
      <Button onClick={updateUser}>Submit</Button>
    </Form>
  )
}

export default ProjectList
export function checkAuth(worker) {
  if (worker.status === 401) {
    console.log("Unauthorized")
    throw Error("Unauthorized")
  }
  else {
    return worker.json();
  }
}
export function logout() {
  localStorage.removeItem("token")
  window.location.href = "/";

}