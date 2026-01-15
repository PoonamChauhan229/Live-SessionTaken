import {useState,useEffect} from 'react'
import axios from "axios";
const Task = () => {
    const [task,setTask]=useState([])
    // http://localhost:3000/task

      // using axios 
  const getTask=async()=>{
    let response=await axios.get(`http://localhost:3000/task`)
    console.log(response.data)
    setTask(response.data)
  }

   useEffect(()=>{
    getTask()
   },[])
  return (
 <>
    {
        task.map((element, index) => (<h1>{element.taskName}-{element.desc}</h1>))
    }
    
    </>
  )
}

export default Task