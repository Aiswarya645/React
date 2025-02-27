import React from 'react'
import './Bg.css'
import { useState } from 'react'

const Tog = () => {
    const [color,setcolor]=useState("black")
    const toggleColor = () =>{
       setcolor(color=='black' ? 'yellow':'black')
    }
  return (
    <div style={{backgroundColor:color,height:'100vh'}}>
        <button onClick={toggleColor}>Click Here</button>
    </div>
  )
}

export default Tog
