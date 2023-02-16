import  {TextField} from "@mui/material";
import {Button} from "@mui/material";
import { useFormik } from "formik";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as yup from 'yup';
import { API_URL } from "./global1";
function Home() {
    return (
        <div>
            <h1>Welcom to the Website🙋❤️👩‍💻</h1>
            <h1 style={{color:"blue"}}>Login or Sign in to enter the page</h1>
            {/* <LoginForm/> */}
        </div>
    );
}
const movieValidationShema = yup.object({
    username: yup.string().required(),
    password:yup.string().required().min(8),
  })
 export function LoginForm(){
    const [formState,setFormState]=useState("success");
    const navigate=useNavigate();
    const {handleChange,values,handleSubmit,handleBlur, touched, errors}=useFormik({
        initialValues:{username:"prakash",password:"12345678"},
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
                <h2>Login/<Link to={"/signin"}>Sign in</Link></h2>
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
            label="Password" 
            variant="outlined" 
            onChange={handleChange} 
            onBlur={handleBlur}
            value={values.password}
            name="password"
            />   
 {touched.password && errors.password ? errors.password : null}
            <Button  color={formState}
            type="submit" variant="contained">
                {formState ==="error"?"Retry":"Login"}
                </Button>
            </form>
            <Button onClick={()=>logout()}>Sign Out</Button>
        </div>
    )
}
export default Home;
export function logout() {
    localStorage.removeItem("token")
    localStorage.removeItem("roleId");
    window.location.href = "/";
  
  }
