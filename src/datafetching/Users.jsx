import React, { useState } from 'react'
import axios from 'axios'

const Users = () => {
    const[data,setdata]=useState([])

const fetchdata=async()=>{
    const response=await axios.get("https://jsonplaceholder.typicode.com/posts")
    setdata(response.data)
    console.log(response);
    
}

  return (
    <div>
       <button onClick={fetchdata}>click</button>
       <div>
       {data.map((item)=>(
       <div><h4>{item.id}</h4>
       <h2>{item.userId}</h2>
       <p>{item.title}</p>
       <p>{item.body}</p></div> 
       ))}
       </div>
       </div>
       
  )
}

export default Users