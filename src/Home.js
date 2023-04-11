import  {Card, TextField} from "@mui/material";
import {Button} from "@mui/material";
import { useFormik } from "formik";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CardContent } from "semantic-ui-react";
import * as yup from 'yup';
import { API_URL } from "./global1";
import {FaEye, FaEyeSlash} from 'react-icons/fa'
function Home() {
    return (
        <div className='home_container'>
            <img src="https://tse3.mm.bing.net/th?id=OIP.AH4rtp2mJRcoNBnhLzjE1wHaEK&pid=Api&P=0" className="img_home"></img>
        </div>
    );
}
const movieValidationShema = yup.object({
    username: yup.string().required(),
    password:yup.string().required().min(8),
  })
 export function LoginForm(){
    const roleId=localStorage.getItem("roleId");
    const handleToggle=()=>{
        if(passwordType==="password"){
          setPasswordType("text");
          setPasswordIcon(<FaEye/>)
        }
        else{
          setPasswordType("password");
          setPasswordIcon(<FaEyeSlash/>)
        }
      }
          const [passwordType,setPasswordType]=useState("password");
          const [passwordIcon,setPasswordIcon]=useState(<FaEyeSlash/>);
    const [formState,setFormState]=useState("success");
    const navigate=useNavigate();
    const {handleChange,values,handleSubmit,handleBlur, touched, errors}=useFormik({
        initialValues:{username:"",password:""},
        validationSchema: movieValidationShema,
        onSubmit:async(values)=>{
            console.log(values);
         const data = await fetch(API_URL+"/"+"login",{
                method:"POST",
                headers:{
                    "Content-type":"application/json"
                },
                body:JSON.stringify(values),
            });
            if(data.status==401){
                console.log("error");
                setFormState("error")
            }
            else{
                const result= await data.json()
                console.log("success",result);
                localStorage.setItem("token",result.token)
                localStorage.setItem("roleId",result.roleId)
                navigate("/workers")
            }
          
        },
});
    return(
        <div >
            <form onSubmit={handleSubmit} className="login-form" >
                <h2 style={{marginTop:"20px"}}>Login/<Link to={"/signin"}>Sign Up</Link></h2>
            <TextField 
            id="outlined-basic" 
            label="Username"
             variant="outlined"
             onChange={handleChange} 
             onBlur={handleBlur}
             value={values.username}
             name="username"
             /> 
{touched.username && errors.username ? errors.username : null}
           <TextField id="outlined-basic"
            type={passwordType}
            label="Password" 
            variant="outlined" 
            onChange={handleChange} 
            onBlur={handleBlur}
            value={values.password}
            name="password"
            />   
        <span className="eye" onClick={handleToggle}>{passwordIcon}</span>
 {touched.password && errors.password ? errors.password : null}
            <Button  color={formState}
            type="submit" variant="contained">
                {formState ==="error"?"Retry":"Login"}
                </Button>
            </form>
            {roleId ?(<Button onClick={()=>logout()}>Logout</Button>):(null)}
        </div>
    )
}
export default Home;
export function logout() {
    localStorage.removeItem("token")
    localStorage.removeItem("roleId");
    window.location.href = "/";
  
  }
