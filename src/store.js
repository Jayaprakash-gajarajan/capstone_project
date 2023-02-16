// import{configureStore} from '@reduxjs/toolkit'
import {configureStore} from "@reduxjs/toolkit"
import WorkerSlice from "./WorkerSlice"

export default configureStore({
    reducer:{
       member:WorkerSlice,
       
    },
})
