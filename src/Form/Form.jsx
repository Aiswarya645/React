import React, { useState } from 'react'

const Form = () => {
    const[data,setdata]=useState("")

    const handlechange=(event)=>{
      setdata({...data,[event.target.name]:event.target.value})
    }
    const handlesubmit=(event)=>{
             event.preventDefault()
             setdata(data)
             console.log(data);
             
    }
  return (
    <div>
        <form onSubmit={handlesubmit}>
            <label htmlFor="">name</label>
            <input type="text" name='name' onChange={handlechange}/>
            <label htmlFor="">age</label>
            <input type="text" name='age' onChange={handlechange} />
            <button>submit</button>
        </form>
    </div>
  )
}

export default Form