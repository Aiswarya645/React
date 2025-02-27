import axios from 'axios'
import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';


const Fetch = () => {
    const [data,setdata]=useState([])

    const Fetchdata=async()=>{
      const response= await axios.get("https://jsonplaceholder.typicode.com/todos")
      setdata(response.data)
      console.log(response);
      
    }
  return (
    <div className="container mt-4 text-center">
        <button   className="btn btn-primary"onClick={Fetchdata}>Click Here</button>
        <div className="row bg-danger justify-content-center">
            {data.map((item)=>(
                <div className="border "><h3>{item.id}</h3>
                 <h4>{item.userid}</h4>
                 <h5>{item.title}</h5>
                 <h6>{item.completed}</h6></div>
            ))}
        </div>

    </div>
  )
}

export default Fetch